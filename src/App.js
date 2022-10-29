import './App.css';

function App() {
  return (
    <div className="App">
    <h2>1.High Order Component in react js ?</h2>
    <p>A higher-order component (HOC) is a function that takes a component and returns a new component. Basically, it's a pattern that is derived from React's compositional nature.<br/> 
    We call them pure components because they can accept any dynamically provided child component but they won't modify or copy any behavior from their input components.</p>
     <h2>2.Do you know about SEO ? Is it true that react js supports SEO support</h2>
     <ol>
      <li>Search engine optimisation (SEO) is the process of improving the quality and quantity of website traffic to a website or a web page from search engines.</li>
      <li> SEO targets unpaid traffic (known as “natural” or “organic” results) rather than direct traffic or paid traffic.</li>
      <li>React helps build a very user-friendly UI that is also valuable by SEO, so you definitely shouldn't avoid it while creating a user interface for your app/website.</li>
     </ol>
     <h2>3.Clean up in useEffect</h2>
     <p>clean up function: This function gets executed when the component is unmounted from the screen. This is mostly used for memory leaks.</p>
    <h2>4.What is the use of useCallback and useMemo?</h2>
    <h4> use of useCallback :</h4>
    <p>useCallback will return a memorized version of the callback that only changes if one of the dependencies has changed.<br/> This is useful when passing callbacks to optimized child components that rely on reference equality to prevent unnecessary renders.</p>
    <h4> use of useMemo :</h4>
    <p>React has a built-in hook called useMemo that allows you to memoize expensive functions so that you can avoid calling them on every render.<br/> You simple pass in a function and an array of inputs and useMemo will only recompute the memoized value when one of the inputs has changed.</p>
    <h2>5.Why do we need keys in react list?</h2>
    <p>The main purpose of keys is to help React differentiate and distinguish elements from each other, increasing its performance when diffing between the virtual and real DOM. To use keys, simply add the prop inside an element such as</p>
    <p>The Unique IDs are the best value to assign to keys.</p>
      <p>"Key" prop is used to look pretty, and there is no benefit whatsoever. "Key" prop is a way for React to identify a newly added item in a list and compare it during the "diffing" algorithm. It is one of the attributes in HTML. It is NOT commonly used in an array.</p>
    <h2>6.Do you know about redux?</h2>
    <ul>
      <li>Redux is a pattern and library for managing and updating application state, using events called "actions".</li>
      <li>It serves as a centralized store for state that needs to be used across your entire application, with rules ensuring that the state can only be updated in a predictable fashion.</li>
      <li>Here is a small example of react and Redux application. </li>
      <li>You can also try developing small apps. </li>
    </ul>
    <h2>1.What is an event in react?</h2>
      <ul>
        <li>An event is an action that could be triggered as a result of the user action or system generated event.</li>
        <li>For example, a mouse click, loading of a web page, pressing a key, window resizes, and other interactions are called events.</li>
      </ul>
      <h2>2.What is memory leak and how to overcome?</h2>
      <ul>
        <li>Can't perform a React state update on an unmounted component.</li>
        <li> It reduces the performance of the computer by reducing the amount of available memory.</li>
        <li>To fix, cancel all subscriptions and asynchronous tasks in a useEffect cleanup function.	</li>
      </ul>
      <h2>3.Do you prefer function-based or class component and why ?</h2>
      <ul>
        <li>Functional Component. A functional component is just a plain JavaScript pure function that accepts props as an argument and returns a React element(JSX).</li>
        <li> A class component requires you to extend from React.</li>
        <li>Component and create a render function which returns a React element.</li>
        <li>There is no render method used in functional components.</li>
      </ul>
      <h2>4.Explain reducer as pure function in redux	</h2>
      <ul>
        <li>In Redux, a reducer is a pure function that takes an action and the previous state of the application and returns the new state.</li>
        <li> The action describes what happened and it is the reducer's job to return the new state based on that action.</li>
      </ul>
      <h2>5.Why do we use redux thunk?</h2>
      <ul>
        <li>Redux Thunk is a middleware that lets you call action creators that return a function instead of an action object.</li>
        <li>That function receives the store's dispatch method, which is then used to dispatch regular synchronous actions inside 
the function's body once the asynchronous operations have been completed.</li>
      </ul>
      <h2>6.What do you know about NPM?</h2>
      <ul>
        <li>NPM stands for 'Node Package Module'</li>
        <li>npm is the world's largest Software Registry.</li>
        <li>Open-source developers use npm to share software</li>
        <li>npm is free to use</li>
        <li>npm includes a CLI (Command Line Client) that can be used to download and install software:</li>
        <li>npm is installed with Node.js.</li>
        <li>npm can manage dependencies.</li>
      </ul>
    </div>
  );
}

export default App;