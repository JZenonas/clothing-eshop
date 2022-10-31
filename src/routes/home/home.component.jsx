import MainDir from '../../components/main-dir/main-dir.component';

const categories = [
  {
    title: "Hats",
    img: "https://i.ibb.co/cvpntL1/hats.png"
  },
  {
    title: "Jackets",
    img: "https://i.ibb.co/px2tCc3/jackets.png"
  },
  {
    title: "Sneakers",
    img: "https://i.ibb.co/0jqHpnp/sneakers.png"
  },
  {
    title: "Womens",
    img: "https://i.ibb.co/GCCdy8t/womens.png"
  },
  {
    title: "Mens",
    img: "https://i.ibb.co/R70vBrQ/men.png"
  }
]

const Home = () => {
  return (
    <MainDir categories={categories} />
  )
}

export default Home;
