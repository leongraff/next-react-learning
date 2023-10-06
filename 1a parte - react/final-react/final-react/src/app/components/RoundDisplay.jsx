export default function RoundDisplay(props) {


    return (
        <div style={{
            backgroundColor: "white",
            display: "flex",
            justifyItems: "center",
            justifyContent: "center",
            alignItems: "center",
            fontSize: "24px",
            color: "black",
            fontWeight: "bold",
            borderRadius: "100px",
            width: "55px",
            height: "55px",
            padding: "4px",
            margin: "4px",
        }}>
            {props.numero}
        </div>
    );
}