import MainDir from '../../components/main-dir/main-dir.component';
import categories from '../../categories.json';

const Home = () => {
  return (
    <MainDir categories={categories} />
  )
}

export default Home;
