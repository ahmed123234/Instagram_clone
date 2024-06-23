import axios from 'axios'
const BASE_URL = 'https://youtube-v31.p.rapidapi.com';

const options = {
    // method: 'GET',
    url: BASE_URL,
    params: {
    //   relatedToVideoId: '7ghhRHRP6t4',
    //   part: 'id,snippet',
    //   type: 'video',
      maxResults: '50' //u can change it to what you need
    },
    headers: {
        //  
        // '623764fadfmshe4f25c8fce18a9fp1fde04jsn58bdc78278d1'
      'X-RapidAPI-Key': import.meta.env.VITE_RAPID_API_KEY,
      'X-RapidAPI-Host': 'youtube-v31.p.rapidapi.com'
    }
  };
  
export const fetchFromAPI = async(url) => {
  // console.log("inside fecth APIKEY is", import.meta.env.VITE_RAPID_API_KEY);

   const { data } = await axios.get(`${BASE_URL}/${url}`, options);
   return data;
} 