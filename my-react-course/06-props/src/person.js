import React from 'react';

export default function Person(props) {
  const {name , live , likes , age , favoriteColors , show} = props;
  const nextYear = age + 1;
  const joincolors = favoriteColors.join('-');
  if(!show) return false;

  return (
    <>
    <h2>Hello! My name is: {name} I live in: {live} love {likes} and my favorite colorsis: {joincolors}</h2>
    <p>Next year I'll be {nextYear} years old</p>
    </>
  );
}

Person.defaultProps = {
  live:'Israel',
  likes:'react',
  age:20,
  favoriteColors: ['black' , 'pink'],
}
