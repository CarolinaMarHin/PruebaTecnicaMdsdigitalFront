
import './ListImages.css';
import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';


function ListImages() {
    return (
        useImages()
    );
}

const useImages = () => {
    const sizeImage = window.innerWidth > 700 ? 'big' : 'small';

    const [images, setImages] = useState([]);
    useEffect(() => {
        fetch('http://localhost:3100/images')
            .then((response) => response.json())
            .then((data) => {
                setImages(data);
            })
            .catch((err) => {
                console.log(err.message);
            });
    }, []);

    return (
        <div className="img-container">
            {images.map((image) => {
                return (
                    <div className="img-card" id={image.id} key={image.id}>
                        <img src={image.main_attachment[sizeImage]} alt={image.title} id={image.id} onClick={addLike}></img>
                        <p>Likes: {image.likes_count}</p>
                        <p className="like">Click para dar like</p>
                    </div>
                );
            })}
        </div>
    );
}

const addLike = async (event) => {
    let id = event.target.id;
    await fetch(`http://localhost:3100/images/${id}/likes`, {
        method: 'POST',
        headers: {
            'Content-type': 'application/json; charset=UTF-8',
        }
    })
        .then((data) => {
            console.log(data);
        })
        .catch((err) => {
            console.log(err.message);
        });
};

export default ListImages;
