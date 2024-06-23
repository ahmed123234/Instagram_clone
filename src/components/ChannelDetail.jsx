import { useState, useEffect } from "react"
import { useParams } from "react-router-dom"
import { fetchFromAPI } from "../utils/fetchFromAPI"
import { Box } from "@mui/material"
import { ChannelCard, Videos } from './' 
const ChannelDetail = () => {
    const { id } =  useParams();
    const [channelDetail, setChannelDetail] = useState(null);
    const [videos, setVideos] = useState([]);
    
    // console.log(channelDetail, videos);
    useEffect(() => { 
        fetchFromAPI(`channels?part=snippet&id=${id}`).then(data => {
            setChannelDetail(data?.items[0]);
        })

        fetchFromAPI(`search?part=snippet,id&channelId=${id}&order=date`).then(data => {
            setVideos(data?.items);
        })
    }, [id])

    return (

        <Box minHeight='95vh'>
            <Box>
                <div style={{
                    zIndex: 10,
                    height: "300px",
                    background: "linear-gradient(90deg, rgba(0,36,25,1) 5%, rgba(9,105,121,1) 25%, rgba(205,0,255,1) 79%)"
                }}/>
                <ChannelCard channelDetail={channelDetail} mt='-110px'/>
            </Box>
            <Box 
                display='flex'
                p='2'
                // m='10px'
            >
                <Box 
                    sx={{
                        mr: {
                            sm: '100px' //applay on small devices and higher
                        }
                    }}
                />
                    <Videos videos={videos} />
                
            </Box>
            {/* 
             */}
        </Box>
    )
}

   

export default ChannelDetail