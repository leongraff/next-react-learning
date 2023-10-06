export default function Testezera(props) {
    return (
        <div>
            <h1 style={{
                backgroundColor: props.numero >= 1 ? "#2D2" : "#D22",
                color: "black",
                fontWeight: "700",
                textAlign: props.direita ? "right" : "left"
            }}>
                Texto
            </h1>
        </div >
    )
}