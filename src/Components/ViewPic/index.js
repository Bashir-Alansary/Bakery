import {ViewpicSection, Img} from "./style";
import "./style.css";
import { animated, useSpring } from "react-spring";
const Viewpic = (props) => {
    const animation = useSpring({
        config: {
            duration: 250
        },
        opacity: props.showPic? '1' : '0',
        transform: props.showPic? 'translateY(0%)' : 'translateY(-100%)'
    })
    return(
        <>
            {props.showPic?
                <ViewpicSection onClick={()=>{props.handleShow()}}>
                    <animated.div style={animation} className="view-content">
                        <Img src= "images/s6.jpg"/>
                    </animated.div>
                </ViewpicSection>
            : null}
        </>
    )
}
export default Viewpic;