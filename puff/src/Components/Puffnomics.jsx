import React from 'react';
import './Puffnomics.css';
import { FaSquareXTwitter } from "react-icons/fa6";
import { FaTelegram } from "react-icons/fa";
const Puffnomics = () => {
  return (
    <div className='puff'>
      <div className='lp'>
        <div className='bur'><h1>LP <br />BURNT</h1></div>
        <div className='burr'><h1>MINT & <br />FREEZE <br />REVOKED</h1></div>
      </div>
      <div className='llp'>
        <div className='yp'><h1>0/0 <br />TAX</h1></div>
        <div className='yyp'><h1>38B <br />TOTAL <br />SUPPLY</h1></div>
      </div>
      <div className="sulaa">
            <div className="memem">
              <h2 className='hghr'>Claw in with <br />our Community</h2>
              <p>JOIN OUR TELEGRAM AND FOLLOW US ON X FOR THE LATEST UPDATES AND A WARM WELCOME FROM OUR FRIENDLY COMMUNITY. LET’S GLIDE TOWARDS MILLIONAIRES TOGETHER AND ENJOY THE MEME’S AND ARTWORK IN THE PROCESS!</p>
              <div className='icon'>
              <FaSquareXTwitter />
              <FaTelegram />
              </div>
            </div>
        </div>
    </div>
  );
};

export default Puffnomics;
