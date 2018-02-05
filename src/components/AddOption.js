import React from "react";

export default class AddOption extends React.Component{
    state={
        error:undefined
    }
    
    add=(e)=>{
        e.preventDefault();
        //console.log("testing");
        const option=e.target.elements.option.value.trim();
        const error=this.props.handleAddOption(option);
            this.setState(()=>{return{
                error
            }})
        
        e.target.elements.option.value="";
    }
    render(){
        return(
            <div>
           <div className="widget__Addoption__error"> {this.state.error && <p>{this.state.error}</p>}</div>
                
                <form className="widget__Addoption" onSubmit={this.add}>
                
                <input className="widget__Addoption__input" type="text" name="option"/>
                <button className="button">AddOption</button>
                </form>
                
            </div>
        );
    }
}