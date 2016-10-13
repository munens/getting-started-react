/* vid 1 -3:
import React from 'react';

//method 1: A class has state
//this class below is a component, whose render() method renders the html that appears on that page for that component.
// the name is capitalised to show it is a component.
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
    };
}

//method 2: a stateless component, can be created by:
//const = App = () => <h1>Hello People</h1>


export default App;

*/

/* vid 4:

import React from 'react';
import ReactDOM from 'react-dom';

class App extends React.Component {
    render(){
        let txt = this.props.txt;
        return (<h1>Hello People: {txt}</h1>);
    };
}

//add a propType: we can define what form our props should be in for example, string, number etc.
App.propType = {
    txt: React.PropTypes.string,

    // and they can be made into a required property:
    cat: React.PropTypes.number.isRequired
}

// add a default property: we can set default props for the component. Such that if we were to remove the props, 
// that we want to eventually set hen the default one would show up and vice versa.
App.defaultProps = {
    txt: "this is the default txt"
}

// The ReactDOM.render(), may appear on any component. 
// Here we are going to show how we can pass props onto a React component - whixh is i.e. giving the component a value.
// When this is done the component recieves the value as an object in terms of this.props - that can now be used by the
// component, as we can see.
ReactDOM.render(
    <App cat={5} />, 
    document.getElementById('app') 
);

export default App;

 */


/* vid 5: */

import React from 'react';
// What is state: a collection of values managed by the component itself:
class App extends React.Component {

    //create a constructor: Which is the context for this in the component:
    constructor(){
        super();
        this.state = { txt : 'this is the state text',
                       cat : 0 
        }
    }

    //change the state:
    update(e){
        this.setState({txt: this.state.txt + e.target.value})
    }

    render(){
        let txt = this.props.txt;
        return (
            <div>
                <input type="text" onChange={this.update.bind(this)} />    
                <h1>Hello People: {this.state.txt}</h1>
            </div>
        );
    };
}

export default App;

