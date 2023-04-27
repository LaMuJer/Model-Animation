import { useGLTF } from '@react-three/drei'

export function CombineStage(props) {
  const { nodes, materials } = useGLTF('/combinestage-v2-transformed.glb')
  return (
    <group {...props} dispose={null} position={[0, -2, 0]}>
      <group scale={0.01}>
        <group position={[-317.69, 369.58, -669.11]} rotation={[-1.56, 0.23, -1.79]} scale={[32.65, 30.71, 78.17]}>
          <mesh castShadow receiveShadow geometry={nodes.Cylinder067_Material002_0_1.geometry} material={materials['Material.005']} />
          <mesh castShadow receiveShadow geometry={nodes.Cylinder067_Material002_0_2.geometry} material={materials['Material.004']} />
          <mesh castShadow receiveShadow geometry={nodes.Cylinder067_Material002_0_3.geometry} material={materials['Material.006']} />
          <mesh castShadow receiveShadow geometry={nodes.Cylinder067_Material002_0_4.geometry} material={materials['Material.007']} />
        </group>
      </group>
    </group>
  )
}

useGLTF.preload('/combinestage-v2-transformed.glb')
