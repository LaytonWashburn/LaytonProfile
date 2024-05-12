export function Keyboard({keyboard, underlined, keys, shift}){

    let keysArray = [];

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

        spacebar:{
            width: "400px",
            height: "30px",
            padding: "10px",
            outline: "solid black",
            backgroundColor: "black",
            borderRadius: "5px",
            boxShadow: "0 4px 0 2px #0006",
        },

        shift : {
            color: "white",
            fontSize: "1.2em",
            padding: "10px",
            width: "80px",
            height: "30px",
            textAlign: "center",
            borderRadius: "5px",
            backgroundColor: "black",
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

    function pressSpace(){
        console.log(keys);
        if(underlined == ' '){
            return {...styles.spacebar, ...styles.active};
        } else if(keys.includes(' ')){
            return {...styles.spacebar, ...styles.pressed};
        }
        else {
            return {...styles.spacebar}
        }
    }


    for(let i = 0; i < keyboard.length; i++){
        keysArray.push(keyboard[i]);
    }

    return(
        <div className="keyboard">
          <div className="keyrow">
          {
            keysArray.slice(0,13).map((key) => {
                    return(
                        <span className="key" key={key} style={pressedKey(key, underlined, keys)}>
                            {key}
                        </span>
                )
                })
            }
          </div>
            <div className="keyrow">
            {
                keysArray.slice(13,26).map((key) => {
                    return(
                        <span className="key" key={key} style={pressedKey(key, underlined, keys)}>
                            {key}
                        </span>
                    )
                })
            }
            </div>
            <div className="keyrow">
                <span> </span>
                {
                    keysArray.slice(26,37).map((key) => {
                        return(
                            <span className="key" key={key} style={pressedKey(key, underlined, keys)}>
                                {key}
                            </span>
                        )
                    })
                }
                <span> </span>

            </div>
            <div className="keyrow">
                <span className="shift" style={pressShift(underlined)}>Shift</span>
            {
                keysArray.slice(37,48).map((key) => {
                    return(
                        <span className="key" key={key} style={pressedKey(key, underlined, keys)}>
                            {key}
                        </span>
                    )
                })
            }
            <span className="shift" style={pressShift(underlined)}>Shift</span>
            </div>
            <div className="keyrow">
                <span className="spacebar" key="space" style={pressSpace()}>  
                    <br className="spacebar"></br>            
                </span>
            </div>
        </div>
    )
}