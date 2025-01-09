import React, { useEffect, useState } from 'react';

const LastBuildTime = () => {
  const [buildTime, setBuildTime] = useState(null);

  useEffect(() => {
    const fetchBuildTime = async () => {
      try {
        const response = await fetch('/buildTime.json');
        const data = await response.json();
        setBuildTime(new Date(data.buildTime));
      } catch (error) {
        console.error('Failed to fetch build time:', error);
      }
    };

    fetchBuildTime();
  }, []);

  return (
    <div>
      {buildTime ? (
        <p>Last built on: {buildTime.toLocaleString()}</p>
      ) : (
        <p>Loading build time...</p>
      )}
    </div>
  );
};

export default LastBuildTime;