import React from 'react';
import './Dog.css'; 
import landing from '../assets/landing.png';

const Dog = () => {
  return (
    <div className='first-div'>
        <img src={landing} alt="" />
        <div>
            <h2 className='ty'>About PuffCat</h2>
            <p className='pp'>Puff Cat is oldest cat ever to live on the universe. Bringing it's longetivity, over 30 years of combined crypto 
experience and the meme culture, it's here to change how the memes are perceived and adopted. 
JOIN US IN CREATING A NEW WAVE OF THE CAT CULTURE ON THE SOLANA CHAIN
</p>
        </div>
    </div>
  );
};

export default Dog;
