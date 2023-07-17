import RestaurantCard from "./RestaurantCard.js";
import { useState ,useEffect} from "react";
import Shimmer from "./Shimmer.js";

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
    
    return listOfRestaurants.length===0 ?
        <Shimmer/> :    
        <div className="body">
                <div className="filter">
                    <div className="search">
                        <input type="text" 
                        className="search-box" 
                        value={searchText}
                        onChange={(e)=>{
                            setSearchText(e.target.value);
                        }} 
                        
                        />
                        <button onClick={()=>{ 
                            const filterdList = listOfRestaurants.filter((res)=> res.data.name.toLowerCase().includes(searchText.toLowerCase()));
                            setFilteredRestaurant(filterdList);

                        }}>Search</button>
                    </div>
                    <button className="filter-btn" 
                    onClick={()=>{
                        const filterList = listOfRestaurants.filter(
                            (res) => res.data.avgRating >4 );
                        setListOfRestaurants(filterList);
                    }}>Top Rated Restaurants</button>
                </div>
                <div className="res-container">
                    {
                        filteredRestaurant.map((restaurant)=>(
                            <RestaurantCard  key={restaurant.data.id} resData={restaurant}/>
                        ))
                    }
                    
                    
                </div>
        </div>
    
    
    
}

export default Body;
