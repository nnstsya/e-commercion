import React from 'react';
import { Box } from '@mui/system';
import {TextField} from "@mui/material";

interface SearchProps {
    handleSearch: (term: string) => void;
}

const Search: React.FC<SearchProps> = ({ handleSearch }) => {
    return (
        <Box component={TextField}
             onChange={(e: React.ChangeEvent<HTMLInputElement>) => {
                 handleSearch(e.target.value);
             }}
             sx={{ '&& .MuiInputBase-input.MuiOutlinedInput-input': {
                     py: 1,
                     px: 2
                 }, }}
             placeholder={"Search for products..."}
        />
    );
};

export default Search;
