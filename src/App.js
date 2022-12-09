import './App.css';
import Image from "./Components/Image"
import React from "react"
import data from "./data.js"
import Header from "./Components/Header"
import Timer from "./Components/Timer"

function App() {

  const [ spotlight, setSpotlight] = React.useState(
    {x: 0, y: 0, picked: false})

  const [ characters, setCharacters ] = React.useState(
    {waldo: 1, odlaw: 1, wizard: 1}
  )

  const [ level, setLevel ] = React.useState(0)





  React.useEffect( () => {
    const waldoX = data[level].waldo.x
    const waldoY = data[level].waldo.y
    if((spotlight.y >= waldoY-15 && spotlight.y <= waldoY+15) && (spotlight.x >= waldoX-15 && spotlight.x <= waldoX)){
      setCharacters( prevCharacters => {
        return {...prevCharacters, waldo:0}
      })
    }

  }, [spotlight])



  React.useEffect ( () => {
    if(level === 0){
      setCharacters({waldo: 1, odlaw: 0, wizard: 0})
    }
    console.log(characters)
  }, [level])
  

  function handleClick(event){
    setSpotlight(prevSpotlight => {
      return {...prevSpotlight, x: event.pageX-9, y:event.pageY-6, picked: true}


    })
    console.log(spotlight)
    console.log(event)
  }

  const styles = {
    display: spotlight.picked ? 'block' : 'none',
    position: "absolute",
    left: spotlight.x,
    top: spotlight.y,
  }

  return (
    <div className="App">
      <div className="location" style={styles}></div>
      <Header checkLevel = {level} checkCharacters = {characters}/>
      <Image handleClick = {handleClick}/>
    </div>
  );
}

export default App;
