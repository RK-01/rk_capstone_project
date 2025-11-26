import FoodArticle from "./FoodArticle";

const items = [
    {
        title: "Greek Salad",
        value: "$12.99",
        url: "/greek-salad.jpg",
        body: "Some text here",
        itemUrl: "/greek-salad"
    },
     {
        title: "Bruchetta",
        value: "$12.99",
        url: "/bruchetta.svg",
        body: "Some text here",
        itemUrl: "/greek-salad"
    },
      {
        title: "Lemon Desert",
        value: "$12.99",
        url: "/lemon dessert.jpg",
        body: "Some text hereksjfsjfsfklsjkfskfslk dsflsfslfjsfjs jsdfjsd fsdj fsdkjlsd fsdf sdlksdjfsfsj fsdjkfsdljf sflks dflksjf sdfjslkfj ",
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
                return (<FoodArticle key={item.id} url={item.url} title={item.title} value={item.value} body={item.body} itemUrl={item.link} />)
            })}
        </div>
    </section> );
}
export default CategorySection;