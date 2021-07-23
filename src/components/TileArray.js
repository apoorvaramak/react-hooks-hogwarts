import Tile from "./Tile.js"

function TileArray({hogs}){
    const hogArray = hogs.map((element) => 
        <Tile key = {element.name} name = {element.name} image = {element.image} specialty = {element.specialty} weight = {element.weight} greased = {element.greased} highestMedalAchieved = {element['highest medal achieved']}/>
    )

    return hogArray; 
}

export default TileArray;
