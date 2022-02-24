import React from 'react'
import { Link } from 'react-router-dom';
import './Menubar.css';

const Menubar = () => {
  return (
    <div style={{display:"flex",margin:"0px",border:"0px",padding:"0px"}}>
        <h2>HealthCoach</h2>
        <div className='menubar'>
              <ul style={{display:"flex"}}>
                  <li className="items"> <Link to="/home" style={{textDecoration:"none"}}>Home</Link></li>
                  <li className="items"><Link to="/about" style={{textDecoration:"none"}}>Abou</Link>t</li>
                  <li className="items"> <Link to="/coach" style={{textDecoration:"none"}}>Coach</Link> </li>
                  <li className="items"> <Link to="/Stories" style={{textDecoration:"none"}}>Stories</Link></li>
                  <li className="items"> <Link to="/blog" style={{textDecoration:"none"}}>Blog</Link>  </li>
                  <li className="items"> <Link to="/service" style={{textDecoration:"none"}}>Service</Link> </li>
                  <li className="items"> <Link to="/contact" style={{textDecoration:"none"}}>Contact</Link></li>
                  <li className="items"> <Link to="/login" style={{textDecoration:"none"}}>Login</Link></li>
              </ul>
        </div>
    </div>
  )
}

export default Menubar