import { CDN_URL } from "../utils/constants";
const RestaurantCard = ({resData}) => {
    const{data}=resData;
    const{name,cuisines,avgRating,costForTwo,deliveryTime,cloudinaryImageId} = data;
    
    return (
        <div className="res-card">
            <img className="res-logo" src={CDN_URL+cloudinaryImageId} alt="error" />
            <h4>{name}</h4>
            <h5>{cuisines.join(", ")}</h5>
            <h5>{avgRating} star</h5>
            <h5>{costForTwo/100} Rupees</h5>
            <h5>{deliveryTime} minutes</h5>
        </div>
    )
}

export default RestaurantCard;