export default function Lista(props) {

    if (props.teste % 2 === 0) {
        return (
            <div style={{ backgroundColor: "grey", display: "flex", padding: "10px", flexDirection: "column" }}>
                {props.children}
            </div>

        )
    } else {
        null
    }
}