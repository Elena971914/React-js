/* 
React is a library, not a framework for creating SPA apps. All modern apps are SPA = Single Page Applications. There is no routing. The logic in the app is distributed among little components for visualization, logic, and data. Almost native. The DOM is removed and react makes its inner mechanism to work with virtual DOM and then implement it.
JSX is syntax that makes react different from Angular and Vue. It is easy way to create UI (like HTML). JSX- Javascript superset language. Superset - like typescript - adding to another language, fancier syntax, that is transpiled to plain JavaScript. JSX is like template engine but has many other functionalities as well. In the final state (the client) there is no JSX. There are a few differences between HTML and JSX like the following: in html the property is class='some' and in jsx is className='some' because class is a reserved word. 

npm init --yes     - initializing base node package in order to be able to install libraries
npm i react 
npm i react-dom    - react is separated in two parts - base library (for creation of components and their management) and react-dom (for connection with the dom tree - applying the components from the virtual dom to the real one)

To create in the memory http server and hosts our page; hot reloading is the tool it uses to apply file changes to the browser - Live server 
The first request in the browser is to index.html and it shows the noscript tag (shown in the response)
The second request is to the script.js and dynamically it shows the changes made (and the response changes)
*/

// THESE TWO LIBRARIES SHOULD BE IMPORTED

import '../node_modules/react/umd/react.production.min.js';
import '../node_modules/react-dom/umd/react-dom.production.min.js';

// The only dom element operation that we do and it is where we want the React to be housed
var rootDomElement = document.getElementById('root');

// React root element - where the app starts
// when we include the second library it enables us to use ReactDOM
var root = ReactDOM.createRoot(rootDomElement);

/* The DOM tree is structure where the children can have only one parent.
   It is comprised of react/html elements. The dom element is an object and it has properties with info about it. 
   Dom elements in the browser can be shown with console.dir(<HTMLDivElement>).
   React creates VDOM (virtual dom/parallel representation) with React elements (objects, representation of real elements). The React elements have only 4-5 properties and the VDOM is faster and easier to manipulate. At the end React makes diff check and makes as less optimizations on the real tree as possible. Vite makes hot module replacement.*/


//  React without JSX                      1.type  2.props  3.content
// var reactHeading = React.createElement('h1', {}, 'Hello From JSX!');
// var reactSecondHeading = React.createElement('h2', {}, 'The best syntax ever!');
// var header = React.createElement('header', //-- type of element
// { className: 'site-header' }, //--props
// reactHeading, //-- what is inside the element, children 
// reactSecondHeading);

// const Footer = () => {
//     return React.createElement(
//         'div',
//         { className: 'site-footer' },
//         React.createElement(
//             'p',
//             {},
//             'All rights reserved'
//         ),
//     );
// }

const Footer = () => (
    <div className='site-footer'>
        <p>All rights reserved &copy;</p>
    </div>
);

// The elements should be wrapped in one 
const headerJSX = (
    <div>
        <header className='site-header'>
            <h1>Hello from JSX!</h1>
            <h2>The best syntax ever!</h2>

            <p>something else here</p>
        </header>

        <Footer />
    </div>
);

// What applies the made changes to the real DOM tree
root.render(headerJSX);