import React, { useState, useEffect } from 'react';

function LoadingWrapper({ children }) {
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    // Simulate a data loading delay
    const timer = setTimeout(() => {
      setLoading(false);
    }, 2000); // Adjust the delay as needed

    // Cleanup the timer if the component unmounts
    return () => clearTimeout(timer);
  }, []);

  // Loading spinner component
  const Spinner = () => (
    <div className="flex justify-center items-center min-h-screen">
      <div className="animate-spin rounded-full h-16 w-16 border-t-4 border-b-4 border-gray-900"></div>
    </div>
  );

  return (
    <div>
      {loading ? <Spinner /> : children}
    </div>
  );
}

export default LoadingWrapper;
