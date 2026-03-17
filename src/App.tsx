import React from 'react';
import * as D from './data';

import './App.css';

// function App() {
//   console.log("groom");
//   return (
//     <h1>hello worldworld</h1>
//   );
// }

// export default App;

export default function App(){
  return (
    <div>
      <p>
        {D.randomName()}, {D.randomJobTitle()}, {D.randomDayMonthYear()}
      </p>
    </div>
  )
}