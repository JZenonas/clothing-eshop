import './main-dir.styles.scss';
import CatItem from '../cat-item/cat-item.component';

const MainDir = ({ categories }) => (
    <div className="main-dir-container">
        {categories.map((category, i) => (
            <CatItem key={i + 1} category={category} />
        ))}
    </div>
)

export default MainDir;