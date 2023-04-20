//this is where we will keep all of our API calls

import axios from "axios";

export const getPlacesData = async(type, sw, ne) => {
    try {
    //request
    const {data: {data} }= await axios.get(`https://travel-advisor.p.rapidapi.com/${type}/list-in-boundary`, {
      params: {
        bl_latitude: sw.lat,
        tr_latitude: ne.lat,
        bl_longitude: sw.lng,
        tr_longitude: ne.lng,    
      },
      headers: {
        'X-RapidAPI-Key': process.env.REACT_APP_RAPID_API_TRAVEL_KEY,
        'X-RapidAPI-Host': 'travel-advisor.p.rapidapi.com'
      }
    });

    return data;
    } catch (error) {
    console.log(error)
    }
}