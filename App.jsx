import "./App.css";
import React from "react";
import { Switch, BrowserRouter as Router, Route } from "react-router-dom";
import X1Homepage from "./components/X1Homepage";

function App() {
  return (
    <Router>
      <Switch>
        <Route path="/:path(|1-homepage-1)">
          <X1Homepage {...x1HomepageData} />
        </Route>
      </Switch>
    </Router>
  );
}

export default App;
const tabData = {
    number: "1",
};

const cTAsData = {
    tabProps: tabData,
};

const tab2Data = {
    number: "3",
};

const cTAs2Data = {
    tabProps: tab2Data,
};

const tab3Data = {
    number: "2",
};

const tab4Data = {
    number: "0",
};

const cTAs3Data = {
    tabProps: tab4Data,
};

const tab5Data = {
    number: "0",
};

const tab6Data = {
    number: "0",
};

const tab7Data = {
    number: "0",
};

const cTAs32Data = {
    className: "ct-as-3-2",
    tabProps: tab7Data,
};

const cupcakeInfoData = {
    title: "Salty Caramel",
    subtitle: "Caramel cake with a buttery caramel cream cheese frosting topped with fleur de sel.",
    cTAs3Props: cTAs32Data,
};

const tab8Data = {
    number: "0",
};

const cTAs33Data = {
    className: "ct-as-4",
    tabProps: tab8Data,
};

const tab9Data = {
    number: "0",
};

const cTAs34Data = {
    className: "ct-as-3-3",
    tabProps: tab9Data,
};

const tab10Data = {
    number: "0",
};

const cTAs35Data = {
    className: "ct-as-3-4",
    tabProps: tab10Data,
};

const tab11Data = {
    number: "0",
};

const cTAs36Data = {
    tabProps: tab11Data,
};

