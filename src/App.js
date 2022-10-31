import './App.css';
import React, { useEffect, useState } from "react";

function App() {

  const [selectedFile, setSelectedFile] = useState('');

  useEffect( ()=>{
    console.log(selectedFile);
  }, [selectedFile])
  
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
