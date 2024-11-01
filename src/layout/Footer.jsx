import { MapPin, Phone } from "lucide-react";
import React from "react";

function Footer() {
  return (
    <footer className="p-3  border-t-2">

      <div className="max-w-[1200px] mx-auto">
        <div className="py-6">
          <span className="font-semibold text-4xl">Logo</span>
        </div>

        <div className="flex flex-col sm:flex-row-reverse sm:justify-between">
          <div className="flex gap-5 mb-6">
            <div>
              <h1 className="font-semibold text-2xl pb-3">Pages</h1>
              <ul className="flex flex-col gap-1">
                <li>Home</li>
                <li>Shop</li>
                <li>Products</li>
              </ul>
            </div>

            <div>
              <h1 className="font-semibold text-2xl pb-3">Categories</h1>
              <ul className="flex flex-col gap-1">
                <li>Women</li>
                <li>Men</li>
                <li>Shoes</li>
              </ul>
            </div>
          </div>

          <div>
            <div className="flex gap-2 mb-3">
              <MapPin size={20} />
              <p>
                611 N Jackson Street, Lake Braxton, Illinois - 89434, Taiwan
              </p>
            </div>

            <div className="flex gap-2">
              <Phone size={20} />
              <p>+ 012-345678</p>
            </div>
          </div>
        </div>
      </div>

    </footer>
  );
}

export default Footer;
