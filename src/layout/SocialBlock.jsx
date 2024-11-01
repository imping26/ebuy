import { Facebook, Instagram, Mail, Phone } from "lucide-react";
import React from "react";

function SocialBlock() {
  return (
    <div className="bg-black h-12 w-full hidden sm:block">
      <div className="text-white p-3 flex items-center justify-between max-w-[1280px] mx-auto">
        <div className="flex gap-2 text-sm">
          <div className="flex items-center  gap-1 mr-2">
            <Phone size={20} />
            <span>+0123456789</span>
          </div>
          <div className="flex items-center gap-1">
            <Mail size={20} />
            <span>testtest@gmail.com</span>
          </div>
        </div>
        <div>
          <div className="flex gap-2">
            <Facebook size={20} />
            <Instagram size={20} />
          </div>
        </div>
      </div>
    </div>
  );
}

export default SocialBlock;
