"use client";
import { useSecureVideo } from "@/app/hooks/useSecureVideo";
import React, { useEffect, useRef } from "react";

const SecuredVideo = ({ src, className, ...props }) => {
  const { blobUrl, loading, error, logoBlobUrl } = useSecureVideo(src);
  const videoRef = useRef(null);

  useEffect(() => {
    const handleCopy = (e) => {
      if (e.target.tagName === "VIDEO" && blobUrl) {
        // Replace clipboard content with logo URL
        e.clipboardData.setData("text/plain", logoBlobUrl);
        e.preventDefault();
      }
    };

    document.addEventListener("copy", handleCopy);
    return () => document.removeEventListener("copy", handleCopy);
  }, [blobUrl, logoBlobUrl]);

  if (loading) {
    return (
      <div
        className={`${className} flex items-center justify-center bg-gray-200-`}
      >
        <div className="animate-spin rounded-full h-8 w-8 border-b-2 border-gray-900"></div>
      </div>
    );
  }

  if (error || !blobUrl) {
    return (
      <div
        className={`${className} flex items-center justify-center bg-gray-200`}
      >
        <span className="text-gray-500 text-sm">Failed to load video</span>
      </div>
    );
  }
  return (
    <video
      ref={videoRef}
      src={blobUrl}
      autoPlay
      playsInline
      muted
      loop
      controls={false}
      className={className}
      onError={() => console.error("Video playback error")}
      controlsList="nodownload nofullscreen noremoteplayback"
      disablePictureInPicture
      {...props}
    />
  );
};

export default SecuredVideo;
