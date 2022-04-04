import React from 'react';
import './Footer.css'

const Footer = () => {
    return (
        <div className= " footer">
            <h3>Question: How React Works</h3>
            <p>Answer: A React application is made of multiple components, each responsible for rendering a small, reusable piece of HTML. Components can be nested within other components to allow complex applications to be built out of simple building blocks. A component may also maintain an internal state – for example, a TabList component may store a variable corresponding to the currently open tab</p>

            <h3>Question-2: What is between difference Props and State </h3>
            <p>Answer: Props are for passing data down the tree from a component to its children. They are useful for defining the static part of a component's model, because props cannot be changed.
            State is reserved mostly for handling updates that result from interactions with a component or updates that can only be intercepted by that component. It is managed by the component and it's not visible outside of it; a component's parent has no knowledge of its children's state.
            </p>
        </div>
    );
};

export default Footer;