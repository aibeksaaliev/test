import './App.css'
import Webcam from "react-webcam";
import {useRef} from "react";

function App() {
    const webcamRef = useRef<Webcam | null>(null);

  return (
      <>
        <Webcam
            audio={false}
            ref={webcamRef}
            screenshotFormat="image/jpeg"
            videoConstraints={{facingMode: "environment"}}
        />
      </>
  )
}

export default App
