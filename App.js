import React from 'react';

//method 1: A class has state
//this class below is a component, whose render() method renders the html that appears on that page for that component.
class App extends React.Component {
    render(){
        // inside the return we write our jsx:
        // vid 1 - 2:
        //return (<h1>Hello People</h1>);
        // 1. every element made here is given to the React.createElement(), method that takes 3 elements: 
        // the html element, the props ("") and the inner html eg. React.createElement('h1', null, 'hello guys')
        // 2. everything in the return must be enclosed in a single tag eg. <div> , otherwise it cannot be rendered.
        // It would mean returning 2 React.createElements and this will note make sense.
        // therefore:
        // vid 3:
        return (
            <div>
                <h1>Hello People</h1>
                <b>Bold font</b>
            </div>
        );
    }
}

//method 2: a stateless component, can be created by:
//const = App = () => <h1>Hello People</h1>


export default App;