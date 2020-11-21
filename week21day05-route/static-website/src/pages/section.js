import React from 'react';
// import ReactDOM from 'react-dom';
import './section.css';
// import { Link } from 'react-router-dom';
const Section = () => {
    return (
        <div className="main">
            <article className="content">
                <div>
                    <p><b>What is React.js </b><br/>
                        For now, it is enough to know that React.js is the JavaScript library used for building UI components.
                        It was created by the engineers of Facebook and nowadays, it is rocking the JavaScript world..
                    </p>
                    <p><b>What is a React Component</b><br/>
                     React lets you define components as a class or a function. You can provide optional inputs to the components called ‘props’
                        Components let you split up the UI into independent sections like header, footer, and body. 
                        Each component will work independently so any individual component can be rendered independently into the ReactDOMwithout affecting the whole page.<br/>

                    It also comes with ‘lifecycle methods’ which let you define pieces of code you want to execute according to the state of the 
                    component like mounting, rendering, updating and un-mounting.<br/>

                    React components come with their own trade-offs. For example, we can reuse a component by exporting it to other components, 
                    but sometimes it gets confusing to handle multiple components talking and triggering renders for each other.<br/>

                    this is how a component would look like!
                    </p>
                </div>
            </article>
            <aside className="search">
                <div>
                    <input type="text" placeholder="search" />
                    <button>submit</button>
                </div>
            </aside>
        </div>
    );
};

export default Section;