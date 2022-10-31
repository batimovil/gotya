import './App.css';
import React, { useEffect, useState } from "react";


function App() {
  let Ableton = require('ableton');
  const [selectedFile, setSelectedFile] = useState('');
  

  useEffect( ()=>{
    console.log(selectedFile);
    if(selectedFile){
      let ableton = new Ableton(selectedFile);
      console.log(ableton);
    }
  }, [selectedFile, Ableton])
  
  return (
    <div className="App">
      <header className="App-header">
        <input 
        type="file"
        value={""}
        onChange={(e) => setSelectedFile(e.target.files[0])}/>
      </header>
    </div>
  );
}

export default App;
