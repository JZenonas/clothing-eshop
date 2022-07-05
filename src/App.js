import { Routes, Route } from 'react-router-dom'
import NavBar from './routes/nav-bar/nav-bar.component';
import Home from './routes/home/home.component'

const Shop = () => <h1>Buy Now!</h1>

const App = () => {
  return (
    <Routes>
      <Route path='/' element={<NavBar />}>
        <Route index element={<Home />} />
        <Route path='/shop' element={<Shop />} />
      </Route>
    </Routes>
  );
}

export default App;
