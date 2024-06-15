import React from 'react'
import './Partner.css'
import Dex from '../assets/dex.png'
import Dexx from '../assets/dexx.png'
import jup from '../assets/jup.png'
import rad from '../assets/radium.png'

function Partner() {
  return (
    <div className='larg'>
        <div>
            <h2 className='our'>Our Partners</h2>
        </div>
        <div className='yoo'>
           <img src={rad} alt="" />
           <img src={jup} alt="" />
           <img src={Dexx} alt="" />
           <img src={Dex} alt="" />
        </div>
    </div>
  )
}

export default Partner