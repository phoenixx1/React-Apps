import "./App.css";
import axios from "axios";
import { useState } from "react";

function App() {
  const [selectedFile, setSelectedFile] = useState(null);

  const onChangeHandler = (e) => {
    setSelectedFile(e.target.files[0]);
  };

  const callcpp = () => {
    const data = new FormData();
    data.append("file", selectedFile);

    axios.post("http://localhost:5000/call", data, {}).then((res) => {
      console.log(res);
    });
  };

  return (
    <div className="App">
      <input
        type="file"
        className="form-control"
        // Used to reference the form-data after submitting the form
        name="file"
        // Using this onChange function it sends a request to the server.
        onChange={onChangeHandler}
      />
      <button onClick={callcpp}>Send</button>
    </div>
  );
}

export default App;
