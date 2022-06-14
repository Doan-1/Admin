import './App.css';

import LeftSideBar from './components/LeftSideBar';
import Dashboard from './pages/Dashboard';
import Products from './pages/Product';
import Customer from './pages/Customer';
import Orders from './pages/Orders';

function App() {
  return (
    <div style={{"position": "relative"}}>
      <LeftSideBar />
      <Dashboard />
    </div>
  );
}

export default App;
