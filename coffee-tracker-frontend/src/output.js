import React, { Component } from 'react';
import './App.css';
import Coffeemug from './coffeemug.js';
class Output extends Component {
  render() {

    let purchasers = [];
    this.props.data.forEach( person => {
      let purchaser = purchasers.find(purchaser => {return purchaser.name === person.name});

      if (purchaser !== undefined) {
        purchaser.purchased++
      }else {
        purchasers.push({name:person.name, purchased: 1})
      }
    })

    return (
      <div className="bigPadding">
        <ul>
          {purchasers.length <= 0
            ? "NO DB ENTRIES YET"
            : purchasers.map(purchaser => (
                <div className="outputBox" key={purchaser.name}>
                  <h2 className="coffeeMugName">{purchaser.name}:</h2>
                  <Coffeemug purchased={purchaser.purchased} name={purchaser.name} />
                </div>
              ))}
        </ul>
      </div>
    );
  }
}


export default Output;
