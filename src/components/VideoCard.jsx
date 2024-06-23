import { Card, CardMedia, Typography, CardContent } from "@mui/material"
import { Link } from "react-router-dom"  // to navigate to the video details of that card
import { CheckCircle } from "@mui/icons-material"

import { demoThumbnailUrl, demoVideoTitle, demoChannelUrl, demoChannelTitle, demoVideoUrl } from "../utils/constants"

const VideoCard = ({ video: { id: { videoId }, snippet } }) => {

    return (
        <Card
            sx={{
                width: {
                    xs: "100%",
                    sm: "358px",
                    md: "320px",
                },
                borderRadius: 0,
                boxShadow:"none"
            }}
        >
            <Link to={videoId ? `/video/${videoId}` : demoVideoUrl}>

                <CardMedia

                    image={snippet?.thumbnails?.high?.url}
                    alt={snippet?.title}
                    sx={{
                        height: 180,
                        width: {
                            xs: "100%",
                            sm: "358px",
                            md: "320px",
                            
                        }
                        // objectFit: "cover",
                        // objectPosition: "center"
                    }}
                />
            </Link>

            <CardContent
                sx={{
                    backgroundColor: "#1e1e1e",
                    height: "106px",
                    // width: 358
                }}
            >
                <Link to={videoId ? `/video/${videoId}` : demoVideoUrl}>
                    <Typography
                        variant="subtitle1"
                        fontWeight="bold"
                        color="#fff"
                    >
                        {snippet?.title.slice(0, 60) || demoVideoTitle.slice(0, 60)}
                    </Typography>

                </Link>

                <Link to={snippet?.channelId ? `/channel/${snippet?.channelId}` : demoChannelUrl}>
                    <Typography
                        variant="subtitle2"
                        fontWeight="bold"
                        color="gray"
                        // sx={{

                        //     flex: "row",
                        //     alignItems: "center",
                        //     justifyContent: "space-between"
                        // }}
                    >
                        {snippet?.channelTitle.slice(0, 60) || demoChannelTitle.slice(0, 60)}

                        <CheckCircle
                            sx={{
                                color: "gray",
                                fontSize: 12,
                                ml: '5px'
                            }}
                        />

                    </Typography>



                </Link>
            </CardContent>

        </Card>

    )

}

export default VideoCard