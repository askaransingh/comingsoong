import React from "react";
import "./BackgroundVideo.css";

const BackgroundVideo = () => {
  return (
    <div className="video-container">
      <video
        autoPlay
        muted
        loop
        playsInline
        className="background-video"
      >
        <source src="/videos/tanker-truck-on-the-road copy.mp4" type="video/mp4" />
      </video>

      <h1 className="top-heading">Fair Deal Truck Parts</h1>

      <div className="center-image">
        <img
          src="/assets/FAIRDEAL TRUCK PARTS (33).png"
          alt="Company Logo"
        />
      </div>

      <div className="center-content">
        <h2>Coming Soon</h2>
        <p>Your trusted source for heavy-duty truck parts.</p>
      </div>

      <div className="bottom-contact">
        <p>📞 +1 (780) 283-2830</p>
        <p>
          <a
            href="mailto:fairdealtruckparts@gmail.com"
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