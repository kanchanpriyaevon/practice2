import React , {useState} from 'react';

export default function TextForm(props) {

    const handleesClick = () => {
        let newText = text.split(/[ ]+/);
        setText(newText.join(" "));
        props.showAlert('Remove Extra space successfully','success')
        
    }
    const handleClear = () => {
        setText("");
        props.showAlert('Clear successfully','success')
    }
    const handlecopyClick = () => {
        let copyText = document.getElementById("myBox");
        copyText.select();
        navigator.clipboard.writeText(copyText.value);
        props.showAlert('Copied successfully','success')
    }
    const handleLcClick = () => {
        let lowerText = text.toLocaleLowerCase();
        setText(lowerText);
        props.showAlert('lowercase converted succesfully','success')
    }
    const handleUcClick = () =>{
        let newText = text.toUpperCase();
        setText(newText);
        props.showAlert('uppercase converted successfully','success')
    }
    const handleOnChange = (event) => {
        setText(event.target.value)
    }
   const [text, setText] = useState("");

   if(props.theme ==='green'){
    console.log('ads');
    var custom = 'green-theme';
} else if(props.theme ==='red'){
     custom = 'red-theme';

} else if(props.theme ==='blue'){
     custom = 'blue-theme';
} else if(props.theme ==='purple'){
     custom = 'purple-theme';
} else if(props.theme ==='yellow'){
     custom = 'yellow-theme';
} 
 
  return (
    <>
        <div className="container">
            <h1>{props.heading}</h1>
            <div className="mb-3">
                <textarea className="form-control" style={{backgroundColor:props.mode === 'light'?'white':'black',color:props.mode === 'light'?'black':'white'}} value={text} id="myBox" onChange={handleOnChange} rows="8"></textarea>
            </div>
            <button className={`btn btn-primary ${custom} mx-1`} onClick ={handleUcClick}>Convert to Uppercase</button>
            <button className={`btn btn-primary ${custom} mx-1`} onClick={handleLcClick}>Convert to Lowercase</button>

            <button className={`btn btn-primary ${custom} mx-1`} onClick={handlecopyClick}>Copy Text</button>

            <button className={`btn btn-primary ${custom} mx-1`} onClick={handleesClick}>Remove extra Space</button>

            <button className={`btn btn-primary ${custom} mx-1`} onClick={handleClear}>Clear</button>
            
        </div>
        <div className="container my-4">
            <h2>Text Summary</h2>
            <p>{text.split(" ").length} words and {text.length} charecters</p>
            <p>{0.008 * text.split(" ").length} Minutes Read</p>
            <h2>Preview</h2>
            <p>{text=== ''?'Enter something in the textarea to preview here...':text}</p>

        </div>
    </>
    
    
  )
}
