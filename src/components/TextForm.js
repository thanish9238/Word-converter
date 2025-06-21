import React,{useState} from 'react'
 

export default function TextForm(props) {
    const handleUpClick = ()=>{
        // console.log('uppercase was clicked'+text);
        let newText=text.toUpperCase();
        setText(newText);
        props.showAlert("Converted to Uppercase!","success")
    }
    const handleLoClick = ()=>{
        // console.log('uppercase was clicked'+text);
        let newText=text.toLowerCase();
        setText(newText);
        props.showAlert("Converted to Lowercase!","success")


    }
     const handleLoClear = ()=>{
        // console.log('uppercase was clicked'+text);
        let newText=('');
        setText(newText);
        props.showAlert("Cleared the text!","success")

    }


    const handleOnChange = (event) =>{
        setText(event.target.value);

    }

    const [text,setText] = useState('');
    return (
        <> 
        <div className="container" style={{color:props.mode==="dark"?"white":"black"}}>
            <h1> {props.heading}</h1>
            <div className="mb-3">
                 <textarea className="form-control" value={text} onChange={handleOnChange} style={{backgroundColor:props.mode==="dark"?"#353535":"white",color:props.mode==="dark"?"white":"black"}} id="myBox" rows="8"></textarea>
            </div>
            <button disabled={text.length===0} className="btn btn-primary mx-1 my-1" onClick={handleUpClick}>Convert to Uppercase</button>
            <button disabled={text.length===0} className="btn btn-primary mx-1 my-1" onClick={handleLoClick}>Convert to Lowercase</button>
            <button disabled={text.length===0} className="btn btn-primary mx-1 my-1" onClick={handleLoClear}>Clear Text</button>

        </div>
        <div className="container my-3"style={{color:props.mode==="dark"?"white":"black"}}>
            <h2> Your text here</h2>
            <p>{text.split(" ").filter((element)=>{return element.length!==0}).length} words and {text.length} characters</p>
        </div>
        </>
    )   
}
