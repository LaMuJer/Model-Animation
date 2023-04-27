import "./LandingSection.css"
import { TextPlugin } from 'gsap/all'
gsap.registerPlugin(TextPlugin)
import gsap from 'gsap'
import { useEffect, useRef } from "react"


const LandingSection = () => {
    const landingContainerRef = useRef()
    const landingContainerRefTl = useRef()

    // useEffect(() => {
    //     let ctx = gsap.context(() => {
    //         landingContainerRefTl.current = gsap.timeline()
    //             .to("a", {
    //                 duration: 2,
    //                 text: "Follow",
    //                 repeat: -1,
    //                 yoyo: true,
    //                 ease: "power2.inOut",
    //             })
    //     }, landingContainerRef)

    //     return () => ctx.revert()
    // }, [])

    // Link Hover Animation
    const twitterRef = useRef()
    const gitRef = useRef()
    const fbRef = useRef()

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
                    <a href="https://twitter.com/racheldarcy365" target={"_blank"} ref={gitRef}
                        onMouseEnter={() => handleMouseEnter("FOLLOW", gitRef)}
                        onMouseLeave={() => handleMouseLeave("Github", gitRef)}>Github</a>
                </div>
                <div className="div2 center">
                    <a href="https://twitter.com/racheldarcy365" target={"_blank"} ref={fbRef}
                        onMouseEnter={() => handleMouseEnter("ADD FRIEND", fbRef)}
                        onMouseLeave={() => handleMouseLeave("Facebook", fbRef)}>Facebook</a>
                </div>
                <div className="div5 center">
                    <p style={{ color: "#e0aaff" }}>About</p>
                </div>
                <div className="div6 center">
                    <p style={{ fontSize: ".5rem", color: "#e0aaff" }}>
                        Sound on
                    </p>
                </div>
                <div className="div7 center">
                    <p style={{ fontSize: ".5rem", color: "#e0aaff" }}>Today Science Fiction is Tommorw's Science Fact</p>
                </div>
            </div>
        </div>
    )
}

export default LandingSection
