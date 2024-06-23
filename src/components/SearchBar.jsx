import { useState } from 'react'
import { useNavigate } from 'react-router-dom'
import { Paper, IconButton } from '@mui/material'
import { Search } from '@mui/icons-material'
const SearchBar = () => {
    const [searchTerm, setSearchTerm] = useState("");
    const navigator = useNavigate();

    const handleSubmit =  (e) => {
        e.preventDefault();

        if(searchTerm) {
            navigator(`/search/${searchTerm}`)
            setSearchTerm("")
        }
     }
    return (
        <Paper
            component="form"
            onSubmit={handleSubmit}
            sx={{
                borderRadius: 20,
                border: "solid 1px #e3e3e3",
                pl: 2,
                boxShadow: "none",
                // mr: {sm: 5} //just for small devices
                // color: "white"
            }}
        >
            <input

                className='search-bar'
                placeholder='Search...'
                onChange={(e) => { setSearchTerm(e.target.value)}}
                value={searchTerm}
            />

            <IconButton
                sx={{
                    p: '10px',
                    color: "red",
                }}

                type='submit'

            >
                <Search />

            </IconButton>

        </Paper>
    )

};

export default SearchBar