import React from "react";

import { Circle, Ellipse } from 'react-shapes';
import arrowIcon from "./Resources/Blue-Up-Arrow.png"
import { useState } from "react";

function MainDiagram ({sendSchemaNumber, handleRenderChange}) {

    const [topCircleHovered, setTopCircleHovered] = useState(false)
    const [leftCircleHovered, setLeftCircleHovered] = useState(false)
    const [rightCircleHovered, setRightCircleHovered] = useState(false)
    const [bottomCircleHovered, setBottomCircleHovered] = useState(false)
    const [ellipseHovered, setEllipseHovered] = useState(false)

    // function handleSchemaChange(number) {
    //     handleSelectedSchema(number)
    // }

    function onClick(number){
        sendSchemaNumber(number)
        handleRenderChange("Schema Diagram")
    }

    return (
        <div>
            <div className="MainDiagram">
            <table>

            <tr>
                <td><img class="arrow" id="topLeftArrow" src={arrowIcon} width="50%" height="50%"/></td>
                <td onClick={() => onClick(1)} onMouseEnter={() => setTopCircleHovered(true)} onMouseLeave={() => setTopCircleHovered(false)} style={topCircleHovered? {color: "black"} : {color:'black'}}>
                    <Circle r={75} fill={topCircleHovered? {color: "#d5d6de"} : {color:'#ffffff'}} stroke={{color:'#414ab2'}} strokeWidth={2} id="circle"/>
                    <a class="circleText">1. Create services and products</a>
                </td>
                <td><img class="arrow" id="topRightArrow" src={arrowIcon} width="50%" height="50%"/></td>
            </tr>

            <tr>
                <td onClick={() => onClick(4)} onMouseEnter={() => setLeftCircleHovered(true)} onMouseLeave={() => setLeftCircleHovered(false)} style={leftCircleHovered? {color: "black"} : {color:'black'}}>
                    <Circle r={75} fill={leftCircleHovered? {color: "#d5d6de"} : {color:'#ffffff'}} stroke={{color:'#414ab2'}} strokeWidth={2} id="circle"/>
                    <a class="circleText">4. Carry out work for Clients</a>
                </td>
                <td onClick={() => onClick(5)} onMouseEnter={() => setEllipseHovered(true)} onMouseLeave={() => setEllipseHovered(false)} style={ellipseHovered? {color: "black"} : {color:'black'}}>
                    <Ellipse rx={80} ry={60} fill={ellipseHovered? {color: "#d5d6de"} : {color:'#ffffff'}} stroke={{color:'#414ab2'}} strokeWidth={2} />
                    <a class="circleText">5. Service and govern the company</a>
                </td>
                <td onClick={() => onClick(2)} onMouseEnter={() => setRightCircleHovered(true)} onMouseLeave={() => setRightCircleHovered(false)} style={rightCircleHovered? {color: "black"} : {color:'black'}}>
                    <Circle r={75} fill={rightCircleHovered? {color: "#d5d6de"} : {color:'#ffffff'}} stroke={{color:'#414ab2'}} strokeWidth={2} id="circle"/>
                    <a class="circleText">2. Identify clients interested in Services and Products</a>
                </td>
            </tr>

            <tr>
                <td><img class="arrow" id="bottomLeftArrow" src={arrowIcon} width="50%" height="50%"/></td>
                <td onClick={() => onClick(3)} onMouseEnter={() => setBottomCircleHovered(true)} onMouseLeave={() => setBottomCircleHovered(false)} style={bottomCircleHovered? {color: "black"} : {color:'black'}}>
                    <Circle r={75} fill={bottomCircleHovered? {color: "#d5d6de"} : {color:'#ffffff'}} stroke={{color:'#414ab2'}} strokeWidth={2} id="circle"/>
                    <a class="circleText">3. Sell services and products Clients</a>
                </td>
                <td><img class="arrow" id="bottomRightArrow" src={arrowIcon} width="50%" height="50%"/></td>
            </tr>

            </table>

            </div>
        </div>
    )

}

export default MainDiagram;