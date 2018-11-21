import React, { Component } from 'react';
import './App.scss';
import {
  Header
} from 'luna-react';
import {Sainsburys} from "luna-images";
import {OverflowMenu, Settings} from "luna-icons";
import FoodItemContainer from "./foodItem/FoodItemContainer";

class App extends Component {
  render() {
    return (
        <div className="App">
          <div style={{ overflow: 'hidden', minHeight: '12rem' }}>
            <Header
                iconNav={[
                  <a href="#settings" title="Settings" onClick={e => e.preventDefault()}>
                    <Settings />
                  </a>,
                  <a href="#user" title="Profile" onClick={e => e.preventDefault()}>
                    <OverflowMenu />
                  </a>,
                ]}
                topBar={{
                  logo: (
                      <Sainsburys height="25" width="95" className="ln-u-display-block" />
                  ),
                  items: [<a href="#more">Healthy Eating Hackathon</a>],
                }}
                style={{ position: 'static' }}
            />
          </div>
          <body>
          <div>
            <FoodItemContainer/>
            <FoodItemContainer/>
            <FoodItemContainer/>
            <FoodItemContainer/>
            <FoodItemContainer/>
          </div>
          </body>
        </div>
    );
  }
}

export default App;
