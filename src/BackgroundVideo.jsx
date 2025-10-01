import React from "react";
import "./BackgroundVideo.css"; // We'll add CSS here

const BackgroundVideo = () => {
    return (
        <div className="video-container">
            {/* Background video */}
            <video
                autoPlay
                loop
                muted
                className="background-video"
            >
                <source src="/videos/trucks-in-different-colors-rotating-on-alpha-loop.mp4" type="video/mp4" />
                Your browser does not support the video tag.
            </video>

            {/* Transparent black overlay  */}
            <div className="overlay"></div>

            {/* Content on top */}
            {/* <div className="content">
                <h1 className="text-5xl font-bold mb-4">Coming Soon</h1>
                <p className="text-xl">
                    Our heavy-duty truck spare parts website is under construction.
                </p>
            </div> */}
            {/* Top main heading */}
            <div className="center-image">
                <img src="/assets/FAIRDEAL TRUCK PARTS (4) copy.png" alt="Logo" />
            </div>
            <div className="top-heading">
                <h1>Coming Soon</h1>
            </div>

            {/* Center content */}
            <div className="center-content">
                <h2>Heavy Duty, Truck, Spare Parts and Accessories</h2>
                <p>Our website is coming soon. Stay tuned.</p>
            </div>
            <div className="bottom-contact">
                <p>Contact: +1 (289) 780-283-2830</p>
                {/* <p>Email: info@fairdealtruckparts.ca</p> */}
                <p>
                    Email:
                    <a href="mailto:info@fairdealtruckparts.ca" target="_blank" rel="noopener noreferrer">
                        info@fairdealtruckparts.ca
                    </a>
                </p>
                <p>Alberta, Canada</p>
            </div>
        </div>
    );
};

export default BackgroundVideo;