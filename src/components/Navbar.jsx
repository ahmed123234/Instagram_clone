import { Stack } from '@mui/material'
import { Link } from 'react-router-dom'
import { logo } from '../utils/constants'
import SearchBar from './SearchBar'
// to check if the component accept the defined properties in it u can check the component API
function Navbar() {
    return (

        // with sx property u can define any styles to your material ui component
        <Stack 
            direction="row"
            alignItems='center' 
            p={2} 
            sx={{ 
                position: "sticky",
                backgroundColor: "#000", 
                top: 0, 
                justifyContent: "space-between",
                zIndex: "10"

            }}
            
        >  

            <Link to="/" style={{display: "flex", alignItems: "center"}}>
                <img src={logo} alt="logo" height={45}/>
            </Link>

            <SearchBar />

        </Stack>

    )
}

export default Navbar