const x1HomepageData = {
    x1Homepage: "https://anima-uploads.s3.amazonaws.com/projects/611dc299e628f9fc39e98991/releases/611dc4ace628f9fc39e98999/img/bg-1@1x.png",
    shop: "Shop",
    ourStory: "Our story",
    whyMissCupcake: "Why Miss cupcake",
    number: "8",
    title: "Miss cupcake",
    subtitle: "We are proud to offer cupcakes and cakes that are freshly baked within hours, if not minutes, for your enjoyment.",
    image95: "https://anima-uploads.s3.amazonaws.com/projects/611dc299e628f9fc39e98991/releases/611dc4ace628f9fc39e98999/img/image-95@1x.png",
    image1: "https://anima-uploads.s3.amazonaws.com/projects/611dc299e628f9fc39e98991/releases/611dc4ace628f9fc39e98999/img/image-1@2x.png",
    image2: "https://anima-uploads.s3.amazonaws.com/projects/611dc299e628f9fc39e98991/releases/611dc4ace628f9fc39e98999/img/image-2@2x.png",
    title2: "The Simple, Sweet Life",
    subtitle2: "Our cupcakes are always made with the finest ingredients, creating a spark that makes your taste buds dance. You’ll want to indulge in each and every decadent flavor.",
    whyMissCupcake2: "WHY MISS CUPCAKE",
    title3: "Make your day a little sweeter",
    mini_Party_Catering_Carrot_Cupcake_: "https://anima-uploads.s3.amazonaws.com/projects/611dc299e628f9fc39e98991/releases/611dc4ace628f9fc39e98999/img/mini-party-catering-carrot-cupcake-large-2@2x.png",
    title4: "Carrot",
    subtitle3: "Walnut-studded carrot cake with cinnamon cream cheese frosting",
    image97: "https://anima-uploads.s3.amazonaws.com/projects/611dc299e628f9fc39e98991/releases/611dc4ace628f9fc39e98999/img/image-97@2x.png",
    title5: "Red Velvet",
    subtitle4: "A chocolate sponge, coloured naturally with beetroot and topped off with cream cheese.",
    cupcake3: "https://anima-uploads.s3.amazonaws.com/projects/611dc299e628f9fc39e98991/releases/611dc4ace628f9fc39e98999/img/cupcake-3@2x.png",
    title6: "Mint Chip",
    subtitle5: "Homemade chocolate cupcakes topped with thick & creamy mint chocolate chip frosting.",
    addToCart: "ADD TO CART",
    image3: "https://anima-uploads.s3.amazonaws.com/projects/611dc299e628f9fc39e98991/releases/611dc4ace628f9fc39e98999/img/image-3@2x.png",
    title7: "Pink strawberry",
    subtitle6: "A fluffy strawberry cupcake with strawberry buttercream frosting and chocolate syrup.",
    image4: "https://anima-uploads.s3.amazonaws.com/projects/611dc299e628f9fc39e98991/releases/611dc4ace628f9fc39e98999/img/image-4@2x.png",
    title8: "Marshmallow",
    subtitle7: "A super chocolatey cupcake base with a soft marshmallowy buttercream topping.",
    addToCart2: "ADD TO CART",
    image5: "https://anima-uploads.s3.amazonaws.com/projects/611dc299e628f9fc39e98991/releases/611dc4ace628f9fc39e98999/img/image-5@2x.png",
    title9: "Dark Chocolate",
    subtitle8: "Belgian chocolate cake with sweet chocolate frosting and cheery.",
    addToCart3: "ADD TO CART",
    image6: "https://anima-uploads.s3.amazonaws.com/projects/611dc299e628f9fc39e98991/releases/611dc4ace628f9fc39e98999/img/image-6@2x.png",
    image7: "https://anima-uploads.s3.amazonaws.com/projects/611dc299e628f9fc39e98991/releases/611dc4ace628f9fc39e98999/img/image-7@2x.png",
    title10: "Gluten Free Velvet",
    subtitle9: "A gluten free twist on our classic red velvet, topped off with cream cheese.",
    image8: "https://anima-uploads.s3.amazonaws.com/projects/611dc299e628f9fc39e98991/releases/611dc4ace628f9fc39e98999/img/image-8@2x.png",
    title11: "Cinnamon",
    subtitle10: "Lightly spiced buttermilk cake with cinnamon cream cheese frosting with cinnamon sugar.",
    image9: "https://anima-uploads.s3.amazonaws.com/projects/611dc299e628f9fc39e98991/releases/611dc4ace628f9fc39e98999/img/image-9@2x.png",
    title12: "Totally nuts",
    subtitle11: "A sweet hazelnut paste with nutella butter cream and chopped hazelnuts on the top.",
    image10: "https://anima-uploads.s3.amazonaws.com/projects/611dc299e628f9fc39e98991/releases/611dc4ace628f9fc39e98999/img/image-10@2x.png",
    title13: "Pink Vanilla",
    subtitle12: "Soft, fluffy, and extra moist creamy vanilla buttercream with extra sprinkles",
    title14: "once upon a time..",
    subtitle13: "The art of baking runs deep in our family. Growing up on our family we learned from the best. Our mom was an amazing baker. She not only taught us how to bake, she passed along her values of quality, honesty and integrity.",
    ourStory2: "OUR STORY",
    image11: "https://anima-uploads.s3.amazonaws.com/projects/611dc299e628f9fc39e98991/releases/611dc4ace628f9fc39e98999/img/image-11@1x.png",
    title15: <>Miss<br />cupcake</>,
    copyright: "©",
    subtitle14: "Shop",
    subtitle15: "Our story",
    subtitle16: "Why Miss cupcake",
    subtitle17: "MISS CUPCAKES 2020",
    subtitle18: "Suger up your Inbox",
    inputType: "text",
    inputPlaceholder: "Email address",
    subtitle19: "Privacy policy",
    subtitle20: "Cookies policy",
    subtitle21: "Terms of use",
    place: "SEND",
    cTAsProps: cTAsData,
    cTAs2Props: cTAs2Data,
    tabProps: tab3Data,
    cTAs3Props: cTAs3Data,
    tab2Props: tab5Data,
    tab3Props: tab6Data,
    cupcakeInfoProps: cupcakeInfoData,
    cTAs32Props: cTAs33Data,
    cTAs33Props: cTAs34Data,
    cTAs34Props: cTAs35Data,
    cTAs35Props: cTAs36Data,
};

