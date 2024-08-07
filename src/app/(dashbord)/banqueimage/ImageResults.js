import React, { useEffect, useState } from 'react';
import axios from 'axios';
import './ImageResult.css';

function ImageResults(props) {
    const [images, setImages] = useState([]);

    useEffect(() => {
        const fetchImages = async () => {
            try {
                const response = await axios.get('https://api.pexels.com/v1/search', {
                    params: { query: props.searchtext },
                    headers: { Authorization: 'LW246lwJOyzp1YL380O5tZNYAoDdei9x7AEf9XTcW86Cm0h83SCJw0jU' }
                });

                setImages(response.data.photos);
            } catch (error) {
                console.error(error);
            }
        };

        fetchImages();
    }, [props.searchtext]);

    return (
        <div>
            <h2>photos {props.searchtext}</h2>
            <div className="image-grid">
                {images.map((image, index) => (
                    <div key={index} className="image-item">
                        <img src={image.src.small} alt={`Image ${index}`} width="200px" height="200px"/>
                    </div>
                ))}
            </div>
        </div>
    );
}

export default ImageResults;