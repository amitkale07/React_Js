import logo from './logo.svg';
import './App.css';
import AppHeader from './Components/AppHeader'
import AppBody from './Components/AppBody'
import AppFooter from './Components/AppFooter';

function App() {
  const user = {
    'username':'Amit',
    'location':'Pune'
  }

  return (
    <div className="App" >
     <AppHeader username={user.username} location={user.location}/>
     <AppBody/>
     <AppFooter/>
    </div>
  );
}

export default App;
