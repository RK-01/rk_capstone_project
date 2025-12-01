import FoodArticle from "./FoodArticle";

const items = [
    {
        title: "Greek Salad",
        value: "$12.99",
        url: "/greek-salad.jpg",
        body: "This Greek salad recipe is easy, authentic, fresh, and absolutely delicious! A handful of simple ingredients, extra virgin olive oil, oregano, and a splash of vinegar is all you need.",
        itemUrl: "/greek-salad"
    },
     {
        title: "Bruchetta",
        value: "$12.99",
        url: "/bruchetta.svg",
        body: "classic Italian dish made with slices of rustic bread that are grilled or toasted, rubbed with garlic, and topped with olive oil, salt, and seasonal ingredients.",
        itemUrl: "/greek-salad"
    },
      {
        title: "Lemon Desert",
        value: "$12.99",
        url: "/lemon dessert.jpg",
        body: "The bright flavor is bold enough to wake you up, and the lemony cream cheese frosting is so good, you'll want to eat it by the spoonful.",
        itemUrl: "/greek-salad"
}
]
const CategorySection = ({title}) => {
    return (<section className="container category-container">
        <div className="category-section-header" id="week_special">
            <h1 className="section-title">{title}</h1>
            <button className="section-action-btn">Online Menu</button>
        </div>
        <div className="category-items-container">
            {items?.map((item) => {
                return (<FoodArticle key={item.title} url={item.url} title={item.title} value={item.value} body={item.body} itemUrl={item.link} />)
            })}
        </div>
    </section> );
}
export default CategorySection;