import { useState } from "react";
import { PlusIcon, MinusIcon } from '@radix-ui/react-icons';

const colors = {
  blue: {
    bg: "bg-blue-300",
    border: "border-blue-300",
    contentBg: "bg-blue-100",
  },
  red: {
    bg: "bg-red-100",
    border: "border-red-300",
    contentBg: "bg-red-100",
  },
  green: {
    bg: "bg-green-100",
    border: "border-green-300",
    contentBg: "bg-green-100",
  },
  gray: {
    bg: "bg-gray-200",
    border: "border-gray-300",
    contentBg: "bg-gray-200",
  },
};

export const ExpandableSection = ({ title, children, color = "gray", iconSize = "w-6 h-6" }) => {
  const [isOpen, setIsOpen] = useState(false);
  const theme = colors[color] || colors.blue;

  return (
    <div className="max-w-screen-xl mx-auto py-1">
      <div
        className={`cursor-pointer ${theme.bg} text-black py-0 flex justify-between items-center`}
        onClick={() => setIsOpen(!isOpen)}
      >
        <h2 className="text-md flex-grow text-left mr-1 font-bold pl-1">{title}</h2>
        <span
          className={`transform transition-transform duration-300 ${isOpen ? "rotate-180" : "rotate-0"}`}
        >
          {isOpen ? (
            <MinusIcon className={`${iconSize} stroke-2`} />
          ) : (
            <PlusIcon className={`${iconSize} stroke-2`} />
          )}
        </span>
      </div>
      <div
        className={`overflow-hidden transition-max-height duration-300 ease-in-out pr-5 ${isOpen ? "max-h-[9999px]" : "max-h-0"}`}
      >
        <div className={`${theme.contentBg} px-2 border-l-8 ${theme.border} text-left`}>
          {children}
        </div>
      </div>
    </div>
  );
};
