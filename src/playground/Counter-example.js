class Counter extends React.Component{
    constructor(props){
        super(props);
        this.state={
            count:0
        };
        this.incrementCount=this.incrementCount.bind(this);
        this.decrementCount=this.decrementCount.bind(this);
        this.resetCount=this.resetCount.bind(this);
    }
    incrementCount(){
        this.setState((prevState)=>{
            return{
            count:prevState.count+1
            };
        })
        
    }
    decrementCount(){
        this.setState((prevState)=>{
            return{
                count:prevState.count-1
            };
    })
    }
    resetCount(){
        this.setState((prevState)=>{
            return{
                count:0
            };
    })
    }
    render(){
        return(
            <div>
            <h1>Count:{this.state.count}</h1>
            <button onClick={this.incrementCount}>+1</button>
            <button onClick={this.decrementCount}>-1</button>
            <button onClick={this.resetCount}>reset</button>
            </div>
        );
    }
}
ReactDOM.render(<Counter/>,document.getElementById('app'));