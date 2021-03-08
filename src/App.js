
import React from 'react';
import NavigationBar from './Components/Navigation/Navigation.jsx';  // main file others are connected to this 
import Cards from './Components/Cards/Cards.jsx';


const App = () => {
  return (
    <div>
      <NavigationBar />
      <Cards />
    </div>
  )
}

export default App;
