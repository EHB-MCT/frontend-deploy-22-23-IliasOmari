import { Canvas } from "@react-three/fiber";
import "./App.css";
import { Shape } from "./components/Shape";


function App() {
  return (
    <>
      <Canvas camera={{ fov: 45, near: 0.1, far: 200, position: [3, 2, 6] }}>
        <Shape />
      </Canvas>
    </>
  );
}

export default App;
