import React from "react";


const Counter = props =>
    <section className="card">
        <h1>Current Score: {props.count}</h1> <h1>Top Score: {props.topScore}</h1>
    </section>




export default Counter;
