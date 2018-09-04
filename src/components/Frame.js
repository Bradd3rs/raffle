import React, { Component } from 'react';
import styled from 'styled-components';

import Canvas from './Canvas';

class Frame extends Component {
  constructor(props) {
    super(props);

    this.state = {
      count: 10,
      total: [0]
    }
  }

  componentDidMount() {

    let array = [];

    for(let i = 0; i < this.state.count; i++) {
      array.push(i);
      this.setState(() => ({ total: array }))
    }
  }

  render() {

    const Container = styled.div`
      position: relative;
      display: flex;
      justify-content: space-evenly;
      flex-wrap: wrap;
    `;

    return (
      <Container>
        <Canvas total={this.state.total} theme={'theme-1'} />
        <Canvas total={this.state.total} />
        <Canvas total={this.state.total} theme={'theme-1'} />
        <Canvas total={this.state.total} />
        <Canvas total={this.state.total} theme={'theme-1'} />
        <Canvas total={this.state.total} />
        <Canvas total={this.state.total} theme={'theme-1'} />
        <Canvas total={this.state.total} />
        <Canvas total={this.state.total} theme={'theme-1'} />
        <Canvas total={this.state.total} />
        <Canvas total={this.state.total} theme={'theme-1'} />
        <Canvas total={this.state.total} />
        <Canvas total={this.state.total} theme={'theme-1'} />
        <Canvas total={this.state.total} />
        <Canvas total={this.state.total} theme={'theme-1'} />
        <Canvas total={this.state.total} />
        <Canvas total={this.state.total} theme={'theme-1'} />
        <Canvas total={this.state.total} />
        <Canvas total={this.state.total} theme={'theme-1'} />
        <Canvas total={this.state.total} />
        <Canvas total={this.state.total} theme={'theme-1'} />
        <Canvas total={this.state.total} />
        <Canvas total={this.state.total} theme={'theme-1'} />
        <Canvas total={this.state.total} />
      </Container>
    );
  }
}

export default Frame;