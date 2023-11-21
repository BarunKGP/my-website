import React from "react";
import Image from "next/image";
// import mainlogo from "@/public/icons/mainlogo.png";

function MainLogo() {
  return (
    <div className="h-64 w-64 flex items-center justify-center">
      <div className="w-48 h-48 rounded-[50%] bg-transparent outline-1 outline-fuchsia-800">
        <Image
          src="/mainlogo.png"
          width={180}
          height={180}
          alt="personal brand logo"
        />
      </div>
    </div>
  );
}

export default MainLogo;
