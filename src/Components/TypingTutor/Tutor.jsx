import { Prompt } from './Prompt';
import { Keyboard } from './Keyboard';
import { useState } from 'react';
import { useEffect } from 'react';
import "../../styles/Tutor.css"


export function Tutor(){

    const sentence = ["The dog ran down the sidewalk and jumped across the street." ,
                    "The quick brown fox jumps over the lazy dog. This is a classic pangram.",
                    "JavaScript is a versatile and widely used programming language for web development.", 
                    "Coding is both a practical skill and a creative outlet for building innovative solutions.",
                    "Practice makes progress. Consistent effort is key to mastering any skill.", 
                    "Type your way to success! Improving typing speed and accuracy can boost productivity.",
                    "Programming languages like JavaScript, Python, and Java power the digital world.", 
                    "Web development involves creating websites and web applications for various purposes.",
                    "Debugging is a valuable skill for identifying and fixing issues in your code.", 
                    "Continuous learning is essential in the ever-evolving field of technology."
                    ]

    // Creating lowercase and uppercase versions of the keyboard as a string                    
    const lowercase = "`1234567890-=qwertyuiop[]\\asdfghjkl;'zxcvbnm,./";
    const uppercase = "~!@#$%^&*()_+QWERTYUIOP{}|ASDFGHJKL:\"ZXCVBNM<>\?";

    // Setting keyboard to be a default of lowercase
    const [keyboard, setKeyboard] = useState(lowercase);

    // Setting keys to be a default of an empty array
    const[keys, setKeys] = useState([]);
    
    // Setting phraseInd to be a default of 0
    const[phraseInd, setPhraseInd] = useState(0);

    //Setting typed to empty array
    const[typed, setTyped] = useState([]);

    // Setting underlined to the first character in the first prompt
    const[underlined, setUnderlined] = useState(sentence[0][0]);

    // Setting remaining to everything in the first prompt but the first character
    const[remaining, setRemaining] = useState(sentence[0].slice(1, sentence[0].length));


    const[shift, setShift] = useState(false);

    // Keydown
    useEffect(() => {
        function keydown(e) {
            if (e.repeat) return; // keydown event trigger rapidly if you hold the key, we only want to detect keydown once.
            if(e.key == "Shift"){
                setKeyboard(uppercase);
                setShift(true);
            } else{
                setShift(false);
                setKeys([...keys, e.key])
                // Check for chatacter limits 
                if(e.key == underlined){
                    setTyped([...typed, e.key]);
                    setRemaining(remaining.slice(1, remaining.length));
                    setUnderlined(remaining[0]);
                }
            
            }
        }

        window.addEventListener("keydown", keydown);

        return () => {
            window.removeEventListener("keydown", keydown);
        };
    });

    // Keyup
    useEffect(() => {
        function keyup(e) {
            if (e.repeat) return; // keydown event trigger rapidly if you hold the key, we only want to detect keydown once.
            if(e.key == "Shift"){
                setKeyboard(lowercase);
                setShift(false);
            } else{
                setShift(false);
                const newKeys = [...keys];
                newKeys.splice(newKeys.indexOf(e.key), 1);
                setKeys(newKeys);
            }
        }

        window.addEventListener("keyup", keyup);

        return () => {
            window.removeEventListener("keyup", keyup);
        };
    });

    // Move the prompt to the next or reset it
    useEffect(() => {
        if(typed.length == sentence[phraseInd].length){
            if(phraseInd == sentence.length-1){
                setPhraseInd(0);
                setTyped([]);
                setUnderlined(sentence[0][0]);
                setRemaining(sentence[0].slice(1, sentence[0].length))
            } else{
                setPhraseInd(phraseInd+1);
                setTyped([]);
                setUnderlined(sentence[phraseInd +1][0]);
                setRemaining(sentence[phraseInd + 1].slice(1, sentence[phraseInd+1].length))
            }
        }
    })


    return(
        <div className='maintutor'>
            <Prompt keys={keys} typed={typed} underlined={underlined} remaining={remaining}/>
            <Keyboard keyboard={keyboard} underlined={underlined} keys={keys} shift={shift}/>
        </div>
    )
}