import React from 'react';

function GenerateBoard(props) {

    return props.field.map((place, index) => (
        <li key={place.placeId} onClick={() => props.action(place.placeId, 1)}
            className={boardClassBuilder(place.placeId)}
            id={place.placeId}>{playerIcons(place.player)}</li>
    ));
}

function playerIcons(player){
    switch(player) {
        case 0:
        case "0":
            return "X";
        case 1:
        case "1":
            return "O";
        default:
            return " ";
    }

}

function boardClassBuilder(placeId) {
    let classname = 'board ';
    if(placeId.substring(2,3) === "1"){
        classname = `${classname} left`
    }
    if(placeId.substring(2,3) === "3"){
        classname = `${classname} right`
    }
    if(placeId.substring(0,1) === "2"){
        classname = `${classname} middle`
    }
    return classname
}

export default GenerateBoard