import { useState, useEffect } from "react"
import { Box, Typography } from "@mui/material"
import { useParams } from "react-router-dom";
import Videos from "./Videos";
import { fetchFromAPI } from "../utils/fetchFromAPI";

const SearchFeed = () => {
    const { searchTerm } = useParams();
    const [videos, setVideos] = useState([]);
    
    useEffect(() => {
        fetchFromAPI(`search?part=snippet&q=${searchTerm}`).then( (data) => {
      
            setVideos(data.items)
        });
        
    }, [searchTerm]);

    return (
        <Box
            p={2}
            sx={{
                overflow: "auto",
                height: "90vh",
                flex: 2
            }}
        >
            <Typography
                className=""
                variant="h4"
                mb={2}
                fontWeight="bold"
                sx={{

                    color: '#fff'
                }}
            >
                Search Results for: <span
                    style={{
                        color: "#f31503"
                    }}
                >{searchTerm}</span> videos
            </Typography>

            <Videos videos={videos} />
        </Box>

    )
}

export default SearchFeed