import React, { Fragment, useEffect } from "react";
import { useLocation  } from 'react-router-dom';

const Page404 = () => {
  const location = useLocation();
  const { pathname } = useLocation();

  useEffect(() => {
    function fadeout() {
      document.querySelector(".preloader").style.opacity = "0";
      document.querySelector(".preloader").style.display = "none";
    }
    const timeoutID = window.setTimeout(fadeout, () => {}, 2000);

    return () => window.clearTimeout(timeoutID);
    
  }, []);
  // console.log("Route Name " ,location.pathname)
  // console.log("All Routes ", location)
   const pathName= location.pathname.slice(0, -1)

    // console.log("New Route ", pathName)
    
  //  const url = location.pathname;
        
  //       if (!url.match(/\/$/)) {
  //         const urlName = location.pathname
  //         console.log("No ", urlName)
  //       }
  //       else if (url.match(/\/$/)){
  //         const urlName = location.pathname
  //         const pathNameNew= location.pathname.slice(0, -1)
  //         console.log("Yes ", urlName)
  //         console.log("New result ", pathNameNew)
  //       }
        
  return (
    <Fragment>
      {/* <Navigate from='/:url*(/+)' to={location.pathname.slice(0, -1)}/> */}

      <div className="preloader">
        <div className="preloader-inner">
          <div className="preloader-icon">
            <span></span>
            <span></span>
          </div>
        </div>
      </div>

      <div className="error-area">
        <div className="d-table">
          <div className="d-table-cell">
            <div className="container">
              <div className="error-content">
                <h1>404</h1>
                <h2>
                  The page you were looking for
                  <br /> doesn't exist.
                </h2>
                <p>It might have been a wrong link or a broken link.</p>
                <div className="button">
                  <a href="/" className="btn">
                    Back to Home
                  </a>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </Fragment>
  );
};

export default Page404;
