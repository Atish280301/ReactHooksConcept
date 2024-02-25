import React from 'react';
import { BrowserRouter as Router, Route, Switch, useHistory } from 'react-router-dom';

const MyComponent = () => {
  const history = useHistory();

  const handleClick = () => {
    // Navigate to a different URL
    history.push('/another-page');
  };

  return (
    <>
      <h1 className='H1'>useHistory Hook In React</h1>
      <p className='P'>
        The useHistory hook is a feature provided by the react-router-dom library in React. It allows you to access the history object, which contains information about the current session's navigation history. This history object provides methods to navigate programmatically, such as push to add a new entry to the history stack, replace to replace the current entry, go to navigate to a specific entry in the history stack, and goBack and goForward to move backward or forward through the history stack.
      </p>
      <p className='P'>
        By using the useHistory hook, you can access the history object in functional components and perform navigation based on user interactions or other conditions within your application. This enables you to create dynamic and interactive user interfaces in React applications that utilize routing.
      </p>
      <div className='USH'>
        <p>Click the button to navigate to another page</p>
        <button style={{ "margin": "10px" }} onClick={handleClick}>Go to Another Page</button>
      </div>
    </>
  );
};
const HistoryF = () => {
  return (
    <Router>
      <Switch>
        <Route exact path="/" component={MyComponent} />
        <Route path="/another-page" render={() => <div>Another Page</div>} />
      </Switch>
    </Router>
  );
};

export default HistoryF;