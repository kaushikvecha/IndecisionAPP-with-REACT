import React from "react";
import Option from "./Option"
const Options = (props)=>(
    <div>
    <div className="widget-header">
    <p className="widget-header p"> Your options</p>
    <button className="button button--link" onClick={props.removeAll}>RemoveAll</button>
    </div>
    {
        props.options.map((option)=> <Option key={option} options={props.options} handleDeleteOption={props.handleDeleteOption} optionText={option}/>)
        
    }
    
    </div>
);
export default Options;