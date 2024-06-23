import { Stack } from "@mui/material"
// import { categories } from '../utils/constants'
import { 
    Home, 
    MusicNote,
    Code,
    OndemandVideo,
        SportsEsports,
        LiveTv,
        School,
        GraphicEq,
        TheaterComedy,
        FitnessCenter,
        DeveloperMode,
        FaceRetouchingNatural,
        Checkroom,

} from "@mui/icons-material";
import { useState } from "react";

const categories = [
    {name: 'New', icon: <Home />, },
    { name: 'JS Mastery', icon: <Code />, },
    { name: 'Coding', icon: <Code />, },
    { name: 'ReactJS', icon: <Code />, },
    { name: 'NextJS', icon: <Code />, },
    { name: 'Music', icon: <MusicNote /> },
    { name: 'Education', icon: <School />, },
    { name: 'Podcast', icon: <GraphicEq />, },
    { name: 'Movie', icon: <OndemandVideo />, },
    { name: 'Gaming', icon: <SportsEsports />, },
    { name: 'Live', icon: <LiveTv />, },
    { name: 'Sport', icon: <FitnessCenter />, },
    { name: 'Fashion', icon: <Checkroom />, },
    { name: 'Beauty', icon: <FaceRetouchingNatural />, },
    { name: 'Comedy', icon: <TheaterComedy />, },
    { name: 'Gym', icon: <FitnessCenter />, },
    { name: 'Crypto', icon: <DeveloperMode />, },
  ];

//   const selectedCategory = 'New';
// this component is in the form of instance return 
const Sidebar = ({ selectedCategory, setSelectedCategory }) => {
    // const [selectedCategory, setSelectedCategory] = useState('New');

    return (<Stack
        direction="row"
        sx={
            {
                overflow: 'auto',
                height: {
                    sx: 'auto',
                    md: '95%'
                },
                flexDirection: {
                    md: 'column',
                }
            }
        }  
    >
    {
        categories.map((category, index) => (
            <button key={index} className="category-btn" 
                style={{
                    background: category.name === selectedCategory && '#fc1503',
                    color: '#fff'
                }}
                onClick={() => setSelectedCategory(category.name)}
            >   
                <span style={{
                    color: category.name === selectedCategory? '#fff': 'red',
                    marginRight: '15px'
                }
                }>{category.icon}</span>
                <span style= {{
                    opacity: category.name === selectedCategory? '1': '0.8'
                }}>{category.name}</span>
            </button>
        ))

    }
    </Stack>)
}

export default Sidebar