import CycleIcon from "./CycleIcon";

const FoodArticle = ({url, title, value, body, itemUrl}) => {
    return (<section className="food-article-container">
                <article className="food-article-img-container">
                    <img className="food-article-img" src={url} alt={title} />
                </article>
                <article className="food-article-body">
                    <div className="food-article-header">
                        <h3 className="food-article-title">{title}</h3>
                        <span className="food-article-value">{value}</span>
                    </div>
                    <p className="food-article-body-text">{body}</p>
                    <a href={itemUrl} className="food-article-link">
                        <span>Order a delivery </span>
                        <span className="h-10 w-10">
                            <CycleIcon />
                        </span>
                    </a>
                </article>
            </section> );
}
 
export default FoodArticle;