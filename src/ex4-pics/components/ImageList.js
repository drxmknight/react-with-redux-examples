import './ImageList.css';
import React from 'react';
import ImageCard from './ImageCard';

const ImageList = (props) => {
    /* Map a ImageCard component to every image in the list.
     * Assign a unique key the imageCard list.
     */
    const images = props.images.map(image => {
        return <ImageCard key={image.id} image={image}></ImageCard>
    });

    // Return the component to render.
    return (
        <div>
            <p>Image List:</p>
            <div className="image-list">{images}</div>
        </div>
    );
}

export default ImageList;