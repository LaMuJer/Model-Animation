import React, { useRef, useEffect } from 'react'
import { useGLTF, useAnimations } from '@react-three/drei'
import { useCharacterAnimation } from './CharacterAnimation'

export function Girl(props) {
  const group = useRef()
  const { nodes, materials, animations } = useGLTF('/v2-v1-transformed.glb')
  const { actions, names } = useAnimations(animations, group)
  const { setAnimations, animationIndex } = useCharacterAnimation()
  useEffect(() => {
    setAnimations(names)
  }, [names])

  useEffect(() => {
    actions[names[animationIndex]].reset().fadeIn(0.5).play()
    return () => {
      actions[names[animationIndex]].fadeOut(0.5)
    }
  }, [animationIndex])

  return (
    <group ref={group} {...props} dispose={null} scale={1} position={[0.5, -2.5, 6]} >
      <group name="Scene">
        <group name="Armature" rotation={[Math.PI / 2, 0, 0]} scale={0.01}>
          <primitive object={nodes.mixamorigHips} />
          <skinnedMesh name="Mesh_0000_Tex_0000_0dds_0" geometry={nodes.Mesh_0000_Tex_0000_0dds_0.geometry} material={materials['Tex_0000_0.dds']} skeleton={nodes.Mesh_0000_Tex_0000_0dds_0.skeleton} />
          <skinnedMesh name="Mesh_0007_Tex_0000_0dds2_0" geometry={nodes.Mesh_0007_Tex_0000_0dds2_0.geometry} material={materials['Tex_0000_0.dds.1']} skeleton={nodes.Mesh_0007_Tex_0000_0dds2_0.skeleton} />
          <skinnedMesh name="Mesh_0001_Tex_0000_0dds1_0" geometry={nodes.Mesh_0001_Tex_0000_0dds1_0.geometry} material={materials['Tex_0000_0.dds.1']} skeleton={nodes.Mesh_0001_Tex_0000_0dds1_0.skeleton} />
          <skinnedMesh name="Mesh_0002_Tex_0014_0dds_0" geometry={nodes.Mesh_0002_Tex_0014_0dds_0.geometry} material={materials['Tex_0014_0.dds']} skeleton={nodes.Mesh_0002_Tex_0014_0dds_0.skeleton} />
          <skinnedMesh name="Mesh_0008_Tex_0000_0dds3_0" geometry={nodes.Mesh_0008_Tex_0000_0dds3_0.geometry} material={materials['Tex_0000_0.dds.1']} skeleton={nodes.Mesh_0008_Tex_0000_0dds3_0.skeleton} />
        </group>
      </group>
    </group>
  )
}

useGLTF.preload('/v2-v1-transformed.glb')
