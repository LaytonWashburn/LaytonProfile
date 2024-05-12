import "../../www/Tutor.css"

export function Keyrow({range, underlined, keys, shift}){
    let styles = {
        key: {
            display: "flex",
            justifyContent: "center",
            alignItems: "center",
            color: "white",
            fontSize: "1.2em",
            padding: "10px",
            width: "30px",
            height: "30px",
            borderRadius: "5px",
            backgroundColor: "black",
            boxShadow: "0 4px 0 2px #0006",
            transition: "all .05s ease",
        },

        active: {
            boxShadow: "0 4px 0 2px #ff0000b3",
        },

        pressed: {
            transform:"translateY(6px)"
        },
    }
    
    function pressedKey(key, underlined, keys){
        if(key == underlined){
            return {...styles.key, ...styles.active};
        }
        if(key=='space'){
            return {...styles.spacebar};
        }
        if(keys.includes(key)){
            return {...styles.key, ...styles.pressed};
        }
        if(underlined == ' ' && key=='space'){
            return{...styles.spacebar, ...styles.active};
        }
        else {
            return styles.key;
        }
    }

    function pressShift(underline){
        if("~!@#$%^&*()_+QWERTYUIOP{}|ASDFGHJKL:\"ZXCVBNM<>\?".includes(underline) && !shift){
            return {...styles.shift, ...styles.active};
        }
        else if(!"~!@#$%^&*()_+QWERTYUIOP{}|ASDFGHJKL:\"ZXCVBNM<>\?".includes(underline) && shift){
            return {...styles.shift};
        }
        else {
            return {...styles.shift , boxShadow: "0 4px 0 2px #0006"};
        }
    }

    

    return (
        <div className="keyrow">
            {shift}
          {
                range.map((key) => {
                    return(
                        <span className="key" key={key} style={pressedKey(key, underlined, keys)}>
                            {key}
                        </span>
                    )
                })
            }
            {shift}
        </div>
    )
}