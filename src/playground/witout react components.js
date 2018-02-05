var app={
    title:"IndecisionApp",
    Subtitle:"welcome",
    options:[]
};
const formSubmit=(e)=>{
e.preventDefault();
const option=e.target.elements.option.value;
    if(option){
        app.options.push(option);
        e.target.elements.option.value="";
        render();
    }
};
const clear=()=>{
app.options=[];    
render();
}

const render=()=>{
var template=(
    <div>
    <h1>{app.title}</h1>
    
    {app.Subtitle && <p>{app.Subtitle}</p>}

    {app.options.length>0?<p>Here are the options</p>:<p>No options</p>}
    <p>{app.options.length}</p>
    <button onClick={clear}>Remove all</button>
    <ol>
   { app.options.map((option)=>{
        return <li key={option}>{option}</li>
    })}
     
     
     </ol>
    <form onSubmit={formSubmit}>
    <input type="text" name="option"/>
    <button> Add Option  </button>
    </form>
    </div>
);

ReactDOM.render(template,appRoot);
}
var appRoot=document.getElementById('app');
render();
/*
const addOne=()=>{
    count++;
    renderCount();
}
const reset=()=>{
    count=0;
    renderCount();
}
let count=0;
const renderCount=()=>{
const templateTwo=(
    <div>
    <h1>Count: {count}</h1>
    <button id="b1" onClick={addOne}>+1 </button>
    <button id="b2" onClick={reset}>Reset </button>
    </div>
);
ReactDOM.render(templateTwo,appRoot);
}
var appRoot=document.getElementById('app');
renderCount();
*/
