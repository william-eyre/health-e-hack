import React from "react"
import {Card} from "luna-react";
import "../App.scss";
import {Tick} from "luna-icons";

class NutritionKey extends React.Component {

  render() {

    return (
        <Card className="nutrition-key">
          <h3>Nutrition key</h3>
          <ul>
            <li><Tick style={{color: 'brown'}}/> More fibre</li>
            <li><Tick style={{color: 'blue'}}/>Less sugar</li>
            <li><Tick style={{color: 'Navy Blue'}}/>Less Salt</li>
            <li><Tick style={{color: 'Yellow'}}/>Less fat</li>
            <li><Tick style={{color: 'purple'}}/>More vitamins</li>
            <li><Tick style={{color: 'green'}}/>Lower calories</li>
          </ul>
        </Card>
    )
  }
}

export default NutritionKey