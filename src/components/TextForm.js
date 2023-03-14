import React, {useState} from 'react'

export default function TextForm(props) {
    const speak = () => {
        let msg = new SpeechSynthesisUtterance();
        msg.text = text;
        window.speechSynthesis.speak(msg);
    }



    const handleUpCase = ()=>{
        // console.log("upper case is clicked");
        let newText = text.toUpperCase();
        setText(newText);
        props.showAlert('Text made to Uppercase','success')
    }
    const handleLowCase = ()=>{
        // console.log("upper case is clicked");
        let newText = text.toLowerCase();
        setText(newText);
        props.showAlert('Text made to Lowercase','success')

    }
    const clearText = ()=>{
        // console.log("upper case is clicked");
        let newText = ' ';
        setText(newText);
        props.showAlert('Text has been cleared','success')

    }
    const onChange = (event)=>{
        // console.log("Changed");
        setText(event.target.value)
        const words = event.target.value.trim();
        const numwords = words.match(/\S+/g);
        const numWords1 = numwords ? numwords.length : 0;
        setWordCount(numWords1);
    }
    const [text, setText] = useState('Enter Your text here');   
    const [wordCount, setWordCount] = useState(0);
 
    return (
        <>
        <h2 style={{color : props.mode === 'dark'?'white':'black'}}>{props.heading}</h2>
        <div className="mb-3">
            <textarea className="form-control" value={text} onChange={onChange} style={{backgroundColor : props.mode === 'dark'?'black':'white', color : props.mode === 'dark'?'white':'black'}}  id="myBox" rows="6"></textarea>
        </div>
        <button className="btn btn-primary mx-2" onClick={handleUpCase}>Convert to uppercase</button>
        <button className="btn btn-primary mx-2" onClick={handleLowCase}>Convert to lowercase</button>
        <button className="btn btn-primary mx-2" onClick={clearText}>Clear Text</button>
        <button type="submit" onClick={speak} className="btn btn-warning mx-2 my-2">Speak</button>

      

        <div className='container' style={{color : props.mode === 'dark'?'white':'black'}}>
        <h1 className="my-4">Your summary</h1>
        <p>{wordCount} words, {text.length} charcters</p>
        <p>{0.025 * text.split(" ").length } per minute</p>
        <h2>Preview</h2>
        <p>{text}</p>

        
        </div>
        </>
    )
    }



    
      