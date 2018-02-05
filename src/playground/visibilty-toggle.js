class Visibilitytoggle extends React.Component{
    constructor(props){
        super(props);
        this.state={
            visibility:false
        }
        this.details="welcome";
        this.toggle=this.toggle.bind(this);
    }
    toggle(){
        this.setState((prevState)=>{return{
            visibility:!prevState.visibility,
        }})
    }
    render(){
        return(
            <div>
            <h1>APP</h1>
            <button onClick={this.toggle}>{this.state.visibility?"hide details":"show details"}</button>
            {this.state.visibility && <p >{this.details}</p>}
            </div>
        );
    }
}
ReactDOM.render(<Visibilitytoggle/>,document.getElementById('app'));
/*const App={
title:"Visibility-Toggle",
buttonName:"show-details"
};
let visibility=false;
const toggle=()=>{
if(App.buttonName==="show-details")
App.buttonName="hide-details";
else
App.buttonName="show-details";
visibility=!visibility;
render();
}
const render=()=>{
const template=(
    <div>
    <h1>{App.title}</h1>
    <button onClick={toggle}>{App.buttonName}</button>
    {visibility && <p>Welcome!!</p>}
    </div>
);
ReactDOM.render(template,approot);
}
var approot=document.getElementById("app");
render();
*/