import React from 'react';
import './App.css';
import ShapeCards from '../src/components/ShapeCards';
import shapes from './shapes.json';
import Navbar from '../src/components/Navbar';
import Title from '../src/components/Title';
import Wrapper from '../src/components/Wrapper';
import Footer from '../src/components/Footer';

class App extends React.Component {
  state = {
    message: "",
    highScore: 0,
    currentScore: 0,
    shapes: shapes,
    unselectedShapes: shapes
  };

  // src Laurens Holst via https://stackoverflow.com/questions/2450954/how-to-randomize-shuffle-a-javascript-array
  shuffleArray = array => {
    for (let i = array.length - 1; i > 0; i--) {
      let j = Math.floor(Math.random() * ( i + 1));
      [array[i], array[j]] = [array[j], array[i]];
    };
  }; 

  selectShape = name => {
    const findShape = this.state.unselectedShapes.find(item => item.name === name);

    if (findShape === undefined) {
      // Already clicked on the animal
      this.setState({
        message: "OOPS! Click Any Shape to Try Again.",
        highScore: (this.state.currentScore > this.state.highScore) ? this.state.currentScore : this.state.highScore,
        currentScore: 0,
        shapes: shapes,
        unselectedShapes: shapes
      });
    } else {
      // Success, haven't clicked before
      const newShape = this.state.unselectedShapes.filter(item => item.name !== name);

      this.setState({
        message: "",
        currentScore: this.state.currentScore + 1,
        shapes: shapes,
        unselectedShapes: newShape
      });
    }
    this.shuffleArray(shapes);
  }

  render() {
    return (
      <Wrapper>
        <Navbar
          message = {this.state.message}
          currentScore = {this.state.currentScore}
          highScore = {this.state.highScore}
        />
        <Title/>
        <div className="containingDiv">
          {this.state.shapes.map(character => (
            <ShapeCards 
              name={character.name} 
              id={character.id}
              key={character.id}
              image={character.image}
              selectShape={this.selectShape}
              currentScore={this.state.currentScore}
            />
          ))}
        </div>
        <Footer/>
      </Wrapper>
    );
  }
     
 
}

export default App;
