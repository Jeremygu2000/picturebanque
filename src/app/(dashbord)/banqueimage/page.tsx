"use client";

import { useState } from 'react';
import Title from './Title';
import SearchBar from './SearchBar';
import PresetSearch from './PresetSearch';
import ImageResults from './ImageResults';
import './App.css';
import './Loader.css';

const preselectedwords = ['mountain','sea','sky', 'bird', 'cars','beach','aircraft'];

const App = () => {
    const [searchText, setSearchText] = useState("sky");
    const [isLoading, setIsLoading] = useState(false);

    const handleChangeSearch = (text: any) => {
        setSearchText(text);
        setIsLoading(true);
        setTimeout(() => {
            setIsLoading(false);
        }, 3000);
    };

    const changeToBeach = (event: any) => {
        const text = event.target.outerText;
        setSearchText(text);
    };

    if (isLoading) {
        return <div className="loader"></div>;
    }

    return (
        <div>
            <Title/>
            <SearchBar onSearch={handleChangeSearch} />
            <PresetSearch preselectedwords={preselectedwords} onclick={changeToBeach} />
            {/* {searchText && <ImageResults searchtext={searchText} />} */}
            <ImageResults searchtext={searchText} />
        </div>
    );
}

export default App;