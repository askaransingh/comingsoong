import React from "react";
import "./BackgroundVideo.css"; // We'll add CSS here

const BackgroundVideo = () => {
    return (
    
        <div class="video-container">
            <video autoplay muted loop playsinline class="background-video">
                <source src="/videos/tanker-truck-on-the-road copy.mp4"type="video/mp4" />
            </video>

            <h1 class="top-heading">Fair Deal Truck Parts</h1>

            <div class="center-image">
                <img src="/assets/FAIRDEAL TRUCK PARTS (33).png" alt="Company Logo" />
            </div>

            <div class="center-content">
                <h2>Coming Soon</h2>
                <p>Your trusted source for heavy-duty truck parts.</p>
            </div>

            <div class="bottom-contact">
                <p>📞 +1(780)2832830</p>
                {/* <p><a href="mailto:info@fairdealtruckparts.ca" style={{color:inherit, text-decoration:none}}>✉ info@fairdealtruckparts.ca</a></p> */}
                <p>
                    <a
                        href="mailto:info@fairdealtruckparts.ca"
                        style={{ color: "inherit", textDecoration: "none" }}
                    >
                        ✉ fairdealtruckparts@gmail.com
                    </a>
                </p>
                <p>📍 Edmonton, Alberta, Canada</p>
            </div>
        </div>
    );
};

export default BackgroundVideo;