import { Environment, OrbitControls } from "@react-three/drei";
import { Canvas } from "@react-three/fiber";
import { Suspense } from "react";
import Sparum from "./Sparum";

export default function SparumPage() {
    return (
        <div className="h-screen w-screen" >
            <Canvas camera={{ position: [-2, 5, -2] }}>
                <Suspense fallback={null}>
                    <ambientLight intensity={2} />
                    <directionalLight color="white" position={[0, 0, 1]} />
                    <directionalLight color="white" position={[0, 1, 1]} />
                    <directionalLight color="white" position={[1, 1, 1]} />
                    <directionalLight color="white" position={[1, 0, 1]} />
                    <OrbitControls autoRotate autoRotateSpeed={1} rotateSpeed={0.4} zoomSpeed={0.2} zoomToCursor={true} />
                    <Environment preset="apartment" background />
                    <Sparum />
                </Suspense>
            </Canvas>
        </div>
    )
}