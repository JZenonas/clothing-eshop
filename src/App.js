import './categories.styles.scss'
import categories from './categories.json'

const App = () => {
  return (
    <div className="categories-container">
      {categories.map(({ title, img }, i) => (
        <div key={i+1} className="cat-conteiner">
          <div className="thumb-bg" style={{backgroundImage: `url(${img})`}}/>
          <div className="cat-thumb">
            <h2>{title}</h2>
            <p>Shop Now</p>
          </div>
        </div>
      ))}
    </div>
  )
}

export default App;
