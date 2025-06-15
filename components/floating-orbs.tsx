import React from "react";

const FloatingOrbs = () => {
  return (
    <>
      <div className="absolute top-[10%] left-[10%] w-72 h-72 bg-purple-500/20 rounded-full filter blur-3xl opacity-50 animate-float"></div>
      <div className="absolute top-[50%] right-[10%] w-72 h-72 bg-violet-500/20 rounded-full filter blur-3xl opacity-50 animate-float [animation-delay:-3s]"></div>
    </>
  );
};

export default FloatingOrbs;
