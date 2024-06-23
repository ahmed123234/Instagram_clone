import { useState, useEffect } from "react"
import { Box, Typography, Stack } from "@mui/material"
import { Sidebar, Videos } from "./"
import { fetchFromAPI } from "../utils/fetchFromAPI"

const Feed = () => {
    // life cycle hook that can be dispalyed when the componenet is loded 
    const [selectedCategory, setSelectedCategory] = useState('New');
    const [videos, setVideos] = useState([]);

    useEffect(() => {
        fetchFromAPI(`search?part=snippet&q=${selectedCategory}`).then( (data) => {
            // console.log(data);
            setVideos(data.items)
        });
        
    }, [selectedCategory]);

    return (

        <Stack
            sx={{
                flexDirection: {
                    // apply this sx usually 
                    sx: "column",
                    md: "row" //for mduim devices and gratter the style will be row
                }
            }}
        >

            <Box
                sx={

                    {
                        // width: {},
                        height: {
                            sx: "auto",
                            md: "92vh" // this means 92 vertical height
                        },
                        borderRight: '1px solid #3d3d3d',
                        px: {
                            sx: 0,
                            md: 2
                        }
                    }
                }

            >
                <Sidebar selectedCategory={selectedCategory} setSelectedCategory={setSelectedCategory} />
                <Typography
                    className="copyright"
                    variant="body2"
                    sx={{
                        mt: 1.5,
                        color: '#fff'
                    }}
                >
                    Copyright reserved 2023 By Ahmed Ghannam
                </Typography>
            </Box>


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
                    {selectedCategory} <span
                        style={{
                            color: "#f31503"
                        }}
                    >Videos</span>
                </Typography>

                <Videos  videos={videos} />
            </Box>

        </Stack>
    )
}


export default Feed