import React from "react";

const BmaBadge = ({ className = "" }) => {
  return (
    <a
      href="https://www.bmahub.com"
      target="_blank"
      rel="noopener noreferrer"
      className={`inline-flex items-center group select-none transition-transform duration-300 hover:-translate-y-0.5 ${className}`}
    >
      <div className="flex items-center text-[12px] sm:text-[13px] font-sans">
        <span className="text-gray-500 font-medium mr-1.5">Designed by</span>
        <span className="font-bold tracking-wide">
          <span className="text-gray-400 group-hover:text-gray-300 transition-colors">BMA</span>
          <span className="text-[#FF4A22] group-hover:text-[#FF5A5F] transition-colors">hub</span>
          <span className="text-gray-400 group-hover:text-gray-300 transition-colors">.com</span>
        </span>
      </div>
    </a>
  );
};

export default BmaBadge;
