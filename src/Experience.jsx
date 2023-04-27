import { OrbitControls, PerspectiveCamera } from '@react-three/drei'
import { Perf } from 'r3f-perf'
import { CombineStage } from './Combinestage-v2'

import { Girl } from './V2-v1'
import Lights from './Lights'

export default function Experience() {

    return <>
        {/* <Perf position="top-left" /> */}
        <PerspectiveCamera
            position={[-1.49, 0, 12.6]}
            fov={60}
            near={0.1}
            far={1000}
            makeDefault
        />

        <OrbitControls enablePan={false}
            minPolarAngle={Math.PI / 2.2}
            maxPolarAngle={Math.PI / 2.2}
            minDistance={12}
            maxDistance={15}
        />

        {/* White Ring */}
        <mesh castShadow receiveShadow position={[.8, .9, -6]} >
            <torusGeometry args={[3, .05, 16, 100]} />
            <meshStandardMaterial emissive={[5, 5, 5]} color="red" />
        </mesh>

        <Lights />

        {/* <Model /> */}
        <Girl />
        <CombineStage />

    </>
}