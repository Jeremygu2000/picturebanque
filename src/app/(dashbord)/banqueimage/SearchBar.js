// import './searchbar.css'
// import React, { useState } from 'react';

// function SearchBar({ onSearch }) {
//     const [searchText, setSearchText] = useState('');

//     const handleChange = (event) => {
//         setSearchText(event.target.value);
//     };

//     const handleSearch = () => {
//         onSearch(searchText);
//     };

//     return (
        
//         <div class='searchbar'>
//             <input
//                 type="text"
//                 placeholder="Search..."
//                 value={searchText}
//                 onChange={handleChange}
//             />
//             <button onClick={handleSearch}>Search</button>
//         </div>
//     );
// }

// export default SearchBar;

import React, { useState } from 'react';
import './searchbar.css'; // Importer le fichier CSS pour les styles personnalisés

// import 'bootstrap/dist/css/bootstrap.min.css';


function SearchBar({ onSearch }) {
    const [searchText, setSearchText] = useState('');

    const handleChange = (event) => {
        setSearchText(event.target.value);
    };

    const handleSearch = () => {
        onSearch(searchText);
    };

    return (
        <div className='searchbar-container'> {/* Utilisation de className au lieu de class */}
            <input
                type="text"
                placeholder="Search..."
                value={searchText}
                onChange={handleChange}
                className="searchbar-input" 
            />
            <button onClick={handleSearch} className="searchbar-button"> {/* Ajout de la classe CSS pour le style */}
                Recherche 
            </button>
        </div>
    );
}

export default SearchBar;
