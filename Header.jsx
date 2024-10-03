// import React from "react";

// function Header({ renderCount, description }) {
//   return (
//     <header>
//       <h1>Application Header</h1>
//       <p>{description}</p>
//       <p>Render Count: {renderCount}</p>
//     </header>
//   );
// }

// export default Header;


import React from "react";
import "./index"; // Ensure this path is correct for styling

function Header({ renderCount, description }) {
  return (
    <header>
      {/* <h1>Application Header</h1> */}
      <p>{description}</p>
     <p className="render-count  " >Render Count: {renderCount}</p>
     </header>
  );
}

export default Header;
