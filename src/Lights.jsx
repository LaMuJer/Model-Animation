import { Environment, Lightformer, PointMaterial, SpotLight, useHelper } from '@react-three/drei'
import { useFrame } from '@react-three/fiber'
import { EffectComposer, Bloom } from '@react-three/postprocessing'
import { useControls } from 'leva'
import { useRef, useState } from 'react'
import * as THREE from "three"

const Lights = () => {
    const [degraded, degrade] = useState(false)
    const { lightRing, color1, color2, color4, color5, pointColor } = useControls({
        lightRing: {
            value: { x: 0, y: 3 },
            min: -50,
            max: 50,
            step: 0.01
        },
        color1: '#ff0000',
        color2: '#00ff36',
        color4: '#0019ff',
        color5: '#0019ff',
        pointColor: '#ff00d2',

        sideLight: {
            value: { x: 1, y: 1.10 },
            min: -50,
            max: 50,
            step: 0.01
        },
        sideLight2: {
            value: { x: 0.35, y: 0.26 },
            min: -50,
            max: 50,
            step: 0.01
        }
    })

    const count = 100
    const intensity = 100
    const positions = new Float32Array(Array.from({ length: count * 3 },
        () => THREE.MathUtils.randFloatSpread(5)
    ))
    const colors = new Float32Array(
        Array.from({ length: count }, () =>
            new THREE.Color(Math.random() * (intensity / 4),
                Math.random() * (intensity / 2), Math.random() * intensity / 4).toArray()
        ).flat()
    )
    const points = useRef(null)
    useFrame((state) => {
        const t = state.clock.elapsedTime
        positions.forEach((p, i) => (positions[i] += Math[i % 2 ? 'sin' : 'cos'](10 * i + t) / 5))
        points.current.geometry.attributes.position.needsUpdate = true
    })

    const spotLightRef = useRef()
    useHelper(SpotLight, THREE.SpotLightHelper, 1)

    return <>
        <pointLight position={[1, -1, -2]} color={pointColor} intensity={.2} />
        <spotLight ref={spotLightRef}
            position={[-1, 5, 0]} angle={5} penumbra={.2}
            color={color1}
            castShadow intensity={4} shadow-bias={-0.01} />
        <spotLight ref={spotLightRef}
            position={[1, 5, 2]} angle={5.2} penumbra={.2}
            color={color2}
            castShadow intensity={4} shadow-bias={-0.01} />
        <spotLight ref={spotLightRef}
            position={[-1, 5, 3]} angle={0.9} penumbra={1}
            color={color4}
            castShadow intensity={1} shadow-bias={-0.01} />

        <Environment frames={degraded ? 1 : Infinity} resolution={256} blur={0}>
            <Lightformer
                intensity={2}
                rotation-x={Math.PI / 2}
                position={[lightRing.x, lightRing.y, 0]}
                scale={[10, 1, 1]}
                castShadow
                color={color5}
            />
        </Environment>
        <EffectComposer disableNormalPass>
            <Bloom luminanceThreshold={1} mipmapBlur levels={7} intensity={0.25} />
        </EffectComposer>

        <points ref={points}>
            <bufferGeometry>
                <bufferAttribute usage={THREE.DynamicDrawUsage} attach="attributes-position" args={[positions, 3]} />
                <bufferAttribute usage={THREE.DynamicDrawUsage} attach="attributes-color" args={[colors, 3]} />
            </bufferGeometry>
            <PointMaterial transparent vertexColors size={5} sizeAttenuation={false} depthWrite={false} toneMapped={false} />
        </points>
    </>
}

export default Lights
