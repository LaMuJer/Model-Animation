import { Suspense, useState } from "react"
import { CharacterAnimationProvider } from "./CharacterAnimation"
import { Canvas } from '@react-three/fiber'
import Experience from "./Experience"
import Controls from "./Controls"
import LoadingComponent from "./html/LoadingComponent"
import LandingSection from "./html/LandingSection"

const App = () => {
    // Loading 

    return (
        <>
            <CharacterAnimationProvider>
                <LoadingComponent />
                <Suspense fallback={null}>
                    <LandingSection />
                    <Canvas gl={{ preserveDrawingBuffer: true }}
                        shadows
                        camera={{
                            fov: 45,
                            near: 0.1,
                            far: 200,
                            position: [- 4, 3, 6]
                        }}
                    >
                        <Experience />
                    </Canvas>
                    <Controls />
                </Suspense>
            </CharacterAnimationProvider>
        </>
    )
}

export default App
