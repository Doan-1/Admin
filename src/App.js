import './App.css';

import LeftSideBar from './components/LeftSideBar';
import Dashboard from './pages/Dashboard';
import Products from './pages/Product';
import Customer from './pages/Customer';
import Orders from './pages/Orders';
import AddNewProduct from './components/AddNewProduct';
import { Route, Routes, BrowserRouter } from 'react-router-dom';


const configComponent = (component) => {
  return (
    <div style={{"position": "relative"}}>
      <LeftSideBar />
      {component}
    </div>
  )
}

let path = [
  {
    path: "/",
    component: configComponent(<Dashboard />)
  },
  {
    path: "/products",
    component: configComponent(<Products />)
  },
  {
    path: "/customers",
    component: configComponent(<Customer />)
  },
  {
    path: "/orders",
    component: configComponent(<Orders />)
  },
  {
    path: "/addproduct",
    component: configComponent(<AddNewProduct />)
  },
]
function App() {
  return (
    <Routes>
    {
      path.map((item, index) => {
        return (
            <Route path={item.path} element={item.component} key={index}></Route>
        )
      })
    }
    </Routes>
    // <div style={{"position": "relative"}}>
    //   <LeftSideBar />
    //   <Dashboard />
    // </div>
  );
}

export default App;
