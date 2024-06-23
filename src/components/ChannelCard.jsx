import { CheckCircle, } from '@mui/icons-material'
import { Box, CardContent, CardMedia, Typography } from '@mui/material'
import { Link } from 'react-router-dom'
import { demoProfilePicture } from '../utils/constants'

const ChannelCard = ({ channelDetail, mt= 0 }) => {
    return (
        <Box
            sx={{
                boxShadow: "none",
                borderRadius: "20px",
                width: {
                    xs: '356px', md: '320px'
                },
                height: "326px",
                margin: "auto",
                dispaly: "flex",
                justifyContent: "center",
                alignItems: "center",
                mt
    
            }}
        >
            <Link to={`/channel/${channelDetail?.id?.channelId}`}>

                <CardContent
                    sx={{
                        display: "flex",
                        flexDirection: "column",
                        justifyContent: "center",
                        alignItems: "center",
                        color: "#fff",
                        textAlign: "center"
                    }}
                >

                    <CardMedia
                        component="img"
                        sx={{
                            width: "180px",
                            height: "180px",
                            borderRadius: "50%", 
                            mb: 2,
                            border: "solid 1px #e3e3e3"
                        }}
                        image={channelDetail?.snippet?.thumbnails?.high?.url || demoProfilePicture}
                        alt={channelDetail?.snippet?.title}
                    />

                        <Typography variant='h6'>
                            {channelDetail?.snippet?.title}
                            <CheckCircle 
                                sx={{
                                    fontSize: 14,
                                    color: "gray",
                                    ml: '5px'
                                }} 
                            />
                        </Typography>

                        {
                            channelDetail?.statistics?.subscriberCount && (
                                <Typography variant='h6'>
                                    {parseInt(channelDetail?.statistics?.subscriberCount).toLocaleString()} Subscribers
                                </Typography>
                            )
                        }

                </CardContent>



            </Link>
        </Box>
    )
}

export default ChannelCard