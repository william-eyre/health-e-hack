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
              <div>
                <Card>
                  <p>
                    <img src={this.props.imgSrc} alt="unhealthyOption"/>
                  </p>
                  <h4>{foodItem}</h4>
                </Card>
              </div>

              <div className="swap-button">
                <FilledButton>
                  Swap
                </FilledButton>
              </div>

              <div>
                <Card>
                  <p>
                    <img src={this.props.healthyImgSrc} alt="healthyOption"/>
                  </p>
                  <h4>{healthyOption}</h4>
                  <p>Swap now for {this.props.nectarPoints} Nectar points</p>
                  <p>{this.props.reasonToSwap}</p>
                </Card>
              </div>
            </div>
            :
            <div className="food-item-container" onClick={this.swapItem}>

              <div>
                <Card>
                  <p>
                    <img src={this.props.healthyImgSrc} alt="healthyOption"/>
                  </p>
                  <h4>{healthyOption}</h4>
                </Card>
              </div>

              <div className="swap-button">
                <FilledButton>
                  Undo
                </FilledButton>
              </div>

              <div>
                <Card>
                  <p>
                    <img src={this.props.imgSrc} alt="unhealthyOption"/>
                  </p>
                  <h4>{foodItem}</h4>
                </Card>
              </div>
            </div>
    )
  }
}

export default FoodItemContainer