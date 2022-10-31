import { Routes, Route } from 'react-router-dom'
import NavBar from './routes/nav-bar/nav-bar.component';
import Home from './routes/home/home.component'
import Authentication from './routes/authentication/authentication';

const Shop = () => <h1>Buy Now!</h1>

const App = () => {
  return (
    <Routes>
      <Route path='/' element={<NavBar />}>
        <Route index element={<Home />} />
        <Route path='auth' element={<Authentication />} />
        <Route path='shop' element={<Shop />} />
      </Route>
    </Routes>
  );
}

export default App;
