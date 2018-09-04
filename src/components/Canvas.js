import React, { Component } from 'react';
import styled from 'styled-components';

import Unit from './Unit';

class Canvas extends Component {
  render() {
    const Container = styled.div`
      position: relative;
      width: 200px;
      height: 200px;
      margin: 10px;
      border: 6px solid black;
      border-radius: 50%;
      overflow: hidden;
      background: black;
    `;
    return (
      
      <Container>
        {
          this.props.total.map((unit, i) => {

            let top = Math.floor(Math.random() * 200); 
            let left = Math.floor(Math.random() * 200); 
            let rotate = Math.floor(Math.random() * 360); 
            let type = ((Math.floor(Math.random() * 5) === 2) ? 'red' : '');
            let theme = this.props.theme;

            return (
              <Unit 
                key={i} 
                top={top} 
                left={left} 
                type={type} 
                theme={this.props.theme}
                rotate={rotate} />
            )
          })
        }
      </Container>
    );
  }
}

export default Canvas;