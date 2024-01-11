import React from "react";
import { ClipLoader	 } from "react-spinners";


const Loading = () => {
  return (
    <div style={{marginTop:"10%", marginLeft:"50%"}}>
      <ClipLoader
        aria-label='Loading Spinner'
        color="#8b3eea"
        height={200}
        width={80}
      />
    </div>
  );
};

export default Loading;
