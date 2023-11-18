import React, { useContext } from "react";
import Context from "../../store/Context";
import PulseLoader from "react-spinners/PulseLoader";

const Loading = () => {
  const [state] = useContext(Context);
  const { loading } = state;

  return (
    <div
      style={{
        display: loading ? "flex" : "none",
        position: "fixed",
        inset: 0,
        backgroundColor: "rgba(255, 255, 255, 0.7)", // Adjust the background color and opacity
        zIndex: 9999,
        alignItems: "center",
        justifyContent: "center",
      }}
    >
      <PulseLoader color="#77C8E4" loading={loading} size={15} />
    </div>
  );
};

export default Loading;
