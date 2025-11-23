import CategorySection from "./CategorySection";
import HeroSection from "./Hero";

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
const Main = () => {
    return (<main className="">
        <HeroSection />
        <CategorySection title="This Week&apos;s Specials!" items={items} />
    </main> );
}
 
export default Main;