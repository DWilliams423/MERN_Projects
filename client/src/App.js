import { Router } from '@reach/router';
import LoginForm from './components/LoginForm';
import RegisterForm from './components/RegisterForm';
import CreateRec from './components/CreateRec';
import DiningForm from './components/DiningForm';
import GameForm from './components/GameForm';
import Main from './views/Main';
import EditDining from './views/EditDining';
import EditGame from './views/EditGame';
import DetailsDining from './views/DetailsDining';
import DetailsGame from './views/DetailsGame';
import Banner from './components/Banner';
import './App.css';

function App() {
  return (
    <div className="App">
      <Banner />
      <header className="App-header">
      <Router>
        <Main path="recs/dashboard" />
        <LoginForm path="/" />
        <RegisterForm path="recs/user/register" />
        <CreateRec path="recs/createrec" />
        <DiningForm path="recs/createdining" />
        <GameForm path="recs/creategame" />
        <EditDining path="recs/editdining/:id" />
        <EditGame path="recs/editgame/:id" />
        <DetailsDining path="recs/detailsdining/:id" />
        <DetailsGame path="recs/detailsgame/:id" />
      </Router>
      
      </header>
    </div>
  );
}

export default App;
