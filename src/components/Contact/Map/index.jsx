"use client";
import React, { memo } from "react";

const Map = memo(() => {
  return (
    <iframe
      src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3613.015544641702!2d55.176409576052215!3d25.10133513557561!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3e5f6b9fc863b5ef%3A0xa2bba4ccb6ef61f1!2sWhite%20Label%20Media!5e0!3m2!1sen!2sae!4v1746610374933!5m2!1sen!2sae"
      title="Best Association / Organization in UAE"
      allowFullScreen
      loading="lazy"
      referrerPolicy="no-referrer-when-downgrade"
      className="w-full h-[570px] "
    ></iframe>
  );
});

export default Map;
