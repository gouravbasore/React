import React, { useState } from 'react';

export default function TextForm(props) {
    const handleUpClick = ()=>{
        // console.log("Uppercase was clicked:" + text);
        let newText = text.toUpperCase();
        setText(newText);
    }
    const handleLoClick = ()=>{
        // console.log("Uppercase was clicked:" + text);
        let newText = text.toLowerCase();
        setText(newText);
    }
    const handleClearClick = ()=>{
        let newText = ' ';
        setText(newText);
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
        <textarea className="form-control" id="myBox" style={{backgroundColor: props.mode === 'dark'?'grey':'white', color:props.mode === 'dark'?'white':'#042743' }} value={text} placeholder="Enter text here" onChange={handleOnChange} rows="8"></textarea>
      </div>
      <button type="button" className="btn btn-primary mx-2" onClick={handleUpClick} >Convert to Uppercase</button>
      <button type="button" className="btn btn-primary mx-2" onClick={handleLoClick} >Convert to Lowercase</button>
      <button type="button" className="btn btn-primary mx-2" onClick={handleClearClick} >Clear Text</button>
    </div>
    <div className="container my-4" style={{color: props.mode === 'dark'?'white':'#042743'}}>
    <h1>Your text summary</h1>
    <p>{text.split(" ").length} words and {text.length} characters</p>
    <p>{0.008 * text.split(" ").length} Minutes read</p>
    <h2>Preview</h2>
    <p>{text.length>0?text:"Enter something in the textbox to preview it here"}</p>
    </div>
      </>
  );
}
