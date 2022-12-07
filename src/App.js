import './App.css';
import Image from "./Components/Image"
import React from "react"

function App() {

  const [ spotlight, setSpotlight] = React.useState(
    {x: 0, y: 0, picked: false})

  function handleClick(event){
    setSpotlight(prevSpotlight => {
      return {...prevSpotlight, x: event.pageX - 15, y:event.pageY - 15, picked: true}
    })
    console.log(event)
    // return (
    //   <div className="location"></div>
    // )
  }

  const styles = {
    display: spotlight.picked ? 'block' : 'none',
    position: "absolute",
    top: spotlight.y,
    left: spotlight.x
  }

  return (
    <div className="App">
      <Image handleClick = {handleClick} style = {styles}/>
    </div>
  );
}

export default App;
