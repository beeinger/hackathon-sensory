import React, { useState } from "react";
import dynamic from "next/dynamic";
const BarcodeScannerComponent = dynamic(
  () => import("react-webcam-barcode-scanner"),
  { ssr: false }
);

function index() {
  const [data, setData] = useState("Nothing");
  return (
    <>
      <BarcodeScannerComponent
        width={500}
        height={500}
        onUpdate={(err, result) => {
          if (result) setData(result.text);
        }}
      />
      <p>{data}</p>
    </>
  );
}

export default dynamic(() => Promise.resolve(index), {
  ssr: false,
});
