import React, { Children, useState } from 'react';
import logo from './logo.svg';
import './App.css';
import Parent from './components/parent';
import Child from './components/child';
import Header from './components/header';



const CommandTexts=[
  {name:'Add', style:{backgroundColor:'red',fontSize:'16px', color:'white'}},
  {name:'Update', style:{backgroundColor:'grey',fontSize:'16px', color:'blue'}},
  {name:'Delete', style:{backgroundColor:'yellow',fontSize:'16px', color:'red'}},
  {name:'Filter', style:{backgroundColor:'purple',fontSize:'16px', color:'green'}}
];
//const[CommandText, setCommandText]=useState(InitialCommandText);


function App() {
  return(
      <div className="App">
          <Parent><Child names={CommandTexts}/></Parent>
      </div>
      
  );

}

export default App;
