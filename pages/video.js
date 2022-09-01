import React from "react";

const video = () => {
  return (
    <div>
      video
      <div>
        {/* <iframe
          src="https://www.youtube.com/watch?v=5q5MmwiS28s"
          width={"1000"}
          height="1000"
        ></iframe>
        <iframe src="/video/video.mp4" width={"1000"} height="1000"></iframe> */}

        <video
          controls
          width="1000"
          //   src="https://www.youtube.com/watch?v=5q5MmwiS28s"
        >
          <source src="/video/video.mp4" type="video/mp4" />
        </video>
      </div>
    </div>
  );
};

export default video;
