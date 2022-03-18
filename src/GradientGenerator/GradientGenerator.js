import react, {useEffect, useState} from "react";
import ColorPicker from "./ColorPicker";
import RotationPicker from "./RotationPicker";
import "./GradientGenerator.css";

export default function GradientGenerator() {

    const [color1, setColor1] = useState("#FF0000");
    const [breakpoint1, setBreakpoint1] = useState(0);
    const [color2, setColor2] = useState("#00FF00");
    const [breakpoint2, setBreakpoint2] = useState(50);
    const [color3, setColor3] = useState("#0000FF");
    const [breakpoint3, setBreakpoint3] = useState(100);
    const [rotate, setRotate] = useState(50);

    var test = "linear-gradient(" + rotate / 100 + "turn, " + color1 + " " + breakpoint1 + "%, " + color2 + " " + breakpoint2 + "%, " + color3 + " " + breakpoint3 + "%)";
    console.log(test);

    return (
        <div className="gradient-generator-container">
            <div className="pickers-container">
                <ColorPicker color={color1} setColor={setColor1} breakpoint={breakpoint1} setBreakpoint={setBreakpoint1}/>
                <ColorPicker color={color2} setColor={setColor2} breakpoint={breakpoint2} setBreakpoint={setBreakpoint2}/>
                <ColorPicker color={color3} setColor={setColor3} breakpoint={breakpoint3} setBreakpoint={setBreakpoint3}/>
                <RotationPicker rotate={rotate} setRotate={setRotate}/>
            </div>
            <div style={{background: test}} className="done-css">
                <p>background: linear-gradient({rotate / 100}turn, {color1} {breakpoint1}%, {color2} {breakpoint2}%, {color3} {breakpoint3}%);</p>
            </div>
        </div>
    )
}