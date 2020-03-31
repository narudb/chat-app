import React from 'react';
import Contact from './components/Contact'


function App() {
  return (
    <div className="App">
      <Contact 
        name = "Tracey Kim"
        avatar = "https://randomuser.me/api/portraits/women/90.jpg"
        online
      />
      <Contact 
        name = "Judd Gibson"
        avatar = "https://randomuser.me/api/portraits/men/57.jpg"
      />
      <Contact 
        name = "Jackson Johnston"
        avatar = "https://randomuser.me/api/portraits/men/40.jpg"
        online
      />
    </div>
  );
}

export default App;


