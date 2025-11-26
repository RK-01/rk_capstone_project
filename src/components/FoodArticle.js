import CycleIcon from "./CycleIcon";

const FoodArticle = ({url, title, value, body, itemUrl}) => {
    return (<article className="food-article-container">
        <div className="food-article-img-container">
            <img className="food-article-img" src={url} alt={title} />
        </div>
        <div className="food-article-body">
            <div className="food-article-header">
                <h3 className="food-article-title">{title}</h3>
                <span className="food-article-value">{value}</span>
            </div>
            <p className="food-article-body-text">{body}</p>
            <a href={itemUrl} className="food-article-link"><span>Order a delivery </span><span className="h-10 w-10">
               <CycleIcon />
</span></a>
        </div>
    </article> );
}
 
export default FoodArticle;