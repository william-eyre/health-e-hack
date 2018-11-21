import React from "react"
import {Card, FilledButton} from "luna-react";
import "./foodItemContainer.scss";

class FoodItemContainer extends React.Component {

  state = {
    swapped: false
  };

  swapItem = () => {
    this.setState({swapped: !this.state.swapped})
  };

  render() {
    const foodItem = this.props.foodItem;
    const healthyOption = this.props.healthyOption;

    return (
        !this.state.swapped ?
            <div className="food-item-container" onClick={this.swapItem}>
              <Card>
                <div>
                  <img src={this.props.imgSrc} alt="unhealthyOption"/>
                </div>
                <h3>{foodItem}</h3>
                <p></p>
              </Card>

              <div className="swap-button">
                <FilledButton>
                  Swap
                </FilledButton>
              </div>

              <Card>
                <div>
                  <img src={this.props.healthyImgSrc} alt="healthyOption"/>
                </div>
                <h3>{healthyOption}</h3>
                <p></p>
              </Card>
            </div>
            :
            <div className="food-item-container" onClick={this.swapItem}>

              <Card>
                <div>
                  <img src={this.props.healthyImgSrc} alt="healthyOption"/>
                </div>
                <h3>{healthyOption}</h3>
                <p></p>
              </Card>

              <div className="swap-button">
                <FilledButton>
                  Swap
                </FilledButton>
              </div>

              <Card>
                <div>
                  <img src={this.props.imgSrc} alt="unhealthyOption"/>
                </div>
                <h3>{foodItem}</h3>
                <p></p>
              </Card>


            </div>

    )
  }
}

export default FoodItemContainer