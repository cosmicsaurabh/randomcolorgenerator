import { useState } from "react";
import "./styles.css"
export default function RandomColor() {
    const [typeOfColor, setTypeOfColor] = useState("hex");
    const [color, setColor] = useState("#a0a0a0");
    const [lastHexColor, setLastHexColor] = useState("#a0a0a0");
    const [lastRGBColor, setLastRGBColor] = useState("rgb(160,160,160)");

    function randomColorUtility(length) {
        return Math.floor(Math.random() * length);
    }
    function handleCreateRandomHexColor() {
        const hex = [1, 2, 3, 4, 5, 6, 7, 8, 9, "A", "B", "C", "D", "E", "F"];
        let hexColor = "#";
        let i = 0;
        for (i = 0; i < 6; i++) {
            hexColor += hex[randomColorUtility(hex.length)]
        }
        setColor(hexColor);
        setLastHexColor(hexColor);
    }
    function handleCreateRandomRGBColor() {
        const r = randomColorUtility(256);
        const g = randomColorUtility(256);
        const b = randomColorUtility(256);
        const rgbColor = `rgb(${r},${g}, ${b})`;
        setColor(rgbColor);
        setLastRGBColor(rgbColor);

    }
    return (
        <div
            style={{
                background: typeOfColor === "rgb" ? lastRGBColor : lastHexColor
            }}
        >

            <div className="randomcolorbutton" >
                <button style={{
                    
                    background: typeOfColor === "rgb" ? lastRGBColor : lastHexColor
                }} className="randomcolorindbutton" onClick={() => setTypeOfColor("hex")}>Create Hex Color</button>
                <button style={{

                    background: typeOfColor === "rgb" ? lastRGBColor : lastHexColor
                }} className="randomcolorindbutton" onClick={typeOfColor === "hex" ? handleCreateRandomHexColor : handleCreateRandomRGBColor}
                >Generate Random Color</button>
                <button style={{

                    background: typeOfColor === "rgb" ? lastRGBColor : lastHexColor,
                }} className="randomcolorindbutton" onClick={() => setTypeOfColor("rgb")}>Create RGB Color</button>
            </div>
            <div className="randomcolorLabel">
                <h3 className="randomcolorh3">{typeOfColor === "rgb" ? "RGB Color" : "Hex Color"}</h3>
                <h1>{typeOfColor === "rgb" ? lastRGBColor : lastHexColor}</h1>
            </div>
        </div>
    )
}