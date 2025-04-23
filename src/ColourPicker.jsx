import React, { useState } from 'react'


export default function ColourPicker(props) {

    const[color,setcolor]=useState('White');
  return (
    <div className='container' style={{backgroundColor:color,}}>

        <select  onChange={(e)=>setcolor(e.target.value)}>
            <option value="White">White</option>
            <option value="Red">Red</option>
            <option value="Yellow">Yellow</option>
            <option value="blue">blue</option>
            <option value="green">green</option>
            <option value="lightblue">lightblue</option>
            <option value="lightgreen">lightgreen</option>
            <option value="rgba(210, 105, 30, 0.342)">gradient</option>
            <option value="rgba(177, 210, 30, 0.34)">rgba</option>

        </select>
        <p>{color}</p>
        <h1>{props.counter}</h1>
    </div>
  )
}
