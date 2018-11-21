import React, {Component} from 'react';
import './App.scss';
import {
  Header
} from 'luna-react';
import {Sainsburys} from "luna-images";
import {OverflowMenu, Settings} from "luna-icons";
import FoodItemContainer from "./foodItem/FoodItemContainer";
import onePercentMilk from "./assets/one-percent-milk.JPEG";
import semiSkimmedMilk from "./assets/semi-skimmed-milk.jpeg";
import bakedBeans from "./assets/baked-beans.jpeg";
import betterBakedBeans from "./assets/baked-beans-better.jpeg";
import fruitPastels from "./assets/fruit-pastels.jpeg";
import fruitPastelsBetter from "./assets/fruit-pastels-better.jpeg";
import mushrooms from "./assets/mushrooms.jpeg";
import superMushrooms from "./assets/super mushrooms.JPG";
import pasta from "./assets/JS SPAGHETTI PASTA 500G.JPEG";
import betterPasta from "./assets/high-fibre-sapghetti.jpeg";
import softWhiteCheese from "./assets/JS Soft White Cheese 300g.jpeg";
import lightSoftWhiteCheese from "./assets/lighter-soft-cheese.jpeg";
import biscuits from "./assets/McVitie%27s Digestives The Original 250g.jpeg";
import lightBiscuits from "./assets/McVitie%27s Digestives Light 300g.jpeg";
import bread from "./assets/JS Medium sliced white bread.jpeg";
import brownBread from "./assets/JS Medium sliced wholemeal bread.jpeg";
import mayonnaise from "./assets/MAYONNAISE.jpeg";
import lightMayonnaise from "./assets/JS REDUCED FAT MAYONNAISE 480.jpeg";
import oliveSpread from "./assets/JS OLIVE SPREAD 500.jpeg";
import lighterOliveSpread from "./assets/lighter oliver spread.JPG";
import NutritionKey from "./foodItem/NutritionKey";

class App extends Component {
  render() {
    return (
        <div className="App">
          <div style={{overflow: 'hidden', minHeight: '12rem'}}>
            <Header
                iconNav={[
                  <a href="#settings" title="Settings"
                     onClick={e => e.preventDefault()}>
                    <Settings/>
                  </a>,
                  <a href="#user" title="Profile"
                     onClick={e => e.preventDefault()}>
                    <OverflowMenu/>
                  </a>,
                ]}
                topBar={{
                  logo: (
                      <Sainsburys height="25" width="95"
                                  className="ln-u-display-block"/>
                  ),
                  items: [<a href="#more">Healthy Eating Hackathon</a>],
                }}
                style={{position: 'static'}}
            />
          </div>
          <body>
          <div>
            <h3>Swap for healthier options</h3>
            <p>You told us you wanted to have less sugar and salt in your diet,
              so here are some options
              for you.</p>
            <div className="key">
              <NutritionKey/>
            </div>

            <div>
              <FoodItemContainer
                  foodItem="JS BAKED BEANS IN TOMATO SAUCE 200"
                  healthyOption="JS BAKED BEANS IN RED SUGAR & SALT 200"
                  nectarPoints="10"
                  imgSrc={bakedBeans}
                  healthyImgSrc={betterBakedBeans}
                  reasonToSwap={"Less sugar"}/>
              <FoodItemContainer
                  foodItem="ROWNTREES FRUIT PASTILLES BAG 150"
                  healthyOption="ROWNTREES PASTILLES REDUCED SUGAR 110"
                  nectarPoints="10"
                  imgSrc={fruitPastels}
                  healthyImgSrc={fruitPastelsBetter}/>
              <FoodItemContainer
                  foodItem="JS British semi skimmed milk 2 pint"
                  healthyOption="JS British 1% Milk 2 Pint 1.136L"
                  nectarPoints="10"
                  imgSrc={semiSkimmedMilk}
                  healthyImgSrc={onePercentMilk}/>
              <FoodItemContainer
                  foodItem="Sainsbury's Closed Cup White Mushrooms 300g "
                  healthyOption="Sainsburys closed cup white super mushrooms 300g"
                  nectarPoints="10"
                  imgSrc={mushrooms}
                  healthyImgSrc={superMushrooms}/>
              <FoodItemContainer
                  foodItem="JS Soft White Cheese 300g"
                  healthyOption="JS HIGH FIBRE WHITE SPAGHETTI 500"
                  nectarPoints="10"
                  imgSrc={pasta}
                  healthyImgSrc={betterPasta}/>
              <FoodItemContainer
                  foodItem="JS Light soft cheese "
                  healthyOption="JS HIGH FIBRE WHITE SPAGHETTI 500"
                  nectarPoints="10"
                  imgSrc={softWhiteCheese}
                  healthyImgSrc={lightSoftWhiteCheese}/>
              <FoodItemContainer
                  foodItem="McVitie's Digestives The Original 250g"
                  healthyOption="McVitie's Digestives Light 300g"
                  nectarPoints="10"
                  imgSrc={biscuits}
                  healthyImgSrc={lightBiscuits}/>
              <FoodItemContainer
                  foodItem="JS Medium sliced white bread"
                  healthyOption="JS Medium sliced wholemeal bread"
                  nectarPoints="10"
                  imgSrc={bread}
                  healthyImgSrc={brownBread}/>
              <FoodItemContainer
                  foodItem="JS MAYONNAISE 500"
                  healthyOption="JS REDUCED FAT MAYONNAISE 480"
                  nectarPoints="10"
                  imgSrc={mayonnaise}
                  healthyImgSrc={lightMayonnaise}/>
              <FoodItemContainer
                  foodItem="JS OLIVE SPREAD 500"
                  healthyOption="JS OLIVE LIGHT SPREAD 500"
                  nectarPoints="10"
                  imgSrc={oliveSpread}
                  healthyImgSrc={lighterOliveSpread}/>
            </div>
          </div>
          </body>
        </div>
    );
  }
}

export default App;
