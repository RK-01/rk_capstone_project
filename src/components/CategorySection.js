import FoodArticle from "./FoodArticle";

const CategorySection = ({title, items}) => {
    return (<section className="container category-container">
        <div className="category-section-header">
            <h1 className="section-title">{title}</h1>
            <button className="section-action-btn">Online Menu</button>
        </div>
        <div className="category-items-container">
            {items?.map((item) => {
                return (<FoodArticle key={item.id} url={item.url} title={item.title} value={item.value} body={item.body} itemUrl={item.link} />)
            })}
        </div>
    </section> );
}
export default CategorySection;