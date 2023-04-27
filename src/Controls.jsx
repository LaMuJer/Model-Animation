import { useCharacterAnimation } from "./CharacterAnimation"

const Controls = () => {

    const { animations, animationIndex, setAnimations, setAnimationIndex } = useCharacterAnimation()

    return (
        <div className="controls-container">
            <div className="controls-box">
                {
                    animations.map((animation, index) => (
                        <button key={animation}
                            style={{
                                background: index === animationIndex ? "#d1105a" : "none"
                            }}
                            onClick={() => setAnimationIndex(index)}
                        >{animation}</button>
                    ))
                }
            </div>
        </div>
    )
}

export default Controls
