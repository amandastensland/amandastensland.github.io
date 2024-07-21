import { useGLTF } from "@react-three/drei"
import sparum from './Sparum4.glb'

export default function Sparum() {
    const gltf = useGLTF(sparum)
    return <primitive object={gltf.scene} />
}