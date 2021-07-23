import {useState} from 'react'

function Tile({name, image, specialty, weight, greased, highestMedalAchieved}){
    const [isClicked, setIsClicked] = useState(false)
    function tileClicked(){
        //console.log("clicked")
        setIsClicked(isClicked => !isClicked);
    }
    function DisplayInfo(){
        return(
            <div>
                <p>{specialty}</p>
                <p>{weight}</p>
                <p>greased: {greased.toString()}</p>
                <p>highest medal achived : {highestMedalAchieved}</p>
            </div>
        )
    }
    return (
        <div onClick = {tileClicked}>
            <h2>{name}</h2>
            <img src = {image} alt = "image"></img>
            {isClicked ?  <DisplayInfo/> : ""}
        </div>
    )
}

export default Tile;