import React, {useState} from 'react'
// import validator from  'validator'



export default function Textform(props) {
  

  const handleUpClick = ()=>{
    let newText = text.toUpperCase();
    setText(newText)
    props.showAlert("Converted to Upper Case", "success");
  }

  const handleFUpClick = ()=>{
    let newText = text.slice(0,1).toUpperCase()+text.slice(1,text.length);
    setText(newText)
    props.showAlert("Converted to First Letter Upper Case", "success");
  }
  
  const handleLowClick = ()=>{
    let newText = text.toLowerCase();
    setText(newText)
    props.showAlert("Converted to Lower Case", "success");
  }

  const handleCopy = () => {
    var text = document.getElementById('textutilsAria');
    text.select();
    navigator.clipboard.writeText(text.value);
    document.getSelection().removeAllRanges();
    props.showAlert("Copied to Clipbord", "success");
    }

  const handleExtraSpaces = () => {
      let Ntext = text.split(/[ ]+/);
      setText(Ntext.join(" "))
      props.showAlert("Extra Space has been Removed ", "success");
  }

  const handleClear=()=>{
    let newText ="";
    setText(newText)
    props.showAlert("Text Cleared ", "success");
  }
       

  const handleOnChange = (event)=>{
    setText(event.target.value)
  }

  const [text, setText]= useState('');
    return (
  <>
    <div className="container" style={{color:props.mode === 'dark'?'white':'black'}}>
      <div className=" my-4">
        <div className="mb-3 my-2 ">
          <div className="row">
            <label label htmlFor="exampleFormControlTextarea1" className="form-labe"><h1>Text Utility</h1></label>
            <p className="col-sm-6"><b>{text.split(" ").filter((element)=>{return element.length!==0}).length}</b> Words and <b>{text.length}</b> characters</p>
            <p className="col-sm-6"><b>{0.008*text.split(" ").filter((element)=>{return element.length!==0}).length} </b>Minuts Read</p>
          </div>
            <textarea className="form-control" value={text} style={{color:props.mode === 'dark'?'white':'black', backgroundColor:props.mode === 'dark'?'#495057':'#e8edf3'}} onChange={handleOnChange} id="textutilsAria" rows="7" placeholder="Enter Text Here...."></textarea>
        
           
        <div className="my-2 col-sm-8">
          <button className="btn btn-info my-1" disabled={text.length===0} onClick={handleUpClick}>All Uppercase</button>
          <button className="btn btn-info mx-2 my-1" disabled={text.length===0} onClick={handleLowClick}>Lowercase</button>
          <button className="btn btn-info mx-2 my-1" disabled={text.length===0} onClick={handleExtraSpaces}>Remove Extra Spaces</button>
          <button className="btn btn-info mx-2 my-1" disabled={text.length===0} onClick={handleCopy}>Copy Text</button>
          
        </div>
        <div className=" col-sm-8">
          <button className="btn btn-info my-1" disabled={text.length===0} onClick={handleFUpClick}>First Letter Uppercase</button>  
           <button className="btn btn-info mx-2 my-1" disabled={text.length===0} onClick={handleClear}>Clear Text</button>
          
        </div>
        
        <div className=" my-2 ">
          <h1>Preview</h1>
          <p>{text.length>0?text:"Enter text in the textbox to preview it here....."}</p>
        </div>
      </div>
     
      </div>
    </div>
  </>
)
}
