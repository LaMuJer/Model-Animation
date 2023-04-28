import "./LandingSection.css"
import { TextPlugin } from 'gsap/all'
gsap.registerPlugin(TextPlugin)
import gsap from 'gsap'
import { useEffect, useRef, useState } from "react"

const LandingSection = () => {

    // Landing Animation
    const landingContainerRef = useRef()
    const landingContainerRefTl = useRef()
    useEffect(() => {
        let ctx = gsap.context(() => {
            landingContainerRefTl.current = gsap.timeline()
                .to("#dance", {
                    duration: 4,
                    color: "#fff",
                    text: "Dance to the moon and reach for the stars",
                    repeat: -1,
                    yoyo: true,
                    ease: "power2.inOut",
                })
                .to(".drag", {
                    duration: 1,
                    opacity: 0,
                    repeat: -1,
                    yoyo: true,
                    ease: "power2.inOut",
                }, "<")
        }, landingContainerRef)

        return () => ctx.revert()
    }, [])


    // About Pop up box
    const [popup, setPopup] = useState(false)
    useEffect(() => {
        let ctx = gsap.context(() => {
            gsap.to(".popup-box", {
                scale: 1,
                opacity: 1,
                ease: "power2.inOut",
            })
        }, landingContainerRef)

        return () => ctx.revert()
    }, [popup])


    // Link Hover Animation
    const twitterRef = useRef()
    const gitRef = useRef()
    const fbRef = useRef()
    const aboutRef = useRef()

    const twitterRefTl = useRef()
    const handleMouseEnter = (text, link) => {
        twitterRefTl.current = gsap.timeline()
            .to(link.current, {
                text: text,
                ease: "power1.inOut",
            })
    }

    const handleMouseLeave = (text, link) => {
        twitterRefTl.current = gsap.timeline()
            .to(link.current, {
                text: text,
                ease: "power1.inOut",
            })
    }

    // Sound On/Off Animation

    return (
        <div className="landing-container" ref={landingContainerRef} >
            <div className="landing-box parent">
                <div className="div1 center">
                    <img src="/fav2.png" alt="logo" className="logo" />
                </div>
                <div className="div4 center">
                    <a href="https://twitter.com/racheldarcy365" target={"_blank"} ref={twitterRef}
                        onMouseEnter={() => handleMouseEnter("FOLLOW", twitterRef)}
                        onMouseLeave={() => handleMouseLeave("Twitter", twitterRef)}>Twitter</a>
                </div>
                <div className="div3 center">
                    <a href="https://github.com/laMuJer" target={"_blank"} ref={gitRef}
                        onMouseEnter={() => handleMouseEnter("FOLLOW", gitRef)}
                        onMouseLeave={() => handleMouseLeave("Github", gitRef)}>Github</a>
                </div>
                <div className="div2 center">
                    <a href="https://www.facebook.com/staphy.staphy.9?mibextid=ZbWKwL" target={"_blank"} ref={fbRef}
                        onMouseEnter={() => handleMouseEnter("ADD FRIEND", fbRef)}
                        onMouseLeave={() => handleMouseLeave("Facebook", fbRef)}>Facebook</a>
                </div>
                <div className="div5 center">
                    <p style={{ color: "#e0aaff" }} className="about" ref={aboutRef}
                        onMouseEnter={() => handleMouseEnter("Credit", aboutRef)}
                        onMouseLeave={() => handleMouseLeave("ABOUT", aboutRef)}
                        onClick={() => setPopup(pre => !pre)}
                    >ABOUT</p>
                </div>
                <div className="div6 center">
                    <p style={{ fontSize: ".5rem", color: "#e0aaff" }} >
                        Turn on Volume
                    </p>
                </div>
                <div className="div7 center">
                    <p style={{ fontSize: ".5rem", color: "#e0aaff" }} id={'dance'} >Today Science Fiction is Tommorw's Science Fact</p>
                </div>
                <div className="div8 " >
                    <p className="drag"  >DRAG_ and ROTATE_</p>
                </div>
                <div className="div9">
                    <div className="popup-box" style={{ display: popup ? "block" : "none" }}>
                        <span>- It's about MODEL ANIMATION</span>
                        <span >Credits 💚💚💚</span>
                        <span>- Crystals Model by
                            <a href="https://sketchfab.com/ani111">  <span>&nbsp; AnixMoon</span></a>
                        </span>
                        <span>- Character Model by
                            <a href="https://sketchfab.com/patrickzuber848">  <span>&nbsp; Patrick</span> </a>
                        </span>
                        <span >Special Thanks 💚💚💚</span>
                        <span>- ThreeJs Journey by
                            <a href="https://threejs-journey.com">  <span>&nbsp; Bruno Simon</span></a>
                        </span>
                        <span>- Tutorial by
                            <a href="https://www.youtube.com/watch?v=mdj7Z3PCxRg&ab_channel=WawaSensei">  <span>&nbsp; Wawa Sensei</span> </a>
                        </span>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default LandingSection
