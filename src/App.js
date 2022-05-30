import './App.css';

import LeftSideBar from './components/LeftSideBar';
import Dashboard from './pages/Dashboard';

function App() {
  return (
    <div style={{"position": "relative"}}>
      <LeftSideBar />
      <Dashboard />
    </div>
  );
}

export default App;
