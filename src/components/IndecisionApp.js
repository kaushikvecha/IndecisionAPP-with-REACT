import React from "react";
import AddOption from "./AddOption";
import Option from "./Option";
import Options from "./Options";
import Action from "./Action";
import Header from "./Header";
import OptionModal from "./OptionModal"
export default class IndecisionApp extends React.Component{
    state={
        options:[],
        selectedOption:false
    }
   
    removeAll=()=>{
        this.setState(()=>{return{
            options:[]
        }})
    }
    handlePick=()=>{
        const random=Math.floor(Math.random()*this.state.options.length);
        const option=this.state.options[random];
       // alert(this.state.options[Math.floor(Math.random()*this.state.options.length)]);
        this.setState(()=>({
            selectedOption:option
        }))
    }
    handleOkayButton=()=>{
        this.setState(()=>({selectedOption:undefined}))
    }
    handleAddOption=(option)=>{
        if(!option)
        return "Enter Valid Option!";
        else if(this.state.options.indexOf(option)>-1)
        return "Option Already exists!!";
        this.setState((prevState)=>({options:prevState.options.concat(option)}));
    }
    handleDeleteOption=(optionText)=>{
        this.setState((prevState)=>({
            options:prevState.options.filter((option)=>optionText!=option)
        }));
    }
    componentDidMount(){
        try{
            const json=localStorage.getItem("options");
            const options=JSON.parse(json);
            if(options)
            this.setState(()=>({options:options}))
        }
        catch(e){
            //nothing
         //console.log("error");
            }
        }
    componentDidUpdate(prevProps,prevState){
        if(prevState.options.length!==this.state.options.length)
            {
                const json=JSON.stringify(this.state.options);
                localStorage.setItem("options",json);
            }
    }
    componentWillUnmount(){

    }
    render(){
        return(
        <div>
        <Header/>
            <div className="container">
            <Action hasOptions={this.state.options.length} handlePick={this.handlePick}/>
                <div className="widget">
                <Options options={this.state.options} handleDeleteOption={this.handleDeleteOption} removeAll={this.removeAll}/>
                {this.state.options.length===0 && <p className="widget-message">Add option to get started!</p>}
                <AddOption handleAddOption={this.handleAddOption}/>
                </div>
            </div>
        <OptionModal handleSelectedOption={this.state.selectedOption} handleOkayButton={this.handleOkayButton}/>
        </div>
        );
    }
}