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
            <li><Tick style={{color: '#ff3737'}}/> More fibre</li>
            <li><Tick style={{color: 'blue'}}/>Less sugar</li>
            <li><Tick style={{color: '#5ffffa'}}/>Less Salt</li>
            <li><Tick style={{color: '#daa520'}}/>Less fat</li>
            <li><Tick style={{color: 'purple'}}/>More vitamins</li>
            <li><Tick style={{color: 'green'}}/>Less calories</li>
          </ul>
        </Card>
    )
  }
}

export default NutritionKey