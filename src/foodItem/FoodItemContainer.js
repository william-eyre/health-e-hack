import React from "react"
import FoodItem from "./FoodItem";
import {FilledButton} from "luna-react";
import "./foodItemContainer.scss";

class FoodItemContainer extends React.Component {

  render() {
    return (
        <div className="food-item-container">
          <FoodItem/>
          <div className="swap-button">
            <FilledButton>
              Swap
            </FilledButton>
          </div>
          <FoodItem/>
        </div>
    )
  }
}

export default FoodItemContainer