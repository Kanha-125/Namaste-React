import React from "react";
import ReactDOM from "react-dom/client";




const Header = () => {
    return (
        <div className="header">
            <div className="logo-container">
                <img className="logo" src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRVermuyA5zuSvADyNPet-giCboNoUHK52G9w&usqp=CAU" alt="error" />
            </div>
            <div className="nav-items">
                <ul>
                    <li>Home</li>
                    <li>About</li>
                    <li>Contact Us</li>
                    <li>Cart</li>
                </ul>
            </div>
        </div>
    )
}

const resList = [
    {
      "type": "restaurant",
      "data": {
        "type": "F",
        "id": "280529",
        "name": "Empire Juices and Desserts",
        "uuid": "f9c0f6b4-5f40-4aa6-aa52-737a0119f9f2",
        "city": "1",
        "area": "Koramangala",
        "totalRatingsString": "500+ ratings",
        "cloudinaryImageId": "fjmwiiacfpfx8wfvjfmk",
        "cuisines": [
          "Juices",
          "Ice Cream"
        ],
        "tags": [
          
        ],
        "costForTwo": 20000,
        "costForTwoString": "₹200 FOR TWO",
        "deliveryTime": 55,
        "minDeliveryTime": 55,
        "maxDeliveryTime": 55,
        "slaString": "55 MINS",
        "lastMileTravel": 1.2999999523162842,
        "slugs": {
          "restaurant": "the-empire-juice-shop-koramangala-koramangala",
          "city": "bangalore"
        },
        "cityState": "1",
        "address": "NO.103, INDUSTRIAL AREA, 5TH BLOCK KORAMANGALA,BANGALORE-560095",
        "locality": "5th Block",
        "parentId": 387289,
        "unserviceable": false,
        "veg": false,
        "select": false,
        "favorite": false,
        "tradeCampaignHeaders": [
          
        ],
        "ribbon": [
          {
            "type": "PROMOTED"
          }
        ],
        "chain": [
          
        ],
        "feeDetails": {
          "fees": [
            {
              "name": "distance",
              "fee": 3000,
              "message": ""
            },
            {
              "name": "time",
              "fee": 0,
              "message": ""
            },
            {
              "name": "special",
              "fee": 0,
              "message": ""
            }
          ],
          "totalFees": 3000,
          "message": "",
          "title": "Delivery Charge",
          "amount": "3000",
          "icon": ""
        },
        "availability": {
          "opened": true,
          "nextOpenMessage": "",
          "nextCloseMessage": ""
        },
        "longDistanceEnabled": 0,
        "rainMode": "NONE",
        "thirdPartyAddress": false,
        "thirdPartyVendor": "",
        "adTrackingID": "cid=7491521~p=1~eid=00000189-5f47-2618-1351-d32b0002012a~srvts=1689520645656",
        "badges": {
          "imageBased": [
            
          ],
          "textBased": [
            
          ],
          "textExtendedBadges": [
            
          ]
        },
        "lastMileTravelString": "1.2 kms",
        "hasSurge": false,
        "aggregatedDiscountInfoV3": {
          "header": "20% OFF",
          "subHeader": "UPTO ₹50",
          "discountTag": "",
          "headerTypeV2": 0
        },
        "sla": {
          "restaurantId": "280529",
          "deliveryTime": 55,
          "minDeliveryTime": 55,
          "maxDeliveryTime": 55,
          "lastMileTravel": 1.2999999523162842,
          "lastMileDistance": 0,
          "serviceability": "SERVICEABLE",
          "rainMode": "NONE",
          "longDistance": "NOT_LONG_DISTANCE",
          "preferentialService": false,
          "iconType": "EMPTY"
        },
        "promoted": true,
        "avgRating": "3.9",
        "totalRatings": 500,
        "new": false
      },
      "subtype": "basic"
    },
    {
      "type": "restaurant",
      "data": {
        "type": "F",
        "id": "428",
        "name": "Biryani Pot",
        "uuid": "6db20a8b-dd85-4148-b750-107169f7f826",
        "city": "1",
        "area": "Btm Layout",
        "totalRatingsString": "10000+ ratings",
        "cloudinaryImageId": "mdipoyzfzsa7n7igskht",
        "cuisines": [
          "North Indian",
          "Biryani"
        ],
        "tags": [
          
        ],
        "costForTwo": 50000,
        "costForTwoString": "₹500 FOR TWO",
        "deliveryTime": 27,
        "minDeliveryTime": 27,
        "maxDeliveryTime": 27,
        "slaString": "27 MINS",
        "lastMileTravel": 1.899999976158142,
        "slugs": {
          "restaurant": "biryani-pot-madiwala-junction-btm",
          "city": "bangalore"
        },
        "cityState": "1",
        "address": "14th  Cross, 4th link Road Maruthi Nagar Madiwala Bangalore 68",
        "locality": "Maruti Nagar",
        "parentId": 21798,
        "unserviceable": false,
        "veg": false,
        "select": false,
        "favorite": false,
        "tradeCampaignHeaders": [
          
        ],
        "chain": [
          
        ],
        "feeDetails": {
          "fees": [
            {
              "name": "distance",
              "fee": 3000,
              "message": ""
            },
            {
              "name": "time",
              "fee": 0,
              "message": ""
            },
            {
              "name": "special",
              "fee": 0,
              "message": ""
            }
          ],
          "totalFees": 3000,
          "message": "",
          "title": "Delivery Charge",
          "amount": "3000",
          "icon": ""
        },
        "availability": {
          "opened": true,
          "nextOpenMessage": "",
          "nextCloseMessage": ""
        },
        "longDistanceEnabled": 0,
        "rainMode": "NONE",
        "thirdPartyAddress": false,
        "thirdPartyVendor": "",
        "adTrackingID": "",
        "badges": {
          "imageBased": [
            
          ],
          "textBased": [
            
          ],
          "textExtendedBadges": [
            
          ]
        },
        "lastMileTravelString": "1.8 kms",
        "hasSurge": false,
        "aggregatedDiscountInfoV3": {
          "header": "20% OFF",
          "subHeader": "UPTO ₹50",
          "discountTag": "",
          "headerTypeV2": 0
        },
        "sla": {
          "restaurantId": "428",
          "deliveryTime": 27,
          "minDeliveryTime": 27,
          "maxDeliveryTime": 27,
          "lastMileTravel": 1.899999976158142,
          "lastMileDistance": 0,
          "serviceability": "SERVICEABLE",
          "rainMode": "NONE",
          "longDistance": "NOT_LONG_DISTANCE",
          "preferentialService": false,
          "iconType": "EMPTY"
        },
        "promoted": false,
        "avgRating": "3.9",
        "totalRatings": 10000,
        "new": false
      },
      "subtype": "basic"
    },
    {
      "type": "restaurant",
      "data": {
        "type": "F",
        "id": "229",
        "name": "Meghana Foods",
        "uuid": "4fdd19e2-5d0f-4bde-9c7f-dc3e8d36021f",
        "city": "1",
        "area": "Koramangala",
        "totalRatingsString": "10000+ ratings",
        "cloudinaryImageId": "xqwpuhgnsaf18te7zvtv",
        "cuisines": [
          "Biryani",
          "Andhra",
          "South Indian",
          "North Indian",
          "Chinese",
          "Seafood"
        ],
        "tags": [
          
        ],
        "costForTwo": 50000,
        "costForTwoString": "₹500 FOR TWO",
        "deliveryTime": 42,
        "minDeliveryTime": 42,
        "maxDeliveryTime": 42,
        "slaString": "42 MINS",
        "lastMileTravel": 1.399999976158142,
        "slugs": {
          "restaurant": "meghana-foods-5th-block-koramangala",
          "city": "bangalore"
        },
        "cityState": "1",
        "address": "124, Near Jyothi Nivas College, 1st Cross, KHB Colony, Koramangala 5th Block, Bangalore",
        "locality": "5th Block",
        "parentId": 635,
        "unserviceable": false,
        "veg": false,
        "select": false,
        "favorite": false,
        "tradeCampaignHeaders": [
          
        ],
        "chain": [
          
        ],
        "feeDetails": {
          "fees": [
            {
              "name": "distance",
              "fee": 3000,
              "message": ""
            },
            {
              "name": "time",
              "fee": 0,
              "message": ""
            },
            {
              "name": "special",
              "fee": 0,
              "message": ""
            }
          ],
          "totalFees": 3000,
          "message": "",
          "title": "Delivery Charge",
          "amount": "3000",
          "icon": ""
        },
        "availability": {
          "opened": true,
          "nextOpenMessage": "",
          "nextCloseMessage": ""
        },
        "longDistanceEnabled": 0,
        "rainMode": "NONE",
        "thirdPartyAddress": false,
        "thirdPartyVendor": "",
        "adTrackingID": "",
        "badges": {
          "imageBased": [
            
          ],
          "textBased": [
            
          ],
          "textExtendedBadges": [
            
          ]
        },
        "lastMileTravelString": "1.3 kms",
        "hasSurge": false,
        "sla": {
          "restaurantId": "229",
          "deliveryTime": 42,
          "minDeliveryTime": 42,
          "maxDeliveryTime": 42,
          "lastMileTravel": 1.399999976158142,
          "lastMileDistance": 0,
          "serviceability": "SERVICEABLE",
          "rainMode": "NONE",
          "longDistance": "NOT_LONG_DISTANCE",
          "preferentialService": false,
          "iconType": "EMPTY"
        },
        "promoted": false,
        "avgRating": "4.3",
        "totalRatings": 10000,
        "new": false
      },
      "subtype": "basic"
    },
    {
      "type": "restaurant",
      "data": {
        "type": "F",
        "id": "44462",
        "name": "XO Belgian Waffle",
        "uuid": "a61a0815-b0ee-4abb-a257-a78a4fb1d6d0",
        "city": "1",
        "area": "Koramangala",
        "totalRatingsString": "10000+ ratings",
        "cloudinaryImageId": "hqtrdytdqec0ih3pfy5u",
        "cuisines": [
          "Desserts"
        ],
        "tags": [
          
        ],
        "costForTwo": 25000,
        "costForTwoString": "₹250 FOR TWO",
        "deliveryTime": 45,
        "minDeliveryTime": 45,
        "maxDeliveryTime": 45,
        "slaString": "45 MINS",
        "lastMileTravel": 1.2999999523162842,
        "slugs": {
          "restaurant": "xo-belgian-waffle-koramangala-koramangala",
          "city": "bangalore"
        },
        "cityState": "1",
        "address": "#105, 1st A Cross, Jyoti Niwas College Road, Kormangala 5th block",
        "locality": "5th Block",
        "parentId": 5186,
        "unserviceable": false,
        "veg": true,
        "select": false,
        "favorite": false,
        "tradeCampaignHeaders": [
          
        ],
        "ribbon": [
          {
            "type": "PROMOTED"
          }
        ],
        "chain": [
          
        ],
        "feeDetails": {
          "fees": [
            {
              "name": "distance",
              "fee": 3000,
              "message": ""
            },
            {
              "name": "time",
              "fee": 0,
              "message": ""
            },
            {
              "name": "special",
              "fee": 0,
              "message": ""
            }
          ],
          "totalFees": 3000,
          "message": "",
          "title": "Delivery Charge",
          "amount": "3000",
          "icon": ""
        },
        "availability": {
          "opened": true,
          "nextOpenMessage": "",
          "nextCloseMessage": ""
        },
        "longDistanceEnabled": 0,
        "rainMode": "NONE",
        "thirdPartyAddress": false,
        "thirdPartyVendor": "",
        "adTrackingID": "cid=7496001~p=4~eid=00000189-5f47-2618-1351-d32c00020464~srvts=1689520645656",
        "badges": {
          "imageBased": [
            
          ],
          "textBased": [
            
          ],
          "textExtendedBadges": [
            
          ]
        },
        "lastMileTravelString": "1.2 kms",
        "hasSurge": false,
        "aggregatedDiscountInfoV3": {
          "header": "20% OFF",
          "subHeader": "UPTO ₹50",
          "discountTag": "",
          "headerTypeV2": 0
        },
        "sla": {
          "restaurantId": "44462",
          "deliveryTime": 45,
          "minDeliveryTime": 45,
          "maxDeliveryTime": 45,
          "lastMileTravel": 1.2999999523162842,
          "lastMileDistance": 0,
          "serviceability": "SERVICEABLE",
          "rainMode": "NONE",
          "longDistance": "NOT_LONG_DISTANCE",
          "preferentialService": false,
          "iconType": "EMPTY"
        },
        "promoted": true,
        "avgRating": "4.3",
        "totalRatings": 10000,
        "new": false
      },
      "subtype": "basic"
    },
    {
      "type": "restaurant",
      "data": {
        "type": "F",
        "id": "121603",
        "name": "Kannur Food Point",
        "uuid": "51983905-e698-4e31-b0d7-e376eca56320",
        "city": "1",
        "area": "Tavarekere",
        "totalRatingsString": "10000+ ratings",
        "cloudinaryImageId": "bmwn4n4bn6n1tcpc8x2h",
        "cuisines": [
          "Kerala",
          "Chinese"
        ],
        "tags": [
          
        ],
        "costForTwo": 30000,
        "costForTwoString": "₹300 FOR TWO",
        "deliveryTime": 35,
        "minDeliveryTime": 35,
        "maxDeliveryTime": 35,
        "slaString": "35 MINS",
        "lastMileTravel": 3,
        "slugs": {
          "restaurant": "kannur-food-point-btm",
          "city": "bangalore"
        },
        "cityState": "1",
        "address": "6/21,9TH CROSS ,1ST MAIN, VENKATESHWARA LAYOUT,SG PALYA, BENGALURU, - 560093",
        "locality": "SG Palya",
        "parentId": 20974,
        "unserviceable": false,
        "veg": false,
        "select": false,
        "favorite": false,
        "tradeCampaignHeaders": [
          
        ],
        "chain": [
          
        ],
        "feeDetails": {
          "fees": [
            {
              "name": "distance",
              "fee": 4000,
              "message": ""
            },
            {
              "name": "time",
              "fee": 0,
              "message": ""
            },
            {
              "name": "special",
              "fee": 0,
              "message": ""
            }
          ],
          "totalFees": 4000,
          "message": "",
          "title": "Delivery Charge",
          "amount": "4000",
          "icon": ""
        },
        "availability": {
          "opened": true,
          "nextOpenMessage": "",
          "nextCloseMessage": ""
        },
        "longDistanceEnabled": 0,
        "rainMode": "NONE",
        "thirdPartyAddress": false,
        "thirdPartyVendor": "",
        "adTrackingID": "",
        "badges": {
          "imageBased": [
            
          ],
          "textBased": [
            
          ],
          "textExtendedBadges": [
            
          ]
        },
        "lastMileTravelString": "3 kms",
        "hasSurge": false,
        "aggregatedDiscountInfoV3": {
          "header": "50% OFF",
          "subHeader": "",
          "discountTag": "FLAT DEAL",
          "headerTypeV2": 0
        },
        "sla": {
          "restaurantId": "121603",
          "deliveryTime": 35,
          "minDeliveryTime": 35,
          "maxDeliveryTime": 35,
          "lastMileTravel": 3,
          "lastMileDistance": 0,
          "serviceability": "SERVICEABLE",
          "rainMode": "NONE",
          "longDistance": "NOT_LONG_DISTANCE",
          "preferentialService": false,
          "iconType": "EMPTY"
        },
        "promoted": false,
        "avgRating": "3.8",
        "totalRatings": 10000,
        "new": false
      },
      "subtype": "basic"
    },
    {
      "type": "restaurant",
      "data": {
        "type": "F",
        "id": "59593",
        "name": "Al Daaz",
        "uuid": "c189b92c-d842-4595-9a1f-ff85bd67bc2a",
        "city": "1",
        "area": "Hsr Layout",
        "totalRatingsString": "10000+ ratings",
        "cloudinaryImageId": "rxsvhvcdip9dbfdijzk9",
        "cuisines": [
          "American",
          "Arabian",
          "Chinese",
          "Desserts",
          "Mughlai",
          "North Indian"
        ],
        "tags": [
          
        ],
        "costForTwo": 40000,
        "costForTwoString": "₹400 FOR TWO",
        "deliveryTime": 51,
        "minDeliveryTime": 51,
        "maxDeliveryTime": 51,
        "slaString": "51 MINS",
        "lastMileTravel": 4.400000095367432,
        "slugs": {
          "restaurant": "al-daaz-hsr-hsr",
          "city": "bangalore"
        },
        "cityState": "1",
        "address": "#64 & 65, 27th Main Rd, 1st Sector HSR Layout - 560102",
        "locality": "HSR",
        "parentId": 21640,
        "unserviceable": false,
        "veg": false,
        "select": false,
        "favorite": false,
        "tradeCampaignHeaders": [
          
        ],
        "chain": [
          
        ],
        "feeDetails": {
          "fees": [
            {
              "name": "distance",
              "fee": 4000,
              "message": ""
            },
            {
              "name": "time",
              "fee": 0,
              "message": ""
            },
            {
              "name": "special",
              "fee": 0,
              "message": ""
            }
          ],
          "totalFees": 4000,
          "message": "",
          "title": "Delivery Charge",
          "amount": "4000",
          "icon": ""
        },
        "availability": {
          "opened": true,
          "nextOpenMessage": "",
          "nextCloseMessage": ""
        },
        "longDistanceEnabled": 0,
        "rainMode": "NONE",
        "thirdPartyAddress": false,
        "thirdPartyVendor": "",
        "adTrackingID": "",
        "badges": {
          "imageBased": [
            
          ],
          "textBased": [
            
          ],
          "textExtendedBadges": [
            
          ]
        },
        "lastMileTravelString": "4.4 kms",
        "hasSurge": false,
        "sla": {
          "restaurantId": "59593",
          "deliveryTime": 51,
          "minDeliveryTime": 51,
          "maxDeliveryTime": 51,
          "lastMileTravel": 4.400000095367432,
          "lastMileDistance": 0,
          "serviceability": "SERVICEABLE",
          "rainMode": "NONE",
          "longDistance": "NOT_LONG_DISTANCE",
          "preferentialService": false,
          "iconType": "EMPTY"
        },
        "promoted": false,
        "avgRating": "4.3",
        "totalRatings": 10000,
        "new": false
      },
      "subtype": "basic"
    },
    {
      "type": "restaurant",
      "data": {
        "type": "F",
        "id": "699557",
        "name": "Maverick & Farmer Coffee",
        "uuid": "d93a8dac-67ba-4f58-9d38-dd01ff29d89d",
        "city": "1",
        "area": "Koramangala",
        "totalRatingsString": "20+ ratings",
        "cloudinaryImageId": "b0e45408b42ce8815abdbadc11644f80",
        "cuisines": [
          "Beverages",
          "American",
          "Fast Food",
          "Snacks"
        ],
        "tags": [
          
        ],
        "costForTwo": 80000,
        "costForTwoString": "₹800 FOR TWO",
        "deliveryTime": 40,
        "minDeliveryTime": 40,
        "maxDeliveryTime": 40,
        "slaString": "40 MINS",
        "lastMileTravel": 0.800000011920929,
        "slugs": {
          "restaurant": "maverick-&-farmer-coffee-koramangala-koramangala",
          "city": "bangalore"
        },
        "cityState": "1",
        "address": "163, 15th Main Rd, Koramangala 4th Block, Koramangala, Bengaluru, Karnataka 560095",
        "locality": "15th Main Rd",
        "parentId": 278877,
        "unserviceable": false,
        "veg": false,
        "select": false,
        "favorite": false,
        "tradeCampaignHeaders": [
          
        ],
        "ribbon": [
          {
            "type": "PROMOTED"
          }
        ],
        "chain": [
          
        ],
        "feeDetails": {
          "fees": [
            {
              "name": "distance",
              "fee": 3000,
              "message": ""
            },
            {
              "name": "time",
              "fee": 0,
              "message": ""
            },
            {
              "name": "special",
              "fee": 0,
              "message": ""
            }
          ],
          "totalFees": 3000,
          "message": "",
          "title": "Delivery Charge",
          "amount": "3000",
          "icon": ""
        },
        "availability": {
          "opened": true,
          "nextOpenMessage": "",
          "nextCloseMessage": ""
        },
        "longDistanceEnabled": 0,
        "rainMode": "NONE",
        "thirdPartyAddress": false,
        "thirdPartyVendor": "",
        "adTrackingID": "cid=7495863~p=7~eid=00000189-5f47-2618-1351-d32d0002076b~srvts=1689520645656",
        "badges": {
          "imageBased": [
            
          ],
          "textBased": [
            
          ],
          "textExtendedBadges": [
            
          ]
        },
        "lastMileTravelString": "0.8 kms",
        "hasSurge": false,
        "aggregatedDiscountInfoV3": {
          "header": "40% OFF",
          "subHeader": "UPTO ₹80",
          "discountTag": "",
          "headerTypeV2": 0
        },
        "sla": {
          "restaurantId": "699557",
          "deliveryTime": 40,
          "minDeliveryTime": 40,
          "maxDeliveryTime": 40,
          "lastMileTravel": 0.800000011920929,
          "lastMileDistance": 0,
          "serviceability": "SERVICEABLE",
          "rainMode": "NONE",
          "longDistance": "NOT_LONG_DISTANCE",
          "preferentialService": false,
          "iconType": "EMPTY"
        },
        "promoted": true,
        "avgRating": "4.3",
        "totalRatings": 20,
        "new": false
      },
      "subtype": "basic"
    },
    {
      "type": "restaurant",
      "data": {
        "type": "F",
        "id": "337335",
        "name": "Kannur food kitchen",
        "uuid": "c70b61bc-0f68-4e24-996b-749fbf295c35",
        "city": "1",
        "area": "BTM Layout",
        "totalRatingsString": "10000+ ratings",
        "cloudinaryImageId": "a27weqanhnszqiuzsoik",
        "cuisines": [
          "Kerala",
          "Biryani",
          "Beverages"
        ],
        "tags": [
          
        ],
        "costForTwo": 20000,
        "costForTwoString": "₹200 FOR TWO",
        "deliveryTime": 46,
        "minDeliveryTime": 46,
        "maxDeliveryTime": 46,
        "slaString": "46 MINS",
        "lastMileTravel": 2.9000000953674316,
        "slugs": {
          "restaurant": "kannur-food-kitchen-btm-btm",
          "city": "bangalore"
        },
        "cityState": "1",
        "address": "kannur food point, Chocolate Factory Road, Tavarekere, Cashier Layout, 1st Stage, BTM Layout, thavrakharea, Karnataka, India",
        "locality": "1st  Stage",
        "parentId": 114756,
        "unserviceable": false,
        "veg": false,
        "select": false,
        "favorite": false,
        "tradeCampaignHeaders": [
          
        ],
        "chain": [
          
        ],
        "feeDetails": {
          "fees": [
            {
              "name": "distance",
              "fee": 3000,
              "message": ""
            },
            {
              "name": "time",
              "fee": 0,
              "message": ""
            },
            {
              "name": "special",
              "fee": 0,
              "message": ""
            }
          ],
          "totalFees": 3000,
          "message": "",
          "title": "Delivery Charge",
          "amount": "3000",
          "icon": ""
        },
        "availability": {
          "opened": true,
          "nextOpenMessage": "",
          "nextCloseMessage": ""
        },
        "longDistanceEnabled": 0,
        "rainMode": "NONE",
        "thirdPartyAddress": false,
        "thirdPartyVendor": "",
        "adTrackingID": "",
        "badges": {
          "imageBased": [
            
          ],
          "textBased": [
            
          ],
          "textExtendedBadges": [
            
          ]
        },
        "lastMileTravelString": "2.9 kms",
        "hasSurge": false,
        "aggregatedDiscountInfoV3": {
          "header": "50% OFF",
          "subHeader": "",
          "discountTag": "FLAT DEAL",
          "headerTypeV2": 0
        },
        "sla": {
          "restaurantId": "337335",
          "deliveryTime": 46,
          "minDeliveryTime": 46,
          "maxDeliveryTime": 46,
          "lastMileTravel": 2.9000000953674316,
          "lastMileDistance": 0,
          "serviceability": "SERVICEABLE",
          "rainMode": "NONE",
          "longDistance": "NOT_LONG_DISTANCE",
          "preferentialService": false,
          "iconType": "EMPTY"
        },
        "promoted": false,
        "avgRating": "3.7",
        "totalRatings": 10000,
        "new": false
      },
      "subtype": "basic"
    },
    {
      "type": "restaurant",
      "data": {
        "type": "F",
        "id": "94703",
        "name": "Sri Punjabi Dhaba",
        "uuid": "244943ac-cb6b-439f-9a09-687af66615b1",
        "city": "1",
        "area": "BTM Layout",
        "totalRatingsString": "10000+ ratings",
        "cloudinaryImageId": "i53hrycmcn2oehrojag0",
        "cuisines": [
          "North Indian",
          "Biryani",
          "Chinese",
          "Kebabs"
        ],
        "tags": [
          
        ],
        "costForTwo": 30000,
        "costForTwoString": "₹300 FOR TWO",
        "deliveryTime": 42,
        "minDeliveryTime": 42,
        "maxDeliveryTime": 42,
        "slaString": "42 MINS",
        "lastMileTravel": 2.5,
        "slugs": {
          "restaurant": "sri-punjabi-dhaba-bangalore-btm",
          "city": "bangalore"
        },
        "cityState": "1",
        "address": "Opposite 11th Cross 20th Main Rd,beside sri balaji wood Old Madiwala, Cashier Layout,  1st Stage, BTM 1st Stage, Bengaluru, Karnataka 560029",
        "locality": "Cashier Layout",
        "parentId": 21426,
        "unserviceable": false,
        "veg": false,
        "select": false,
        "favorite": false,
        "tradeCampaignHeaders": [
          
        ],
        "chain": [
          
        ],
        "feeDetails": {
          "fees": [
            {
              "name": "distance",
              "fee": 3000,
              "message": ""
            },
            {
              "name": "time",
              "fee": 0,
              "message": ""
            },
            {
              "name": "special",
              "fee": 0,
              "message": ""
            }
          ],
          "totalFees": 3000,
          "message": "",
          "title": "Delivery Charge",
          "amount": "3000",
          "icon": ""
        },
        "availability": {
          "opened": true,
          "nextOpenMessage": "",
          "nextCloseMessage": ""
        },
        "longDistanceEnabled": 0,
        "rainMode": "NONE",
        "thirdPartyAddress": false,
        "thirdPartyVendor": "",
        "adTrackingID": "",
        "badges": {
          "imageBased": [
            
          ],
          "textBased": [
            
          ],
          "textExtendedBadges": [
            
          ]
        },
        "lastMileTravelString": "2.5 kms",
        "hasSurge": false,
        "aggregatedDiscountInfoV3": {
          "header": "60% OFF",
          "subHeader": "",
          "discountTag": "FLAT DEAL",
          "headerTypeV2": 0
        },
        "sla": {
          "restaurantId": "94703",
          "deliveryTime": 42,
          "minDeliveryTime": 42,
          "maxDeliveryTime": 42,
          "lastMileTravel": 2.5,
          "lastMileDistance": 0,
          "serviceability": "SERVICEABLE",
          "rainMode": "NONE",
          "longDistance": "NOT_LONG_DISTANCE",
          "preferentialService": false,
          "iconType": "EMPTY"
        },
        "promoted": false,
        "avgRating": "3.0",
        "totalRatings": 10000,
        "new": false
      },
      "subtype": "basic"
    },
    {
      "type": "restaurant",
      "data": {
        "type": "F",
        "id": "425",
        "name": "Hotel Empire",
        "uuid": "9fd1a436-595a-4737-9f10-0a20c9f2e93c",
        "city": "1",
        "area": "Koramangala",
        "totalRatingsString": "10000+ ratings",
        "cloudinaryImageId": "un4omn7rcunkmlw6vikr",
        "cuisines": [
          "North Indian",
          "Kebabs",
          "Biryani"
        ],
        "tags": [
          
        ],
        "costForTwo": 45000,
        "costForTwoString": "₹450 FOR TWO",
        "deliveryTime": 54,
        "minDeliveryTime": 54,
        "maxDeliveryTime": 54,
        "slaString": "54 MINS",
        "lastMileTravel": 1.2999999523162842,
        "slugs": {
          "restaurant": "hotel-empire-5th-block-koramangala",
          "city": "bangalore"
        },
        "cityState": "1",
        "address": "103, Industrial Area, 5th Block, Near Jyothi Nivas College, Koramangala 5th Block, Bangalore",
        "locality": "Koramangala",
        "parentId": 475,
        "unserviceable": false,
        "veg": false,
        "select": false,
        "favorite": false,
        "tradeCampaignHeaders": [
          
        ],
        "chain": [
          
        ],
        "feeDetails": {
          "fees": [
            {
              "name": "distance",
              "fee": 3000,
              "message": ""
            },
            {
              "name": "time",
              "fee": 0,
              "message": ""
            },
            {
              "name": "special",
              "fee": 0,
              "message": ""
            }
          ],
          "totalFees": 3000,
          "message": "",
          "title": "Delivery Charge",
          "amount": "3000",
          "icon": ""
        },
        "availability": {
          "opened": true,
          "nextOpenMessage": "",
          "nextCloseMessage": ""
        },
        "longDistanceEnabled": 0,
        "rainMode": "NONE",
        "thirdPartyAddress": false,
        "thirdPartyVendor": "",
        "adTrackingID": "",
        "badges": {
          "imageBased": [
            
          ],
          "textBased": [
            
          ],
          "textExtendedBadges": [
            
          ]
        },
        "lastMileTravelString": "1.2 kms",
        "hasSurge": false,
        "aggregatedDiscountInfoV3": {
          "header": "10% OFF",
          "subHeader": "UPTO ₹40",
          "discountTag": "",
          "headerTypeV2": 0
        },
        "sla": {
          "restaurantId": "425",
          "deliveryTime": 54,
          "minDeliveryTime": 54,
          "maxDeliveryTime": 54,
          "lastMileTravel": 1.2999999523162842,
          "lastMileDistance": 0,
          "serviceability": "SERVICEABLE",
          "rainMode": "NONE",
          "longDistance": "NOT_LONG_DISTANCE",
          "preferentialService": false,
          "iconType": "EMPTY"
        },
        "promoted": false,
        "avgRating": "4.1",
        "totalRatings": 10000,
        "new": false
      },
      "subtype": "basic"
    },
    {
      "type": "restaurant",
      "data": {
        "type": "F",
        "id": "56589",
        "name": "Roti-wala.com",
        "uuid": "257a0889-b243-4252-b84a-6c9f1760d58f",
        "city": "1",
        "area": "BTM Layout",
        "totalRatingsString": "10000+ ratings",
        "cloudinaryImageId": "ptetuqkrhmpd8tiqiztg",
        "cuisines": [
          "North Indian",
          "Home Food",
          "Thalis",
          "Chinese",
          "Punjabi",
          "South Indian",
          "Ice Cream"
        ],
        "tags": [
          
        ],
        "costForTwo": 20000,
        "costForTwoString": "₹200 FOR TWO",
        "deliveryTime": 56,
        "minDeliveryTime": 56,
        "maxDeliveryTime": 56,
        "slaString": "56 MINS",
        "lastMileTravel": 4,
        "slugs": {
          "restaurant": "roti-wala-lavelle-road-central-bangalore",
          "city": "bangalore"
        },
        "cityState": "1",
        "address": "#239, 7TH Cross, Btm Stage 2. NS Palya, 560076",
        "locality": "2nd Stage",
        "parentId": 415860,
        "unserviceable": false,
        "veg": false,
        "select": false,
        "favorite": false,
        "tradeCampaignHeaders": [
          
        ],
        "chain": [
          
        ],
        "feeDetails": {
          "fees": [
            {
              "name": "distance",
              "fee": 4000,
              "message": ""
            },
            {
              "name": "time",
              "fee": 0,
              "message": ""
            },
            {
              "name": "special",
              "fee": 0,
              "message": ""
            }
          ],
          "totalFees": 4000,
          "message": "",
          "title": "Delivery Charge",
          "amount": "4000",
          "icon": ""
        },
        "availability": {
          "opened": true,
          "nextOpenMessage": "",
          "nextCloseMessage": ""
        },
        "longDistanceEnabled": 0,
        "rainMode": "NONE",
        "thirdPartyAddress": false,
        "thirdPartyVendor": "",
        "adTrackingID": "",
        "badges": {
          "imageBased": [
            
          ],
          "textBased": [
            
          ],
          "textExtendedBadges": [
            
          ]
        },
        "lastMileTravelString": "4 kms",
        "hasSurge": false,
        "aggregatedDiscountInfoV3": {
          "header": "20% OFF",
          "subHeader": "UPTO ₹50",
          "discountTag": "",
          "headerTypeV2": 0
        },
        "sla": {
          "restaurantId": "56589",
          "deliveryTime": 56,
          "minDeliveryTime": 56,
          "maxDeliveryTime": 56,
          "lastMileTravel": 4,
          "lastMileDistance": 0,
          "serviceability": "SERVICEABLE",
          "rainMode": "NONE",
          "longDistance": "NOT_LONG_DISTANCE",
          "preferentialService": false,
          "iconType": "EMPTY"
        },
        "promoted": false,
        "avgRating": "4.2",
        "totalRatings": 10000,
        "new": false
      },
      "subtype": "basic"
    },
    {
      "type": "restaurant",
      "data": {
        "type": "F",
        "id": "42060",
        "name": "Sharief Bhai",
        "uuid": "47b12558-0d6c-453e-b296-3bae3896ea45",
        "city": "1",
        "area": "Koramangala",
        "totalRatingsString": "10000+ ratings",
        "cloudinaryImageId": "mmavnrootu7ypscic1qm",
        "cuisines": [
          "Biryani",
          "Mughlai",
          "Arabian",
          "Kebabs",
          "Desserts",
          "Beverages"
        ],
        "tags": [
          
        ],
        "costForTwo": 40000,
        "costForTwoString": "₹400 FOR TWO",
        "deliveryTime": 49,
        "minDeliveryTime": 49,
        "maxDeliveryTime": 49,
        "slaString": "49 MINS",
        "lastMileTravel": 1.600000023841858,
        "slugs": {
          "restaurant": "sharief-bhai-koramangala-koramangala",
          "city": "bangalore"
        },
        "cityState": "1",
        "address": "66, Ground Floor, Jyoti Nivas College Road, Koramangala Industrial Layout, Koramangala, Bengaluru, Karnataka 560034",
        "locality": "Koramangala",
        "parentId": 5734,
        "unserviceable": false,
        "veg": false,
        "select": false,
        "favorite": false,
        "tradeCampaignHeaders": [
          
        ],
        "ribbon": [
          {
            "type": "PROMOTED"
          }
        ],
        "chain": [
          
        ],
        "feeDetails": {
          "fees": [
            {
              "name": "distance",
              "fee": 3000,
              "message": ""
            },
            {
              "name": "time",
              "fee": 0,
              "message": ""
            },
            {
              "name": "special",
              "fee": 0,
              "message": ""
            }
          ],
          "totalFees": 3000,
          "message": "",
          "title": "Delivery Charge",
          "amount": "3000",
          "icon": ""
        },
        "availability": {
          "opened": true,
          "nextOpenMessage": "",
          "nextCloseMessage": ""
        },
        "longDistanceEnabled": 0,
        "rainMode": "NONE",
        "thirdPartyAddress": false,
        "thirdPartyVendor": "",
        "adTrackingID": "cid=7493513~p=13~eid=00000189-5f47-2618-1351-d32f00020d35~srvts=1689520645656",
        "badges": {
          "imageBased": [
            
          ],
          "textBased": [
            
          ],
          "textExtendedBadges": [
            
          ]
        },
        "lastMileTravelString": "1.6 kms",
        "hasSurge": false,
        "aggregatedDiscountInfoV3": {
          "header": "40% OFF",
          "subHeader": "UPTO ₹80",
          "discountTag": "",
          "headerTypeV2": 0
        },
        "sla": {
          "restaurantId": "42060",
          "deliveryTime": 49,
          "minDeliveryTime": 49,
          "maxDeliveryTime": 49,
          "lastMileTravel": 1.600000023841858,
          "lastMileDistance": 0,
          "serviceability": "SERVICEABLE",
          "rainMode": "NONE",
          "longDistance": "NOT_LONG_DISTANCE",
          "preferentialService": false,
          "iconType": "EMPTY"
        },
        "promoted": true,
        "avgRating": "4.1",
        "totalRatings": 10000,
        "new": false
      },
      "subtype": "basic"
    },
    {
      "type": "restaurant",
      "data": {
        "type": "F",
        "id": "709170",
        "name": "Imperio Restaurant",
        "uuid": "b831b957-c7b1-4fb4-bb7c-b07ce0c72cb1",
        "city": "1",
        "area": "HSR",
        "totalRatingsString": "1000+ ratings",
        "cloudinaryImageId": "a1629b9c7f59577a55411e94425c6d99",
        "cuisines": [
          "Chinese",
          "South Indian",
          "North Indian",
          "Continental",
          "Desserts",
          "Kerala",
          "Andhra",
          "Beverages",
          "Mughlai",
          "Seafood",
          "Hyderabadi",
          "Healthy Food",
          "Arabian",
          "Biryani",
          "Burgers",
          "Barbecue",
          "Oriental"
        ],
        "tags": [
          
        ],
        "costForTwo": 50000,
        "costForTwoString": "₹500 FOR TWO",
        "deliveryTime": 65,
        "minDeliveryTime": 65,
        "maxDeliveryTime": 65,
        "slaString": "65 MINS",
        "lastMileTravel": 5,
        "slugs": {
          "restaurant": "imperio-restaurant-hsr-hsr-2",
          "city": "bangalore"
        },
        "cityState": "1",
        "address": "imperio restaurant , 495, 17th Cross Rd, Parangi Palaya, Sector 2, HSR Layout, Bengaluru, Karnataka",
        "locality": "Sector 2",
        "parentId": 5610,
        "unserviceable": false,
        "veg": false,
        "select": false,
        "favorite": false,
        "tradeCampaignHeaders": [
          
        ],
        "chain": [
          
        ],
        "feeDetails": {
          "fees": [
            {
              "name": "distance",
              "fee": 5500,
              "message": ""
            },
            {
              "name": "time",
              "fee": 0,
              "message": ""
            },
            {
              "name": "special",
              "fee": 0,
              "message": ""
            }
          ],
          "totalFees": 5500,
          "message": "",
          "title": "Delivery Charge",
          "amount": "5500",
          "icon": ""
        },
        "availability": {
          "opened": true,
          "nextOpenMessage": "",
          "nextCloseMessage": ""
        },
        "longDistanceEnabled": 0,
        "rainMode": "NONE",
        "thirdPartyAddress": false,
        "thirdPartyVendor": "",
        "adTrackingID": "",
        "badges": {
          "imageBased": [
            
          ],
          "textBased": [
            
          ],
          "textExtendedBadges": [
            
          ]
        },
        "lastMileTravelString": "5 kms",
        "hasSurge": false,
        "aggregatedDiscountInfoV3": {
          "header": "40% OFF",
          "subHeader": "UPTO ₹80",
          "discountTag": "",
          "headerTypeV2": 0
        },
        "sla": {
          "restaurantId": "709170",
          "deliveryTime": 65,
          "minDeliveryTime": 65,
          "maxDeliveryTime": 65,
          "lastMileTravel": 5,
          "lastMileDistance": 0,
          "serviceability": "SERVICEABLE",
          "rainMode": "NONE",
          "longDistance": "NOT_LONG_DISTANCE",
          "preferentialService": false,
          "iconType": "EMPTY"
        },
        "promoted": false,
        "avgRating": "4.0",
        "totalRatings": 1000,
        "new": false
      },
      "subtype": "basic"
    },
    {
      "type": "restaurant",
      "data": {
        "type": "F",
        "id": "317817",
        "name": "TrueCakes - Fresh | Eggless | Cakes",
        "uuid": "3395713c-806a-43e9-99e6-8598df73df62",
        "city": "1",
        "area": "BTM Layout",
        "totalRatingsString": "5000+ ratings",
        "cloudinaryImageId": "02546394463c9c3c079899de45670f41",
        "cuisines": [
          "Bakery",
          "Desserts"
        ],
        "tags": [
          
        ],
        "costForTwo": 30000,
        "costForTwoString": "₹300 FOR TWO",
        "deliveryTime": 34,
        "minDeliveryTime": 34,
        "maxDeliveryTime": 34,
        "slaString": "34 MINS",
        "lastMileTravel": 3.5,
        "slugs": {
          "restaurant": "truecakes-btm-btm",
          "city": "bangalore"
        },
        "cityState": "1",
        "address": "#933, HERMAIN COMPLEX, OPP MC DONALD'S, 16TH MAIN ROAD, BTM LAYOUT 2ND STAGE, BANGALORE-560076",
        "locality": "2nd Stage",
        "parentId": 22486,
        "unserviceable": false,
        "veg": true,
        "select": false,
        "favorite": false,
        "tradeCampaignHeaders": [
          
        ],
        "ribbon": [
          {
            "type": "PROMOTED"
          }
        ],
        "chain": [
          
        ],
        "feeDetails": {
          "fees": [
            {
              "name": "distance",
              "fee": 4000,
              "message": ""
            },
            {
              "name": "time",
              "fee": 0,
              "message": ""
            },
            {
              "name": "special",
              "fee": 0,
              "message": ""
            }
          ],
          "totalFees": 4000,
          "message": "",
          "title": "Delivery Charge",
          "amount": "4000",
          "icon": ""
        },
        "availability": {
          "opened": true,
          "nextOpenMessage": "",
          "nextCloseMessage": ""
        },
        "longDistanceEnabled": 0,
        "rainMode": "NONE",
        "thirdPartyAddress": false,
        "thirdPartyVendor": "",
        "adTrackingID": "cid=7504891~p=16~eid=00000189-5f47-2618-1351-d33000021076~srvts=1689520645656",
        "badges": {
          "imageBased": [
            
          ],
          "textBased": [
            
          ],
          "textExtendedBadges": [
            
          ]
        },
        "lastMileTravelString": "3.5 kms",
        "hasSurge": false,
        "aggregatedDiscountInfoV3": {
          "header": "₹125 OFF",
          "subHeader": "ABOVE ₹249",
          "discountTag": "FLAT DEAL",
          "headerTypeV2": 0
        },
        "sla": {
          "restaurantId": "317817",
          "deliveryTime": 34,
          "minDeliveryTime": 34,
          "maxDeliveryTime": 34,
          "lastMileTravel": 3.5,
          "lastMileDistance": 0,
          "serviceability": "SERVICEABLE",
          "rainMode": "NONE",
          "longDistance": "NOT_LONG_DISTANCE",
          "preferentialService": false,
          "iconType": "EMPTY"
        },
        "promoted": true,
        "avgRating": "4.2",
        "totalRatings": 5000,
        "new": false
      },
      "subtype": "basic"
    },
    {
      "type": "restaurant",
      "data": {
        "type": "F",
        "id": "201224",
        "name": "Asha tiffins",
        "uuid": "e32381cf-6468-4c10-9bad-47fa08e898a8",
        "city": "1",
        "area": "HSR Layout",
        "totalRatingsString": "10000+ ratings",
        "cloudinaryImageId": "n15vckntsiboiod3gpco",
        "cuisines": [
          "Indian",
          "South Indian",
          "Beverages"
        ],
        "tags": [
          
        ],
        "costForTwo": 20000,
        "costForTwoString": "₹200 FOR TWO",
        "deliveryTime": 43,
        "minDeliveryTime": 43,
        "maxDeliveryTime": 43,
        "slaString": "43 MINS",
        "lastMileTravel": 4,
        "slugs": {
          "restaurant": "asha-tiffins-hsr-hsr-2",
          "city": "bangalore"
        },
        "cityState": "1",
        "address": "Asha Tiffins, 5th Main Road, Sector 7, HSR Layout, Bengaluru, Karnataka, India",
        "locality": "7th Sector",
        "parentId": 236243,
        "unserviceable": false,
        "veg": true,
        "select": false,
        "favorite": false,
        "tradeCampaignHeaders": [
          
        ],
        "chain": [
          
        ],
        "feeDetails": {
          "fees": [
            {
              "name": "distance",
              "fee": 4000,
              "message": ""
            },
            {
              "name": "time",
              "fee": 0,
              "message": ""
            },
            {
              "name": "special",
              "fee": 0,
              "message": ""
            }
          ],
          "totalFees": 4000,
          "message": "",
          "title": "Delivery Charge",
          "amount": "4000",
          "icon": ""
        },
        "availability": {
          "opened": true,
          "nextOpenMessage": "",
          "nextCloseMessage": ""
        },
        "longDistanceEnabled": 0,
        "rainMode": "NONE",
        "thirdPartyAddress": false,
        "thirdPartyVendor": "",
        "adTrackingID": "",
        "badges": {
          "imageBased": [
            
          ],
          "textBased": [
            
          ],
          "textExtendedBadges": [
            
          ]
        },
        "lastMileTravelString": "4 kms",
        "hasSurge": false,
        "aggregatedDiscountInfoV3": {
          "header": "30% OFF",
          "subHeader": "UPTO ₹70",
          "discountTag": "",
          "headerTypeV2": 0
        },
        "sla": {
          "restaurantId": "201224",
          "deliveryTime": 43,
          "minDeliveryTime": 43,
          "maxDeliveryTime": 43,
          "lastMileTravel": 4,
          "lastMileDistance": 0,
          "serviceability": "SERVICEABLE",
          "rainMode": "NONE",
          "longDistance": "NOT_LONG_DISTANCE",
          "preferentialService": false,
          "iconType": "EMPTY"
        },
        "promoted": false,
        "avgRating": "4.4",
        "totalRatings": 10000,
        "new": false
      },
      "subtype": "basic"
    }
  ]

const RestaurantCard = ({resData}) => {
    const{data}=resData;
    const{name,cuisines,avgRating,costForTwo,deliveryTime,cloudinaryImageId} = data;
    
    return (
        <div className="res-card">
            <img className="res-logo" src={"https://res.cloudinary.com/swiggy/image/upload/fl_lossy,f_auto,q_auto,w_508,h_320,c_fill/"+cloudinaryImageId} alt="error" />
            <h4>{name}</h4>
            <h5>{cuisines.join(", ")}</h5>
            <h5>{avgRating} star</h5>
            <h5>{costForTwo/100} Rupees</h5>
            <h5>{deliveryTime} minutes</h5>
        </div>
    )
}

const Body = () =>  {
    return (
        <div className="body">
            <div className="search">
                Search
            </div>
            <div className="res-container">
                {
                    resList.map((restaurant)=>(
                        <RestaurantCard  key={restaurant.data.id} resData={restaurant}/>
                    ))
                }
                
                
            </div>
        </div>
    )
}

const AppLayout=()=>{
    return ( 
        <div className="app">
            <Header/>
            <Body/>
        </div>
    )
}


const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(<AppLayout/>)