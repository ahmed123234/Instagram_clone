import { Stack, Box, Typography, CardMedia, Card, CardContent } from "@mui/material"
import { Link } from "react-router-dom"
import { ThumbUp } from "@mui/icons-material"

const VideoComments = ({ comments }) => {

  if (!comments) return <p>loading...</p>

  // const {textDisplay } = comments[0].snippet.topLevelComment.snippet

  return (
    <>
      <Typography variant="body1" sx={{ opacity: ".7", color: 'gray', p: 2 }}>
        Comments
      </Typography>

      <Stack
        direction='column'
        sx={{
          height: "400px",
          overflowY: "scroll"
        }}
      >
        {comments.map((item, idx) => (
          <Box key={idx} display='flex' alignItems="flex-start" justifyContent="flex-start"  gap={1} px={2}>
            <Link to={`/channel/${item.snippet.topLevelComment.snippet.authorChannelId.value}`}>

              <CardMedia
                image={item.snippet.topLevelComment.snippet.authorProfileImageUrl}
                alt='profile image'

                sx={{
                  height: '30px',
                  width: '30px',
                  borderRadius: "50%"
                }}
              />


            </Link>

            <CardContent sx={{ color: "#fff", mt: "-14px"}}>
              <Typography>
                @{item.snippet.topLevelComment.snippet.authorDisplayName}
              </Typography>

              <Typography>
                {item.snippet.topLevelComment.snippet.textDisplay}
              </Typography>
              
              <Typography mt={2} display="flex" alignItems="center" gap={1}>
                <ThumbUp />
                {item.snippet.topLevelComment.snippet.likeCount}
              </Typography>
              
            </CardContent>
          </Box>


        ))}

        {/* { textDisplay } */}

      </Stack>
    </>
  )
}

export default VideoComments