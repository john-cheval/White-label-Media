"use client";
import { useEffect, useState } from "react";
import isVideo from "../lib/checkVideo";
export const useSecureVideo = (videoUrl) => {
  const [blobUrl, setBlobUrl] = useState(null);
  const [logoBlobUrl, setLogoBlobUrl] = useState(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    if (!videoUrl || !isVideo(videoUrl)) {
      setLoading(false);
      return;
    }

    const createSecureVideo = async () => {
      try {
        setLoading(true);
        setError(null);

        // Fetch video
        const response = await fetch(videoUrl);
        if (!response.ok) {
          throw new Error(`Failed to fetch video: ${response.status}`);
        }

        const videoBlob = await response.blob();
        const videoBlobUrl = URL.createObjectURL(videoBlob);
        setBlobUrl(videoBlobUrl);

        const logoHtml = `
          <!DOCTYPE html>
          <html lang="en">
          <head>
              <meta charset="UTF-8">
              <meta name="viewport" content="width=device-width, initial-scale=1.0">
              <title>Protected Content - Your Website</title>
              <style>
                  * { margin: 0; padding: 0; box-sizing: border-box; }
                  body {
                      background: linear-gradient(135deg, #1e3c72, #2a5298);
                      height: 100vh;
                      display: flex;
                      align-items: center;
                      justify-content: center;
                      font-family: 'Arial', sans-serif;
                      color: white;
                  }
                  .container {
                      text-align: center;
                      padding: 60px 40px;
                      border-radius: 20px;
                      background: rgba(255, 255, 255, 0.1);
                      backdrop-filter: blur(15px);
                      border: 1px solid rgba(255, 255, 255, 0.2);
                      box-shadow: 0 15px 35px rgba(0, 0, 0, 0.3);
                      max-width: 500px;
                  }
                  .logo {
                      width: 120px;
                      height: 120px;
                      background: white;
                      border-radius: 50%;
                      display: flex;
                      align-items: center;
                      justify-content: center;
                      margin: 0 auto 30px;
                      font-size: 48px;
                      font-weight: bold;
                      color: #1e3c72;
                      box-shadow: 0 10px 30px rgba(0, 0, 0, 0.2);
                  }
                  h1 {
                      font-size: 28px;
                      margin-bottom: 20px;
                      font-weight: 300;
                  }
                  p {
                      line-height: 1.6;
                      opacity: 0.9;
                      margin-bottom: 15px;
                  }
                  .shield {
                      font-size: 60px;
                      margin-bottom: 20px;
                      opacity: 0.8;
                  }
                  .warning {
                      background: rgba(255, 193, 7, 0.2);
                      border: 1px solid rgba(255, 193, 7, 0.5);
                      border-radius: 10px;
                      padding: 15px;
                      margin-top: 20px;
                      font-size: 14px;
                  }
              </style>
          </head>
          <body>
              <div class="container">
                  <div class="shield">🛡️</div>
                  <div class="logo">LOGO</div>
                  <h1>Protected Video Content</h1>
                  <p>This video is protected by digital rights management.</p>
                  <p>Access is restricted to authorized viewers only.</p>
                  <div class="warning">
                      <strong>⚠️ Notice:</strong> This content can only be viewed through our official website.
                  </div>
              </div>
          </body>
          </html>
        `;

        const logoBlob = new Blob([logoHtml], { type: "text/html" });
        const logoUrl = URL.createObjectURL(logoBlob);
        setLogoBlobUrl(logoUrl);
      } catch (err) {
        console.error("Error loading secure video:", err);
        setError(err.message);
      } finally {
        setLoading(false);
      }
    };

    createSecureVideo();

    return () => {
      if (blobUrl && blobUrl.startsWith("blob:")) {
        URL.revokeObjectURL(blobUrl);
      }
      if (logoBlobUrl && logoBlobUrl.startsWith("blob:")) {
        URL.revokeObjectURL(logoBlobUrl);
      }
    };
  }, [videoUrl]);

  // Return the logo URL for copying instead of video URL
  return {
    blobUrl,
    logoBlobUrl, // This is what users will see if they copy the URL
    loading,
    error,
  };
};
