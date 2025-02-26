import React from 'react';
import './Gallery.css'; // Import the CSS file

// Import your images (replace these with your actual image paths)
import image1 from '../Asset/p1.jpeg';
import image2 from '../Asset/p10.jpeg';
import image3 from '../Asset/p11.jpeg';
import image4 from '../Asset/p12.jpeg';
import image5 from '../Asset/p13.jpeg';
import image6 from '../Asset/p14.jpeg';
import image7 from '../Asset/p15.jpeg';
import image8 from '../Asset/p16.jpeg';
import image9 from '../Asset/p17.jpeg';
import image10 from '../Asset/p18.jpeg';
import image11 from '../Asset/p19.jpeg';
import image12 from '../Asset/p2.jpeg';
import image13 from '../Asset/p20.jpeg';
import image14 from '../Asset/p5.jpeg';
import image15 from '../Asset/p6.jpeg';
import image16 from '../Asset/p7.jpeg';
import image17 from '../Asset/p8.jpeg';
import image18 from '../Asset/p3.jpeg';
import image19 from '../Asset/p4.jpeg';
import image20  from '../Asset/p9.jpeg';

// ... import up to image20

const Gallery = () => {
  const images = [
    image1, image2, image3, image4,
    image5, image6,  image7, image8,
    image9, image10,image11,image12,
    image13, image14, image15, image16,
    image17, image18, image19,image20,
    // ... add up to image20
  ];

  return (
    <div className="gallery-container" id='gallery'>
      <h2>Project Gallery</h2>
      <div className="gallery-grid">
        {images.map((image, index) => (
          <div key={index} className="gallery-item">
            <img src={image} alt={`Project ${index + 1}`} />
            <div className="overlay">
              <p>Project {index + 1}</p>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Gallery;