import React from "react";
import "./Home.css";
import Product from "./Product";
function Home() {
  return (
    <div className="home">
      <div className="home__container">
        <img
          className="home__image"
          src="https://m.media-amazon.com/images/I/61TD5JLGhIL._SX3000_.jpg"
          alt=""
        />
        <div className="home__row">
          <Product
            id="12321341"
            title="The lean startup"
            price={29.99}
            rating={5}
            image="https://images-na.ssl-images-amazon.com/images/I/51Zymoq7UnL._AC_SY400_.jpg"
          />
          <Product
            id="49538094"
            title="Kenwood   kMix Stand Mixer for Baking, Stylish Kitchen Mixer with K-beater, Dough Hook and Whishk, 5 Litre Glass Bowl"
            price={239}
            rating={4}
            image = "https://kenwood-shop.com.ua/modules/images/thmb_386/kenwood_kmx_750_ab_kmix_a.jpg"
          />
        </div>
        <div className="home__row">
          <Product
           id="4903850"
           title="Samsung LC49RG90SSUXEN 49' Curved LED Gaming Monitor"
           price={199.99}
           rating={3}
           image = "https://content1.rozetka.com.ua/goods/images/big/133898276.jpg" />
          <Product
           id="23445930"
           title="Amazon Echo (3rd generation) | Smart speaker with Alexa, Characoal Fabric"
           price={98.99}
           rating={5}
           image = "https://mbuy24.com/products_pic/thumb/138/892/1853407-1966104024.jpg" />
          <Product
           id="3254354345"
           title="New Apple iPad Pro (12.9-inch, Wi-fi, 128GB) - Silver (4th Generation)"
           price={598.99}
           rating={4}
           image = "https://content.rozetka.com.ua/goods/images/big/173886513.jpg" />
        </div>
        <div className="home__row">
          <Product
             id="90829332"
             title="Asus Tuf Gaming F15 (144Hz)"
             price={1000}
             rating={3}
             image="https://www.ixbt.com/img/r30/00/02/52/41/cover.jpg" 
          />
        </div>
      </div>
    </div>
  );
}

export default Home;
