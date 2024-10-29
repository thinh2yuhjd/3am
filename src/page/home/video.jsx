import React from "react";
import { Player } from "video-react";
import "video-react/dist/video-react.css"; 

const Video = () => {
  return (
    <div style={{ maxWidth:"900px", width: "100%", margin: "0 auto" }}>
      <Player autoPlay playsInline muted disableDefaultControls>
        <source src="https://media.w3.org/2010/05/sintel/trailer_hd.mp4" />
      </Player>
    </div>
  );
};

export default Video;
