import { styled, alpha, InputBase } from "@mui/material"
import {Search} from "@mui/icons-material"
import React from "react"

const Searching = styled('div')(({ theme }) => ({
    position: 'relative',
    borderRadius: theme.shape.borderRadius,
    backgroundColor: alpha(theme.palette.common.white, 0.15),
    '&:hover': {
        backgroundColor: alpha(theme.palette.common.white, 0.25)
    },
    marginRight: theme.spacing(2),
    marginLeft: 0,
    width: '100%',
    [theme.breakpoints.up('sm')]: {
        marginLeft: theme.spacing(3),
        width: 'auto'
    },
    transition: "background-color .5s ease-in-out"
}))
const SearchIconWrapper = styled('div')(({ theme }) => ({
    padding: theme.spacing(0, 2),
    height: '100%',
    position: 'absolute',
    pointerEvents: 'none',
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center'
}))
const StyledInputBase = styled(InputBase)(({ theme }) => ({
    color: 'inherit',
    '& .MuiInputBase-input': {
        padding: theme.spacing(1, 1, 1, 0),
        paddingLeft: `calc(1em + ${theme.spacing(4)})`,
        transition: theme.transitions.create('width'),
        width: '100%',
        [theme.breakpoints.up('md')]: {
            width: '20ch'
        }
    }
}))




function SearchField() {
    const [input, setInput]= React.useState("")
    function writingFunction(e) {
        e.preventDefault()
        setInput(e.target.value)
    }

    function searchingFunction() {
        console.log(input)
    }
    return (
        <Searching>
            <SearchIconWrapper>
                <Search />
            </SearchIconWrapper>
            <StyledInputBase
                placeholder='Search…'
                inputProps={{ 'aria-label': 'search' }}
                value={input}
                onChange={(e) => writingFunction(e)} 
                onKeyDown={(event) => {if (event.key === "Enter") { searchingFunction()}}}               
            />
        </Searching>
    )
}

export default SearchField