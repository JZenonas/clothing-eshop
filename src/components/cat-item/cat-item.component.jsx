import './cat-item.styles.scss';

const CatItem = ({ category }) => {
    const { img, title } = category;
    return (
        <div className="cat-conteiner">
            <div className="thumb-bg" style={{ backgroundImage: `url(${img})` }} />
            <div className="cat-thumb">
                <h2>{title}</h2>
                <p>Shop Now</p>
            </div>
        </div>
    )
};

export default CatItem;