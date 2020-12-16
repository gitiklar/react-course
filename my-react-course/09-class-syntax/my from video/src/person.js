import React from 'react';
import { useState } from 'react';
import _ from 'lodash';

//PersonClass
export default class PersonClass extends React.Component {
  constructor(props) {
    super(props);
    this.state = {mood: getRandomMood()};
    this.changeMood = this.changeMood.bind(this);
  }

  changeMood () {
    this.setState({mood:getRandomMood()});
  }

  render() {
    const { name } = this.props;
    const mood = this.state.mood;
    const style = { color: moods[mood] };
    return (
      <p style={style}>
        Hello. My name is {name} and I'm {mood}
        <button onClick={this.changeMood}>Change Mood</button>
      </p>
    );
  }
}

PersonClass.defaultProps = {
  name: 'Visitor',
}

//PersonHooks
export function PersonHooks(props) {
    const {name} = props;
    const [mood , setMood] = useState(getRandomMood());

    function changeMood() {
      setMood(getRandomMood());
    }

    const style = {color : moods[mood]};

    return (
        <p style={style}>
          Hello. My name is {name} and I'm {mood}
          <button onClick={changeMood}>Change Mood</button>
        </p>
    );
}

PersonHooks.defaultProps = {
  name: 'Visitor',
}


//General definitions for 2 components
const moods = {
  happy: 'pink',
  sad: 'blue',
  angry: 'red',
  tranquil: 'green',
}

function getRandomMood() {
  return _.sample(Object.keys(moods));  
}
