import Image from "next/image";
import Link from "next/link";
import React from "react";

const FloatingWhatsapp = () => {
  return (
    <aside className="fixed bottom-7 right-5 xl:bottom-10 xl:right-6 z-[9999999111]">
      <Link
        target="_blank"
        aria-label="Go to Whats app"
        href={
          "https://wa.me/+97145640367?text=Hello!+I+am+interested+in+your+service"
        }
      >
        <div className="whatsapp animated pulse">
          <div className="whatsapp-btn">
            <Image
              src={"/common/whatsapp.png"}
              alt="Whatsapp"
              width={32}
              height={32}
              sizes="100vw"
              className="w-8 h-auto"
              unoptimized={process.env.NEXT_PUBLIC_IMAGE_UNOPTIMIZED === "true"}
            />
            <div className="red-dot"></div>
          </div>
        </div>
      </Link>
    </aside>
  );
};

export default FloatingWhatsapp;
