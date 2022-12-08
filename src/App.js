import './App.css';
import Image from "./Components/Image"
import React from "react"
import data from "./data.js"

function App() {

  const [ spotlight, setSpotlight] = React.useState(
    {x: 0, y: 0, picked: true})

  const [ level, setLevel ] = React.useState(0)

  // function levelUp () {

  //   const waldoX = data[level].waldo.x
  //   const waldoY = data[level].waldo.y

  //   console.log(spotlight.y)
  //   console.log(waldoY)



  //   if((spotlight.y >= waldoY-15 && spotlight.y <= waldoY+15) && (spotlight.x >= waldoX-15 && spotlight.x <= waldoX+15)){
  //     console.log('works')

  //   }


  // }

  React.useEffect( () => {
    const waldoX = data[level].waldo.x
    const waldoY = data[level].waldo.y
    if((spotlight.y >= waldoY-15 && spotlight.y <= waldoY+15) && (spotlight.x >= waldoX-15 && spotlight.x <= waldoX+15)){
      console.log('works')

    }
  })
  

  function handleClick(event){
    setSpotlight(prevSpotlight => {
      return {...prevSpotlight, x: event.pageX - 15, y:event.pageY - 15, picked: true}

    })


  }

  const styles = {
    // display: spotlight.picked ? 'block' : 'none',
    position: "absolute",
    left: spotlight.x,
    top: spotlight.y
  }

  return (
    <div className="App">
      <Image handleClick = {handleClick} style = {styles}/>
    </div>
  );
}

export default App;
