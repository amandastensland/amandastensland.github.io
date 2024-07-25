import { useGLTF } from "@react-three/drei"
import model from './model.glb'

export default function Model() {
    const gltf = useGLTF(model)
    return <primitive object={gltf.scene} />
}