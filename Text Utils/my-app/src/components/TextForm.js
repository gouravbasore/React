import React, { useState } from 'react';

export default function TextForm(props) {
    const handleUpClick = ()=>{
        let newText = text.toUpperCase();
        setText(newText);
        props.showAlert("Converted to uppercase!", "success");
    }
    const handleLoClick = ()=>{
        let newText = text.toLowerCase();
        setText(newText);
        props.showAlert("Converted to lowercase!", "success");

    }
    const handleClearClick = ()=>{
        let newText = ' ';
        setText(newText);
        props.showAlert("Text Cleared!", "success");

    }
    const handleOnChange = (event)=>{
        // console.log("On change");
        setText(event.target.value);
    }
    const [text, setText] = useState('');
  return (
      <>
    <div className = "container" style={{color: props.mode === 'dark'?'white':'#042743'}}>
        <h1>{props.heading}</h1>
      <div className="mb-3">
          {/* i used {{}} twice for object (one for to write javascript and second for inside object in javascript)*/}
        <textarea className="form-control" id="myBox" style={{backgroundColor: props.mode === 'dark'?'#13466e':'white', color:props.mode === 'dark'?'white':'#042743' }} value={text} placeholder="Enter text here" onChange={handleOnChange} rows="8"></textarea>
      </div>
      <button type="button" className="btn btn-primary mx-2 my-1" onClick={handleUpClick} >Convert to Uppercase</button>
      <button type="button" className="btn btn-primary mx-2 my-1" onClick={handleLoClick} >Convert to Lowercase</button>
      <button type="button" className="btn btn-primary mx-2 my-1" onClick={handleClearClick} >Clear Text</button>
    </div>
    <div className="container my-4" style={{color: props.mode === 'dark'?'white':'#042743'}}>
    <h1>Your text summary</h1>
    <p>{text.split(" ").filter((element)=>{return element.length!==0}).length} words and {text.length} characters</p>
    <p>{0.008 * text.split(" ").filter((element)=>{return element.length!==0}).length} Minutes read</p>
    <h2>Preview</h2>
    <p>{text.length>0?text:"Nothing to preview"}</p>
    </div>
      </>
  );
}
