class IndecisionApp extends React.Component{
    constructor(props){
        super(props);
        this.removeAll=this.removeAll.bind(this);
        this.handlePick=this.handlePick.bind(this);
        this.handleAddOption=this.handleAddOption.bind(this);
        this.state={
            options:[]
        }
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
         console.log("error");
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
    removeAll(){
        this.setState(()=>{return{
            options:[]
        }})
    }
    handlePick(){
        alert(this.state.options[Math.floor(Math.random()*this.state.options.length)]);
    }
    handleAddOption(option){
        if(!option)
        return "Enter Valid Data";
        else if(this.state.options.indexOf(option)>-1)
        return "Option Already exists";
        this.setState((prevState)=>({options:prevState.options.concat(option)}));
    }
    render(){
        return(
        <div>
        <Header/>
        <Action hasOptions={this.state.options.length} handlePick={this.handlePick}/>
        <Options options={this.state.options} removeAll={this.removeAll}/>
        <AddOption handleAddOption={this.handleAddOption}/>
        </div>
        );
    }
}
class Header extends React.Component{
    render(){
        return(
            <div>
            <h1>Indecision App</h1>
            <h2>Welcome</h2>
            </div>
        );
    }
}
const Action=(props)=>{
    return(
            <div>
            <button onClick={props.handlePick} disabled={!props.hasOptions}>what should I do?</button>
           
            </div>
        );
}
// class Action extends React.Component{

   
//         render(){
//         return(
//             <div>
//             <button onClick={this.props.handlePick} disabled={!this.props.hasOptions}>what should I do?</button>
           
//             </div>
//         );
//     }
// }
const Options = (props)=>{
    return(
        <div>
        {
            props.options.map((option)=> <Option key={option} option={option}/>)
            
        }
        <button onClick={props.removeAll}>RemoveAll</button>
        </div>
    );
}
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
const Option=(props)=>{
    return(
        <div>
    <p>{props.option}</p>
    </div>
    );
}
// class Option extends React.Component{
//     render(){
//         return(
//             <div>
//         <p>{this.props.option}</p>
//         </div>
//         );
//     }
// }
class AddOption extends React.Component{
    constructor(props){
        super(props);
        this.add=this.add.bind(this);
        this.state={
            error:undefined
        }
    }
    add(e){
        e.preventDefault();
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
            {this.state.error && <p>{this.state.error}</p>}
            <form onSubmit={this.add}>
            <input type="text" name="option"/>
            <button>AddOption</button>
            </form>
            </div>
        );
    }
}


ReactDOM.render(<IndecisionApp/>,document.getElementById('app'));