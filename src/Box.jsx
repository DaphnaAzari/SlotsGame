import { useState } from "react";
import "./Box.css"

function randChoise(arr) {
    const colInd = Math.floor(Math.random() * arr.length);
    return arr[colInd];
}
export default function Box({ colors }) {
    const [color, setColor] = useState(randChoise(colors));
    const changeColor = () => {
        const randomColor = randChoise(colors);
        setColor(randomColor);
    };
    return (
        <div
            className="Box"
            onClick={changeColor}
            style={{ backgroundColor: color }}
        ></div>

    );

}