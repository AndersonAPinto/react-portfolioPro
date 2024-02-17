import React from "react";
import './home.css';

function Home() {
    return (
       
            <div className="container_video">
                <video autoPlay muted loop playsInline style={{ width: '100vw', height: '100vh', objectFit: 'cover' }} >
                    <source src="/Video.mp4" type="video/mp4" />
                </video>
            </div>
        
    )
}

export default Home