import { Box, Typography, Stack } from "@mui/material"
import { ChannelCard, VideoCard } from './'


const Videos = ({videos, direction='row'}) => {
  if (!videos.length) return <p>loading...</p>
  return (
    <div>
        <Stack direction={direction} flexWrap="wrap" justifyContent="start" gap={2}>
            {videos.map((item, index) => 
                <Box key={index}>   
                    {/* check if the current item is video or a channel */}
                    {item.id.channelId && <ChannelCard channelDetail={item} />}
                    {item.id.videoId && <VideoCard video={item} />}
                    

                </Box>
            )}
        </Stack>
    </div>
  )
}

export default Videos