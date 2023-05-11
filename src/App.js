import './App.css';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import FooterComponent from './components/FooterComponent';
import HeaderComponent from './components/HeaderComponent';
import ListIncomComponent from './components/ListIncomComponent';
import AddIncomeComponent from './components/AddIncomeComponent';

function App() {
  return (
    <div>
      <Router>
        <HeaderComponent />
        <div className = "container">
          <Routes>
            <Route exact path = "/" component = {ListIncomComponent}></Route>
            <Route path = "/income" component = {ListIncomComponent}></Route>
            <Route path = "/add-income" component = {AddIncomeComponent}></Route>
          </Routes>
          <ListIncomComponent />
        </div>
        <FooterComponent />
      </Router>
    </div>
  );
}

export default App;
