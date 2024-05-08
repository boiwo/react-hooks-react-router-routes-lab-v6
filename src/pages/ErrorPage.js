// import NavBar from "../components/NavBar";
// import { useRouteError } from "react-router-dom";

// function ErrorPage(){
//     const error = useRouteError
//     console.log(error);
//     return(
//         <>
//             <NavBar/>
//             <h1>Oops! Looks like something went wrong.</h1>

//         </>
//     )
// }
// export default ErrorPage
import React from 'react';
import NavBar from '../components/NavBar';

const ErrorPage = () => {
  return (
    <div>
      <NavBar />
      <h1>Oops! Looks like something went wrong.</h1>
    </div>
  );
};

export default ErrorPage;