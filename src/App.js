import './App.css';
import {BrowserRouter, Route, Link} from 'react-router-dom'
import InvitedHome from './screen/InvitedHome'
import InvitedUser1 from './screen/InvitedUser1'
import InvitedUser2 from './screen/InvitedUser2'

function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <Route path="/" component={InvitedHome}/>
        <Route path="/1" component={InvitedUser1}/>
        <Route path="/2" component={InvitedUser2}/>
      </BrowserRouter>
    </div>
  );
}

export default App;