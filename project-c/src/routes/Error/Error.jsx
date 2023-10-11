import React from 'react';
import { useRouteError } from 'react-router-dom';
import ButtonToHome from '../../components/ButtonToHome/Index';

const Error = () => {

  const error = useRouteError();
  console.error(error);

  return (
    <>
      <div id="error-page">
        <h1>Oops! 404</h1>
        <p>Sorry, an unexpected error has occurred.</p>
        <p>
          <i>{error.statusText || error.message}</i>
        </p>
      </div>
      <ButtonToHome />
    </>
  );
};



export default Error;