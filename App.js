import React from 'react';

//method 1: A class has state
//this class below is a component, whose render() method renders the html that appears on that page for that component.
class App extends React.Component {
    render(){
        // inside the return we write our jsx:
        return (<h1>Hello People</h1>);
        // every element made here is given to the React.createElement(), method that takes 3 elements: 
        // the html element, the props ("") and the inner html eg. React.createElement('h1', null, 'hello guys')
    }
}

//method 2: a stateless component, can be created by:
//const = App = () => <h1>Hello People</h1>


export default App;