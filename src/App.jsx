import { BrowserRouter, Routes, Route } from 'react-router-dom'
import { Box } from '@mui/material' // box is somthing like dive element
import { Feed, VideoDetail, ChannelDetail, SearchFeed, Navbar } from './components/index'
// double click on the component and ctrl + space on keyboard to import it automaticly   

const App = () => (
  <BrowserRouter>
    <Box sx={{ backgroundColor: '#000' }}>
      <Navbar />

      <Routes>
        <Route path='/' exact element={<Feed/>} />
        <Route path='/video/:id' exact element={<VideoDetail/>} />
        <Route path='/channel/:id' exact element={<ChannelDetail/>} />
        <Route path='/search/:searchTerm' exact element={<SearchFeed/>} />
      </Routes>
    </Box>

  </BrowserRouter>
)

export default App
