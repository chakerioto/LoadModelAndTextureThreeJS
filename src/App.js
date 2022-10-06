import "./App.css";
import { Canvas } from "@react-three/fiber";
import { Environment, OrbitControls } from "@react-three/drei";
import { Suspense } from "react";
import Model from "./components/Model";

export default function App() {
  return (
    <div className="App">
      <Canvas>
        <Suspense fallback={null}>
          <Model />
          <OrbitControls autoRotate />
          <Environment preset="sunset" background />
        </Suspense>
      </Canvas>
    </div>
  );
}
