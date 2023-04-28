import { useProgress } from "@react-three/drei"
import { useEffect, useRef, useState } from "react"
import "./Loading.css"
import gsap from 'gsap'
import { TextPlugin } from 'gsap/all'
gsap.registerPlugin(TextPlugin)

const LoadingComponent = () => {

    const { active, progress } = useProgress()
    const loadingContainerRef = useRef(null)
    let loadingContainerRefTl = useRef(null)
    const [loadingDone, setLoadingDone] = useState(false)

    useEffect(() => {
        let ctx = gsap.context(() => {
            loadingContainerRefTl.current = gsap.timeline()
                .to("#tech", {
                    duration: 3,
                    text: "Are you ready to experience it?",
                    repeat: -1,
                    yoyo: true,
                    ease: "power2.inOut"
                })
                .to("#ready", {
                    duration: 3,
                    text: "Technology is coming",
                    repeat: -1,
                    yoyo: true,
                    ease: "power2.inOut"
                }, "<")
                .to("#music", {
                    duration: 3,
                    text: "LET'S DO THIS !!!",
                    repeat: -1,
                    yoyo: true,
                    ease: "power2.inOut"
                }, "<")
                .to("#do", {
                    duration: 3,
                    text: "Whatever is coming , don't stop the music",
                    repeat: -1,
                    yoyo: true,
                    ease: "power2.inOut",
                }, "<")
            if (loadingDone) {
                gsap.timeline().to(".loading-container", {
                    duration: 2,
                    yPercent: 100,
                    display: "none",
                    ease: "power2.inOut"
                })
            }
        })
        return () => ctx.revert()
    }, [loadingDone])

    // Audio Play
    let audioSrc = new Audio("/riri.mp3")
    const handleMusicPlay = () => {
        audioSrc.play()
        audioSrc.loop = true
        setLoadingDone(true)
    }

    return (
        <div className="loading-container" ref={loadingContainerRef}>
            <div className="loading-box">
                <p id={"tech"}>Technology is coming</p>
                <p id={"ready"}>Are you ready to experience it?</p>
                <p id={"music"}>Whatever is coming , don't stop the music</p>
                <p id={"do"}>LET'S DO THIS !!!</p>
                <div className="loading-progress-box">
                    <h1 className="progressNum" >{Math.floor(progress)}%</h1>
                </div>
                <div className="btn-box" style={{ opacity: active ? "0" : "1" }}>
                    <button className="button button--mimas" onClick={handleMusicPlay} >
                        <span>Enter</span>
                    </button>
                </div>
            </div>
        </div>
    )
}

export default LoadingComponent
