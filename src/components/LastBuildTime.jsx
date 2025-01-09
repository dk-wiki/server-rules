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
    <div className="w-full text-right px-10 italic text-gray-600 pb-10">
      {buildTime ? (
        <p>Last update on: {buildTime.toLocaleString()}</p>
      ) : (
        <p>Loading build time...</p>
      )}
    </div>
  );
};

export default LastBuildTime;
