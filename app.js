import React, { createElement } from "react";
import ReactDOM from "react-dom/client";
import logo from "/Assets/images/logo-react_.png";
import user from "/Assets/images/user-solid_.png";
import styles from "/index.css";
//Nested Element with React Core (without JSX)

const nestedElem = React.createElement("div",{class:"title"},[
                      React.createElement("h1",{},"I am h1"),
                      React.createElement("h2",{}, "I am h2"),
                      React.createElement("h3", {}, "I am h3")
]);
const root = ReactDOM.createRoot(document.getElementById("root"));
//root.render(nestedElem);

//creating same Nested Element with JSX

const nestedElemJsx = (
    <div className="title">
        <h1>I am h1 using jsx</h1>
        <h2>I am h2 using jsx</h2>
        <h3>I am h3 using jsx</h3>
    </div>

);
//root.render(nestedElemJsx);

//Creating functional component for the same with JSX

const NestedJsx = () =>(
    <div className="title">
        {nestedElem}
        <h1>I am h1 using jsx component</h1>
        <h2>I am h2 using jsx component</h2>
        <h3>I am h3 using jsx component</h3>
    </div>
);
//root.render(<NestedJsx/>);

// JSX => Babel Transpiles JSX to React.createElement => ReactElement(which is a JS object) => Renders into a HTML element.
//const jsxHeading = <h1 className="head">Namste React using JSX</h1>;
//console.log(jsxHeading);

const Title = () => {
return <h1>React using JSX</h1>
};
const title = (
    <h2>"Chandana"</h2>
);
const Section = () => <h2>React using jsx in arrow functions</h2>;
//the below three are representations of Title component are for same outputs.
const Heading = ()=>(
    <div id="container" >
        <Title/>
        <Title></Title>
        {Title()}
        <Section/>
        <h1 className="head">{title}React Functional component using Component Composition </h1>
    </div>
);

//root.render(<Heading/>);

//Creating a Header from Scratch using JSX components

const HeaderComponent = () => (
    <div id="bar" style={styles}>
        <img id="logo" className="icons" src={logo} alt="Logo Image" />
        <input className="searchbox" type="text" placeholder="Enter to Search" />
        <img id="user" className="icons" src={user} alt="User Icon"/>
    </div>
);

root.render(<HeaderComponent/>);