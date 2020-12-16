import React from 'react';

export default class Person extends React.Component {
    constructor(props) {
      super(props);
      const {name , live , likes , age , favoriteColors , show} = props;
    }

    render() {
      const joincolors = this.props.favoriteColors.join('-');
      const nextYear = this.props.age + 1;

      if(!this.props.show) return false;

      return (
        <>
          <h2>Hello! My name is: {this.props.name} I live in: {this.props.live} love {this.props.likes} and my favorite colors is: {joincolors}</h2>
          <p>Next year I'll be {nextYear} years old</p>
        </>
      );
    }
}

Person.defaultProps = {
  live:'Israel',
  likes:'react',
  age:20,
  favoriteColors: ['black' , 'pink'],
}
