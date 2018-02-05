import React from "react";
import ReactDOM from "react-dom";
import IndecisionApp from "./components/IndecisionApp";
import "normalize.css/normalize.css";
import "./styles/styles.scss"
ReactDOM.render(<IndecisionApp/>,document.getElementById('app'));












// class Action extends React.Component{

   
//         render(){
//         return(
//             <div>
//             <button onClick={this.props.handlePick} disabled={!this.props.hasOptions}>what should I do?</button>
           
//             </div>
//         );
//     }
// }

// class Options extends React.Component{
//     render(){
//         return(
//         <div>
//         {
//             this.props.options.map((option)=> <Option key={option} option={option}/>)
            
//         }
//         <button onClick={this.props.removeAll}>RemoveAll</button>
//         </div>
//     );
//     }
// }

// class Option extends React.Component{
//     render(){
//         return(
//             <div>
//         <p>{this.props.option}</p>
//         </div>
//         );
//     }
// }



