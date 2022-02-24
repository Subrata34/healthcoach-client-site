import { Button } from '@mui/material'
import React from 'react'
import './Banner.css';

const Banner = () => {
  return (
    <div className='banner-bar'>
        <div className='banner-move'> 
      <h1 style={{fontSize:"40px",color:"gray",textDecorationThickness:"-1px"}}>Get in shape firster,live your <br /> happy life</h1>
      <div style={{marginTop:"80px"}}> 
      <Button variant="contained">Learn More</Button>
      <Button style={{border:"solid 2px green",margin:"5px"}} >Contact Us</Button>
      </div>
      </div>
    </div>
  )
}

export default Banner