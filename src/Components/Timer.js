import React from "react"

export default function Timer(props){

    const [seconds, setSeconds] = React.useState(0)
    const [minutes, setMinutes] = React.useState(0)
    const [hours, setHours] = React.useState(0)

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

    // React.useEffect( () => {
    //     const interval = setInterval( () => {
    //         setSeconds(prevSeconds => {
    //             if(prevSeconds < 5){
    //                 return prevSeconds + 1
    //             }else{
    //                 setMinutes(prevMinutes => {
    //                     setSeconds(0)
    //                     if(prevMinutes < 5){
    //                         return prevMinutes + 1
    //                     }else{
    //                         setHours(prevHours => {
    //                             return prevHours + 1
    //                         })
    //                     }
    //                 })
    //             }})



    //     }, 1000);
    //     return () => clearInterval(interval)
    // })


    React.useEffect( () => {
        const interval = setInterval(() => getSeconds(), 1000);
        return () => clearInterval(interval);
    }, [])

    React.useEffect( () => {
        const interval = setInterval ( () => getMinutes(), 60000);
        return () => clearInterval(interval);
    }, [])

    React.useEffect( () => {
        const interval = setInterval ( () => getHours(), 3600000);
        return () => clearInterval(interval);
    }, [])


    return (
        <div className="timer-container">
            <h2>{hours < 10 ? '0' : null}{hours}:{minutes < 10 ? '0' : null}{minutes}:{seconds < 10 ? '0' : null}{seconds}</h2>
        </div>
    )
}