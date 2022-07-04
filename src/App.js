import './categories.styles.scss'
import MainDir from './components/main-dir/main-dir.component';
import categories from './categories.json';

const App = () => {
  return (
    <MainDir categories={categories} />
  )
}

export default App;
