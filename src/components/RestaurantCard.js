import { CDN_URL } from "../utils/constants";
const RestaurantCard = ({resData}) => {
    const{data}=resData;
    const{name,cuisines,avgRating,costForTwo,deliveryTime,cloudinaryImageId} = data;
    
    return (
        <div className="res-card m-3 p-3 w-[200px] bg-gray-200 h-[460px] rounded-lg hover:bg-gray-300 ">
            <img className="res-logo mb-2 rounded-lg" src={CDN_URL+cloudinaryImageId} alt="error" />
            <h4 className="font-bold py-1 text-lg">{name}</h4>
            <h5>{cuisines.join(", ")}</h5>
            <h5>{avgRating} star</h5>
            <h5>{costForTwo/100} Rupees</h5>
            <h5>{deliveryTime} minutes</h5>
        </div>
    )
}

 export const withPromotedLabel = (RestaurantCard) =>{
    return (props)=>{
        return (
            <div>
            <label className="absolute bg-black text-white m-2 p-2 rounded-lg">Promoted</label>
            <RestaurantCard {...props} />
            </div>
        )
    }
}

export default RestaurantCard;