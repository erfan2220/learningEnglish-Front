"use client";

const VideoPlayer = ({ src }: { src: string }) => (
  <video controls className="w-full rounded-lg shadow-md">
    <source src={src} type="video/mp4" />
    Your browser does not support the video tag.
  </video>
);

export default VideoPlayer;
