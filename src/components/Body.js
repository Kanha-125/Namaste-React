import RestaurantCard from "./RestaurantCard.js";
import resList from "../utils/mockData.js";
import { useState } from "react";
console.log(resList);
const Body = () =>  {
    const [listOfRestaurants,setListOfRestaurants] = useState(resList);
    console.log(listOfRestaurants);
    return (
        <div className="body">
            <div className="filter">
                <button className="filter-btn" onClick={()=>{
                    const filterList = listOfRestaurants.filter(
                        (res) => res.data.avgRating >4 );
                    setListOfRestaurants(filterList);
                }}>Top Rated Restaurants</button>
            </div>
            <div className="res-container">
                {
                    listOfRestaurants.map((restaurant)=>(
                        <RestaurantCard  key={restaurant.data.id} resData={restaurant}/>
                    ))
                }
                
                
            </div>
        </div>
    )
}

export default Body;
