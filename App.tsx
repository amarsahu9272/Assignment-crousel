import * as React from 'react';
import './style.css';

import { useState } from 'react';

const ImageCarousel = () => {
  const [currentImage, setCurrentImage] = useState(0);
  const images = [
    'https://avatars.githubusercontent.com/u/84452853?v=4',
    'https://media.licdn.com/dms/image/D4D03AQF1tm-NHE-O3A/profile-displayphoto-shrink_400_400/0/1667230664669?e=1687996800&v=beta&t=tOdssWJTQ3aBpTaH2bawPvrNkfjDiUbefZXDgOndZ5s',
    'https://media.licdn.com/dms/image/C4D03AQEkahzxG4_b-g/profile-displayphoto-shrink_400_400/0/1656302220633?e=1687996800&v=beta&t=YRF-syCrRoZtVeU-SQnKmU8pFo4xbPpBrANuU-_Goms',
    // 'https://dummyimage.com/600x400/000/fff&text=Image+1',
    // 'https://dummyimage.com/600x400/000/fff&text=Image+2',
    // 'https://dummyimage.com/600x400/000/fff&text=Image+3',
    // 'https://dummyimage.com/600x400/000/fff&text=Image+4',
    // 'https://dummyimage.com/600x400/000/fff&text=Image+5',
    'https://media.licdn.com/dms/image/D4D03AQFymnKp2uuNNA/profile-displayphoto-shrink_400_400/0/1679798207480?e=1687996800&v=beta&t=EyhD2inm_Jg9TW1Rc_b7l0n6j4_uUX98L9DttZNlRic',
    'https://media.licdn.com/dms/image/D4D03AQGh-_MvHngZZA/profile-displayphoto-shrink_400_400/0/1681820717759?e=1687996800&v=beta&t=yyY8XdQ-uOZfYb5QthUO0UBLUl619kE05eo8W8pMrRo',
    'https://media.licdn.com/dms/image/D5603AQGzpII34HvrFw/profile-displayphoto-shrink_400_400/0/1682189228581?e=1687996800&v=beta&t=Uz27YYF0QupxznLaCWnylR49A5djP-tN76qLX_fzW4s',
  ];

  const handlePrev = () => {
    setCurrentImage(currentImage === 0 ? images.length - 1 : currentImage - 1);
  };

  const handleNext = () => {
    setCurrentImage(currentImage === images.length - 1 ? 0 : currentImage + 1);
  };

  return (
    <div className="image-carousel">
      <div className="image-wrapper">
        <img className="images" src={images[currentImage]} alt={`Image ${currentImage + 1}`} />
      </div>
      <button className="prev-btn" onClick={handlePrev}>
        &lt;
      </button>
      <button className="next-btn" onClick={handleNext}>
        &gt;
      </button>
    </div>
  );
};

export default ImageCarousel;
