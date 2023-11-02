import '../node_modules/react/umd/react.production.min.js';
import '../node_modules/react-dom/umd/react-dom.production.min.js';

const rootDomElement = document.getElementById('root');

const root = ReactDOM.createRoot(rootDomElement);

/* Component is a JS function that generates HTML. This HTML is transformed by the browser into DOM tree. 
When using React: function -> react element -> dom element -> html
Components are functions with PascalCase semantics

when not in vite - npm i -> npm run build -> "scripts": {
    "build": "npx babel --watch src --out-dir build --presets react-app/prod"
  } in package.json
*/

// none JSX component, JS component
function FooterText() {
    return React.createElement('p', {}, `All rights reserved &copy;`);
}

function Footer() {
    return React.createElement(
        'div',
        { className: 'site-footer' },
        // we cannot pass only the function reference, when passing children
        React.createElement(FooterText),
    );
}

//JSX components
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

root.render(headerJSX);