import React, { useEffect, useRef, useState } from 'react';
/*
// function component
function TextBox({text}) {
  const [myText , setMyText] = useState({text : text , changed : false});
  const [style , setStyle] = useState({});

  useEffect(()=>{
    (!myText.changed || myText.text === text) && setMyText({text : text , changed: false});
  },[text]);

  useEffect(()=>{
    setStyle(myText.text === text ? {borderBottom: "3px solid black"} : {borderBottom: "3px solid red"});
  },[myText]);

  function onChangeHandler(newText) {
    setMyText({text : newText , changed : newText === text ? false : true});
  }

  return (
    <input style={style} value={myText.text} onChange={(e) => onChangeHandler(e.target.value)}/>
  );
}
*/

class TextBox extends React.Component {
  constructor(props) {
    super(props);
    this.state = {text: props.text , changed:false};
  }

  onChangeHandler(newText) {
    newText!==this.props.text ? this.setState({text : newText , changed : true}) : this.setState({text : newText , changed : false});
  }

  static getDerivedStateFromProps(props , state) {
    if(!state.changed || state.text === props.text) return {text : props.text , changed : false};
    return null;
  }

  render() {
    this.style = this.state.text === this.props.text ? {borderBottom: "3px solid black"} : {borderBottom: "3px solid red"};
    return (
        <input style={this.style} value={this.state.text} onChange={(e) => this.onChangeHandler(e.target.value)}/>
    );
  }
}


export default class Demo3 extends React.Component {
  constructor() {
    super();
    this.state = {currentText: this.getText()};
  }

  getText() {
    const texts = ['one', 'two', 'three', 'four', 'five', 'six', 'seven'];
    return texts[Math.floor(Math.random()*texts.length)];
  }

  render() {
    return (
      <div>
        <button onClick={()=>{this.setState({currentText: this.getText()})}}>Click to change the text</button>
        <TextBox text={this.state.currentText}/>
        <TextBox text={this.state.currentText}/>
        <TextBox text={this.state.currentText}/>
        <TextBox text={this.state.currentText}/>
        <TextBox text={this.state.currentText}/>
      </div>
    )
  }
}









