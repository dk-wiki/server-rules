import React, { useEffect, useState } from 'react';

const LastBuildTime = () => {
  const [buildTime, setBuildTime] = useState(null);

  useEffect(() => {
    const fetchBuildTime = async () => {
      try {
        const response = await fetch('/server-rules/buildTime.json');
        const data = await response.json();
        setBuildTime(new Date(data.buildTime));
      } catch (error) {
        console.error('Failed to fetch build time:', error);
      }
    };

    fetchBuildTime();
  }, []);

  return (
    <div
      className="text-right md:text-left italic text-white w-full md:w-auto md:absolute md:top-1/2 md:right-5 md:transform md:-translate-y-1/2 relative"
    >
      {buildTime ? (
        <p>Last updated on: {buildTime.toLocaleString()}</p>
      ) : (
        <p>Loading build time...</p>
      )}
    </div>
  );
};

export default LastBuildTime;
