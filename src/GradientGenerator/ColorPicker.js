import react from "react";

export default function ColorPicker(props) {

    const handleChangeBP = e => {
        props.setBreakpoint(e.target.value);
    }

    const handleChangeColor = e => {
        props.setColor(e.target.value);
    }

    return(
        <div className="picker">
            <label>Breakpoint</label>
            <input type='number' value={props.breakpoint} onChange={handleChangeBP} min="0" max="100" />
            <label>Color</label>
            <input type='color' value={props.color} onChange={handleChangeColor} />
        </div>
    )
}