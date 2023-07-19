import RestaurantCard from "./RestaurantCard.js";
import { useState ,useEffect} from "react";
import Shimmer from "./Shimmer.js";
import { Link } from "react-router-dom";
import useOnlineStatus from "../utils/useOnlineStatus.js";

const Body = () =>  {
    const [listOfRestaurants,setListOfRestaurants] = useState([]);
    const [searchText,setSearchText] = useState("");
    const [filteredRestaurant, setFilteredRestaurant]=useState([]);

    useEffect(()=>{
        fetchData();
    },[]);

    useEffect(()=>{
        const filterdList = listOfRestaurants.filter((res)=> res.data.name.toLowerCase().includes(searchText.toLowerCase()));
        setFilteredRestaurant(filterdList);
    },[searchText])



    const fetchData = async() => {
        const data = await fetch("https://www.swiggy.com/dapi/restaurants/list/v5?lat=12.9351929&lng=77.62448069999999&page_type=DESKTOP_WEB_LISTING")
        const json = await data.json();
        setListOfRestaurants(json?.data?.cards[2]?.data?.data?.cards);
        setFilteredRestaurant(json?.data?.cards[2]?.data?.data?.cards);
    }

    const getOnlineStaus = useOnlineStatus();

    if(getOnlineStaus===false) return <h1>Looks like you are offline !! Please check your internet connection</h1>
    
    return listOfRestaurants.length===0 ?
        <Shimmer/> :    
        <div className="body">
            <div className="filter flex m-4">
                <div className="search m-2 p-2">
                    <input type="text" 
                        className="border border-solid border-black rounded-sm w-80" 
                        value={searchText}
                        onChange={(e)=>{
                            setSearchText(e.target.value);
                        }} 
                        
                        />
                        <button  className=" px-4 bg-green-100 m-3 py-1 rounded-lg hover:bg-green-300" onClick={()=>{ 
                            const filterdList = listOfRestaurants.filter((res)=> res.data.name.toLowerCase().includes(searchText.toLowerCase()));
                            setFilteredRestaurant(filterdList);

                        }}>Search</button>
                </div>
                <div className="m-2 p-2 flex items-center">
                    <button className="filter-btn px-4 py-1 bg-gray-200 rounded-lg hover:bg-gray-400" 
                    onClick={()=>{
                    const filterList = listOfRestaurants.filter(
                    (res) => res.data.avgRating >4 );
                    setFilteredRestaurant(filterList);
                    }}>Top Rated Restaurants</button>
                </div>
                
                </div>
                <div className="res-container flex flex-wrap">
                    {
                        filteredRestaurant.map((restaurant)=>(
                           <Link key={restaurant.data.id}  to={"/restaurant/"+restaurant.data.id}> <RestaurantCard  resData={restaurant}/></Link>
                        ))
                    }
                    
                    
                </div>
        </div>
    
    
    
}

export default Body;
