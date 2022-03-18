export default function RotationPicker(props) {

    const handleChange = e => {
        props.setRotate(e.target.value);
    }

    return (
        <div>
            <label>Rotation</label>
            <input type='range' value={props.rotate} onChange={handleChange} />
        </div>
    )
}