import React, { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { ChevronDown, Check } from "lucide-react";

// Custom Dropdown Component
const EliteDropdown = ({
  label,
  name,
  options,
  value,
  onChange,
  error,
  touched,
}) => {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <div className="space-y-2 relative">
      <label className="text-sm font-bold uppercase text-gray-500 ml-1">
        {label}
      </label>
      <div className="relative group/select">
        <button
          type="button"
          onClick={() => setIsOpen(!isOpen)}
          className={`w-full bg-gray-50 border rounded-2xl p-4 pr-12 text-left transition-all font-semibold flex items-center justify-between ${
            touched && error
              ? "border-[#ED1D26]"
              : "border-gray-200 focus:border-[#ED1D26] hover:border-gray-300"
          } ${value ? "text-gray-900" : "text-gray-400"}`}
        >
          <span>{value || `Select ${label}*`}</span>
          <ChevronDown
            className={`w-5 h-5 transition-transform duration-300 ${
              isOpen ? "rotate-180" : ""
            }`}
          />
        </button>

        <AnimatePresence>
          {isOpen && (
            <>
              <div
                className="fixed inset-0 z-30"
                onClick={() => setIsOpen(false)}
              />
              <motion.div
                initial={{ opacity: 0, y: 10, scale: 0.95 }}
                animate={{ opacity: 1, y: 0, scale: 1 }}
                exit={{ opacity: 0, y: 10, scale: 0.95 }}
                className="absolute top-full left-0 w-full mt-2 bg-white rounded-2xl shadow-2xl border border-gray-100 p-2 z-40 overflow-hidden"
              >
                {options.map((opt) => (
                  <button
                    key={opt}
                    type="button"
                    onClick={() => {
                      onChange(name, opt);
                      setIsOpen(false);
                    }}
                    className={`w-full text-left px-4 py-3 rounded-xl transition-all font-bold text-sm flex items-center justify-between group/opt ${
                      value === opt
                        ? "bg-[#ED1D26] text-white"
                        : "text-gray-700 hover:bg-red-50 hover:text-[#ED1D26]"
                    }`}
                  >
                    {opt}
                    {value === opt && <Check className="w-4 h-4" />}
                  </button>
                ))}
              </motion.div>
            </>
          )}
        </AnimatePresence>
      </div>
      {touched && error && (
        <p className="text-[#ED1D26] text-xs font-bold ml-1">{error}</p>
      )}
    </div>
  );
};

export default EliteDropdown;
