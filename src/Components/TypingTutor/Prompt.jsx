export function Prompt({typed, underlined, remaining}){

    const styles = {

        pointer: {
            textDecoration: "underline"
        },

        phrase: {
            padding: "16px",
            fontFamily: "monospace",
            fontWeight: "700",
            fontSize:"5em",
            textAlign: "center",
            color: "black"//"#0a307c80",
        },

        typedPhrase: {
            color: "white",
        },
        
        remainingPhrase: {
            color: "#0a307c80",
        },
        
        active: {
            boxShadow: "0 1px #0006",
            transform: "translateY(6px)"
        },
    }

    let p = styles.phrase;
    let typedPhrase = styles.typedPhrase;
    let underline = styles.pointer;
    let remainingPhrase = styles.remainingPhrase;

    /*

    */

    return(
        <div className="phrase" style={p}>
            <span style={typedPhrase}>{typed}</span>
            <span style={underline}>{underlined}</span>
            <span style={remainingPhrase}>{remaining}</span>
        </div>
    )
}