import React from "react";

// Choice Cards Component
const ChoiceCards = ({
  label,
  name,
  options,
  value,
  onChange,
  error,
  touched,
}) => {
  return (
    <div className="space-y-2">
      <label className="text-sm font-bold uppercase text-gray-500 ml-1">
        {label}
      </label>
      <div className="grid grid-cols-2 gap-4">
        {options.map((opt) => (
          <button
            key={opt.value}
            type="button"
            onClick={() => onChange(name, opt.value)}
            className={`p-4 rounded-2xl border-2 transition-all duration-300 text-center flex flex-col items-center gap-2 group ${
              value === opt.value
                ? "border-[#ED1D26] bg-[#ED1D26]/5"
                : "border-gray-100 bg-gray-50 hover:border-gray-200"
            }`}
          >
            <div
              className={`w-10 h-10 rounded-xl flex items-center justify-center transition-colors ${
                value === opt.value
                  ? "bg-[#ED1D26] text-white"
                  : "bg-white text-gray-400 group-hover:text-gray-600"
              }`}
            >
              {opt.icon}
            </div>
            <span
              className={`text-xs font-black uppercase tracking-tight ${
                value === opt.value ? "text-[#ED1D26]" : "text-gray-500"
              }`}
            >
              {opt.label}
            </span>
          </button>
        ))}
      </div>
      {touched && error && (
        <p className="text-[#ED1D26] text-xs font-bold ml-1">{error}</p>
      )}
    </div>
  );
};

export default ChoiceCards;
