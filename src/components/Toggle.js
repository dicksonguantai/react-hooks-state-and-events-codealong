import React ,{useState} from "react";

function Toggle() {
  const [status,setStatus] = useState("OFF");
  const color = status === "ON"? "red" :"white";

  return <button style ={{background: color}}onClick={() => status=== "ON"? setStatus("OFF"):setStatus("ON")}> {status}</button>;
}

export default Toggle;
