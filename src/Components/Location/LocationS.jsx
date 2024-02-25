import React from 'react';
import { useLocation } from 'react-router-dom';
const LocationS = () => {
  const location = useLocation();
  location.pathname = '/Path1';
  return (
    <>
      <h1 className='H1'>useLocation Hook In React</h1>
      <p className='P'>
        The useLocation hook is a feature provided by the react-router-dom library in React. It allows you to access the current location object, which represents the current URL location of the application. The location object contains information such as the pathname, search parameters, hash, and state.
      </p>
      <p className='P'>
        By using the useLocation hook, you can access the current location object in functional components and use this information to conditionally render components, update the UI based on the current URL, or perform other operations related to routing and navigation in your React application.
      </p>
      <div className='USH'>
      <p className='P'>
        Current Pathname:
        {
          location.pathname === '/Path1' ?
          <p className='P'>This Is Path1</p> : <p className='P'>This Is Path2</p>
        }
      </p>
    </div>
    </>
  );
};
export default LocationS;