import React from "react"

export default function Timer(props){

    const [seconds, setSeconds] = React.useState(0)
    const [minutes, setMinutes] = React.useState(0)
    const [hours, setHours] = React.useState(0) 
    const {waldo, odlaw, wizard } = props.checkCharacters

    function getSeconds(){
            setSeconds(prevSeconds => {
                if(prevSeconds < 59){
                    return prevSeconds + 1
                }else{
                        setSeconds(0)
                }})

    }

    function getMinutes () {
        setMinutes (prevMinutes => {
            if(prevMinutes < 59){
                return prevMinutes + 1
            }else{
                setMinutes(0)
            }
        })
    }

    
    function getHours () {
        setHours (prevHours => {
                return prevHours + 1
        })
    }


    React.useEffect( () => {

        const intervalSec = setInterval(() => {
            getSeconds()
        }, 1000);


        const intervalMin = setInterval ( () => getMinutes(), 60000 )

        const intervalHr = setInterval ( () => getHours(), 3600000)

        if(waldo === 0 && odlaw === 0 & wizard === 0 ){
             clearInterval(intervalSec)
             clearInterval (intervalMin)
             clearInterval (intervalHr)
        }
        return () => {
            clearInterval(intervalSec);
            clearInterval (intervalMin)
            clearInterval (intervalHr)
        }
    })






    return (
        <div className="timer-container">
            <h2>{hours < 10 ? '0' : null}{hours}:{minutes < 10 ? '0' : null}{minutes}:{seconds < 10 ? '0' : null}{seconds}</h2>
        </div>
    )
}