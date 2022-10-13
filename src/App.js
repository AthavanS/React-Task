// import logo from './logo.svg';
import './App.css';
import Header from './Components/Header/Header';
import AddNotes from './Components/AddNotes/AddNotes';
import DashBoard from './Components/Dashboard/Dashboard';

function App() {
  const title="Keep Note APP"
  return (
    <div className="App">
      <Header txt={title}/>
     <DashBoard/>
     
    </div>
  );
}

export default App;
