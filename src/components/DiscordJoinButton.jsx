import React from 'react';
import { DiscordLogoIcon } from '@radix-ui/react-icons';

const DiscordJoinButton = ({ onClick }) => {
  return (
    <button
      onClick={onClick}
      className="flex items-center px-4 py-2 text-white rounded-full shadow-lg hover:bg-blue-700 transition-colors duration-300"
      style={{ fontFamily: 'Arial, sans-serif', fontSize: '1rem', fontWeight: 'bold', backgroundColor: "#566AF6" }}
    >
      <div
        className="flex items-center justify-center w-8 h-8rounded-full mr-3"
        style={{ backgroundColor: "#566AF6" }}
      >
        <DiscordLogoIcon className="text-white w-5 h-5" />
      </div>
      Join DK's Server
    </button>
  );
};

export default DiscordJoinButton;
