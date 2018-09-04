import React, { Component } from 'react';
import styled from 'styled-components';

class Unit extends Component {
  render() {

    let rotate = this.props.rotate;

    const Container = styled.div`
      position: absolute;
      width: 20px;
      height: 300px;
      border: 6px solid black;
      background: white;
      padding: 10px;
      z-index: 0;
      transform: rotateX('${this.props.rotate}'+ 'deg');

      top: ${this.props.top + 'px'};
      left: ${this.props.left + 'px'};
    
      &.circle {

        border-radius: 50%;
        /* border-color: palegreen;
        background: papayawhip; */

        &.theme-1 {

        /* border-color: royalblue; */
        }
      }

      &.triangle {
        width: 20px;
        height: 20px;
        border: 3px solid black;
        transform: skew(20deg, 20deg);
      }

      &.red {

        background-color: orangered;
        /* border-color: greenyellow;
        background-color: palevioletred; */
      }

    `;
    return (
      <Container className={this.props.type + ' ' + this.props.theme}></Container>
    );
  }
}

export default Unit;