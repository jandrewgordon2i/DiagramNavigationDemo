import logo from './logo.svg';
import './App.css';
import { Circle, Ellipse } from 'react-shapes';
import arrowIcon from "./Resources/Blue-Up-Arrow.png"
import { Grid, Paper } from '@mui/material';
import { useState, useEffect } from 'react';
import useHover from './useHover';
import MainDiagram from './MainDiagram';
import SchemaDiagram from './SchemaDiagram';

function App() {

  // const [topCircleHovered, setTopCircleHovered] = useState(false)
  // const [leftCircleHovered, setLeftCircleHovered] = useState(false)
  // const [rightCircleHovered, setRightCircleHovered] = useState(false)
  // const [bottomCircleHovered, setBottomCircleHovered] = useState(false)
  // const [ellipseHovered, setEllipseHovered] = useState(false)

  const [selectedSchema, setSelectedSchema] = useState(0)
  const [currentRender, setCurrentRender] = useState("Main Diagram")
  const [data, setData] = useState('')

  const sendSchemaNumber = (schemaNumber) => {
    setSelectedSchema(schemaNumber)
  }

  const handleRenderChange = (renderdata) => {
    setCurrentRender(renderdata)
  }

  // function getCurrentSchema() {
    // if(topCircleHovered){
    //   return "schema1"
    // }
    // if(leftCircleHovered){
    //   return "schema4"
    // }
    // if(rightCircleHovered){
    //   return "schema2"
    // }
    // if(bottomCircleHovered){
    //   return "schema3"
    // }
    // if(ellipseHovered){
    //   return "schema5"
    // }
  // }
  
  // let currentSchema = getCurrentSchema()
  // let schema = document.getElementById(currentSchema);

  // const onMouseMove = (e) =>{
  //   schema.style.left = e.pageX + 20 + 'px';
  //   schema.style.top = e.pageY + 20 + 'px';
  // }

  // document.addEventListener('mousemove', onMouseMove);

  function whatToRender() {
    if(currentRender == "Main Diagram"){
      return(<MainDiagram sendSchemaNumber={sendSchemaNumber} handleRenderChange={handleRenderChange}></MainDiagram>)
    }
    if(currentRender == "Schema Diagram"){
      return(<SchemaDiagram selectedSchema={selectedSchema} handleRenderChange={handleRenderChange}></SchemaDiagram>)
    }
    
    // if (currentRender = "Main Diagram"){
    //   return(<MainDiagram onSelectSchema={handleSelectedSchema}></MainDiagram>)
    // } if (currentRender = "Schema Diagram") {
    //   return(<OtherThing selectedSchema={selectedSchema}></OtherThing>)
    // }
    // else {
    //   return(<MainDiagram onSelectSchema={handleSelectedSchema}></MainDiagram>)
    // }
  }
    
  return (
    <div className="App">

      {/* <button onClick={() => doIsChanged()}>Change</button> */}

      <div>{whatToRender()}</div>      

      {/*
      <table>
        <tr>
          <td><img class="arrow" id="topLeftArrow" src={arrowIcon} width="50%" height="50%"/></td>
          <td onMouseEnter={() => setTopCircleHovered(true)} onMouseLeave={() => setTopCircleHovered(false)} style={topCircleHovered? {color: "black"} : {color:'black'}}>
            <Circle r={75} fill={topCircleHovered? {color: "#d5d6de"} : {color:'#ffffff'}} stroke={{color:'#414ab2'}} strokeWidth={2} id="circle"/>
            <a class="circleText" href="https://2itesting.com/">1. Create services and products</a>
          </td>
          <td><img class="arrow" id="topRightArrow" src={arrowIcon} width="50%" height="50%"/></td>
        </tr>
        <tr>
          <td onMouseEnter={() => setLeftCircleHovered(true)} onMouseLeave={() => setLeftCircleHovered(false)} style={leftCircleHovered? {color: "black"} : {color:'black'}}>
            <Circle r={75} fill={leftCircleHovered? {color: "#d5d6de"} : {color:'#ffffff'}} stroke={{color:'#414ab2'}} strokeWidth={2} id="circle"/>
            <a class="circleText" href="https://2itesting.com/">4. Carry out work for Clients</a>
          </td>
          <td onMouseEnter={() => setEllipseHovered(true)} onMouseLeave={() => setEllipseHovered(false)} style={ellipseHovered? {color: "black"} : {color:'black'}}>
            <Ellipse rx={80} ry={60} fill={ellipseHovered? {color: "#d5d6de"} : {color:'#ffffff'}} stroke={{color:'#414ab2'}} strokeWidth={2} />
            <a class="circleText" href="https://2itesting.com/">5. Service and govern the company</a>
          </td>
          <td onMouseEnter={() => setRightCircleHovered(true)} onMouseLeave={() => setRightCircleHovered(false)} style={rightCircleHovered? {color: "black"} : {color:'black'}}>
            <Circle r={75} fill={rightCircleHovered? {color: "#d5d6de"} : {color:'#ffffff'}} stroke={{color:'#414ab2'}} strokeWidth={2} id="circle"/>
            <a class="circleText" href="https://2itesting.com/">2. Identify clients interested in Services and Products</a>
          </td>
        </tr>
        <tr>
          <td><img class="arrow" id="bottomLeftArrow" src={arrowIcon} width="50%" height="50%"/></td>
          <td onMouseEnter={() => setBottomCircleHovered(true)} onMouseLeave={() => setBottomCircleHovered(false)} style={bottomCircleHovered? {color: "black"} : {color:'black'}}>
            <Circle r={75} fill={bottomCircleHovered? {color: "#d5d6de"} : {color:'#ffffff'}} stroke={{color:'#414ab2'}} strokeWidth={2} id="circle"/>
            <a class="circleText" href="https://2itesting.com/">3. Sell services and products Clients</a>
          </td>
          <td><img class="arrow" id="bottomRightArrow" src={arrowIcon} width="50%" height="50%"/></td>
        </tr>
      </table>
      <img class="schema" id="schema1" src={schema1} style={topCircleHovered? {visibility: "visible"} : {visibility: "hidden"}}/>
      <img class="schema" id="schema2" src={schema2} style={rightCircleHovered? {visibility: "visible"} : {visibility: "hidden"}}/>
      <img class="schema" id="schema3" src={schema3} style={bottomCircleHovered? {visibility: "visible"} : {visibility: "hidden"}}/>
      <img class="schema" id="schema4" src={schema4} style={leftCircleHovered? {visibility: "visible"} : {visibility: "hidden"}}/>
      <img class="schema" id="schema5" src={schema5} style={ellipseHovered? {visibility: "visible"} : {visibility: "hidden"}}/>


       <div id="topRow">
        <div id="topRowContent">
          <img id="topLeftArrow" src={arrowIcon} width="5%" height="5%"/>
          <Circle r={75} fill={{color:'#2409ba'}} stroke={{color:'#E65243'}} strokeWidth={0} />
          <img id="topRightArrow" src={arrowIcon} width="5%" height="5%"/>
        </div>  
      </div>
      <div id="middleRow">
        <div id="middleRowContent">
          <Circle r={75} fill={{color:'#2409ba'}} stroke={{color:'#E65243'}} strokeWidth={0} />
          <Ellipse rx={100} ry={75} fill={{color:'#2409ba'}} stroke={{color:'#E65243'}} strokeWidth={0} />
          <Circle r={75} fill={{color:'#2409ba'}} stroke={{color:'#E65243'}} strokeWidth={0} />
        </div>
      </div>
      <div id="bottomRow">
        <div id="bottomRowContent">
          <img id="bottomLeftArrow" src={arrowIcon} width="5%" height="5%"/>
          <Circle r={75} fill={{color:'#2409ba'}} stroke={{color:'#E65243'}} strokeWidth={0} />
          <img id="bottomRightArrow" src={arrowIcon} width="5%" height="5%"/>
        </div>
      </div>   */}    
    </div> 
  );
}


export default App;
