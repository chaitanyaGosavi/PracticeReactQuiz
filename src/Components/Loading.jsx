import React from "react";
import { ripples } from "ldrs";
ripples.register();


const Loading = () => {
  return (
    // Default values shown
    <div className="mx-auto my-10 flex flex-col gap-5 w-[70vw] h-[60vh] justify-center items-center">
        <l-ripples size="125" speed="2" color="white"></l-ripples>
    </div>
  );
};

export default Loading;
