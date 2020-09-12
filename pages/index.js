import React, { useState } from "react";
import dynamic from "next/dynamic";
import styled from "styled-components";
const BarcodeScannerComponent = dynamic(
  () => import("react-webcam-barcode-scanner"),
  { ssr: false, loading: () => <p>...</p> }
);

function _index({ className }) {
  const [data, setData] = useState("Nothing");
  return (
    <div className={className}>
      <BarcodeScannerComponent
        height={window.innerHeight}
        onUpdate={(err, result) => {
          if (result) setData(result.text);
        }}
      />
    </div>
  );
}

const index = styled(_index)`
  width: 100vw;
  height: 100vh;
  overflow: hidden;
  display: flex;
  align-items: center;
  flex-flow: column nowrap;
`;

export default dynamic(() => Promise.resolve(index), {
  ssr: false,
});
