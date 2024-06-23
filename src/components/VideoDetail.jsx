import { useState, useEffect } from "react"
import { Link, useParams } from 'react-router-dom'
import ReactPlayer from 'react-player'
import { Typography, Box, Stack } from "@mui/material"
import { CheckCircle } from "@mui/icons-material"
import { VideoComments, Videos } from './'
import { fetchFromAPI } from "../utils/fetchFromAPI"

const VideoDetail = () => {
    const { id } = useParams();
    const [videoDetail, setVideoDetail] = useState(null)
    const [suggestedVideos, setSuggestedVideos] = useState([]);
    const [videoComments, setVideoComments] = useState([]);

    useEffect(() => {
        fetchFromAPI(`search?relatedToVideoId=${id}&part=id,snippet&type=video`).then(data => {
            setSuggestedVideos(data.items);
        })
    }, [id]);

    // grap the video details information
    useEffect(() => {
        fetchFromAPI(`videos?part=snippet,statistics&id=${id}`).then(data => {
            setVideoDetail(data.items[0]);
            console.log("data is", data);
        });
    }, [id])

    // grap video comments
    useEffect(() => {
        fetchFromAPI(`commentThreads?part=snippet&videoId=${id}`).then(data => {
            setVideoComments(data.items);
        }) 
    }, [id])

    if (!videoDetail) return <p>loading ...</p>
    const { snippet: { title, channelId, description, channelTitle }, statistics: { viewCount, likeCount } } = videoDetail;

    return (

        // <Box height='950px' overflow='scroll' >
            <Stack direction={{ xs: 'column', md: 'row' }} >
                <Box flex={1} height="100%" overflow= "auto">
                    {/* video container */}

                    <Box sx={{ width: '100%', height:"100vh"} }>
                        <ReactPlayer sx={{position: "sticky", top: '86px'}} url={`https://www.youtube.com/watch?v=${id}`} controls /** add control to the video */ className='react-player' />

                        <Typography variant="h5" color='#fff' p={2} fontWeight='bold'>
                            {title}
                        </Typography>
                        <Stack direction="row" justifyContent="space-between" sx={{ color: '#fff' }} py={1} px={2}>
                            <Link to={`/channel/${channelId}`}>

                                <Typography sx={{ sm: "subtitle1", md: "h6" }} color="#fff">
                                    {channelTitle}
                                    <CheckCircle sx={{ fontSize: '12px', color: 'gray', ml: '5px' }} />
                                </Typography>
                            </Link>

                            <Stack direction='row' alignItems='cenetr' gap='20px'>
                                <Typography variant="body1" sx={{ opacity: '.7' }}>
                                    {parseInt(viewCount).toLocaleString()} views
                                </Typography>

                                <Typography variant="body1" sx={{ opacity: '.7' }}>
                                    {parseInt(likeCount).toLocaleString()} likes
                                </Typography>
                            </Stack>

                        </Stack>
                        <VideoComments comments={videoComments}/>
                    </Box>
                </Box>

                <Box px={2} py={{ md: 1, xs: 5 }} justifyContent='center' alignItems='center'  height="100vh" overflow='auto'  >
                    <Videos videos={suggestedVideos} direction='column' />
                </Box>
            </Stack>
        // </Box>
    )
}


export default VideoDetail