import React from "react";
import { TailSpin } from "react-loader-spinner";

function Loader() {
  return (
    <div
      style={{
        display: "flex",
        justifyContent: "center",
        width: "100%",
        height: "1000px",
      }}
    >
      <TailSpin
        visible={true}
        height="80"
        width="80"
        color="#000"
        ariaLabel="tail-spin-loading"
        radius="1"
      />
    </div>
  );
}

export default Loader;
