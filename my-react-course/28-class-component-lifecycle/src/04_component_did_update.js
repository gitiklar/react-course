import React from 'react';

// 3. This function creates an <iframe> (and YouTube player)
//    after the API code downloads.
const apiReady = new Promise((resolve , reject)=>{
  window.onYouTubeIframeAPIReady = function() {
    resolve();
  };
});

export default class Demo4 extends React.Component {
  constructor() {
    super();
    this.playRef = React.createRef(null);
    this.state = {playing: false};
    this.toggle = this.toggle.bind(this);
  }

  toggle() {
    this.setState({ playing:!this.state.playing });
  }

  componentDidUpdate(prevProps , prevState) {
    this.state.playing ? this.player.playVideo() : this.player.pauseVideo();
  }

  componentDidMount() {
    apiReady.then(()=>{
       this.player = new YT.Player(this.playRef.current , {videoId: 'dxdfIQLcWN8'});
    })
  }

  render() {
    return (
      <>
        <h1>Demo4</h1>
        <button onClick={this.toggle}>Play/pause</button>
        <div ref={this.playRef}></div>
        <h1><pre>--------------------------------------------------------------</pre></h1>
      </>
    );
  }
}









































/*
const youtubeReady = new Promise(function(resolve, reject) {
  window.onYouTubeIframeAPIReady = function() {
    resolve(YT.Player);
  };
});

export default class Demo4 extends React.Component {
  constructor(props) {
    super(props);
    this.state = { playing: false };
    this.player = null;
    this.toggle = this.toggle.bind(this);
  }

  toggle() {
    this.setState({ playing: !this.state.playing });
  }

  componentDidUpdate(prevProps, prevState) {
    if (this.state.playing) {
      this.player.playVideo();
    } else {
      this.player.pauseVideo();      
    }
  }
  
  componentDidMount() {
    youtubeReady.then((Player) => {
      this.player = new Player(this.el, {
          height: '390',
          width: '640',
          videoId: 'etBJl2vfhb4',        
      });
    });
  }

  render() {
    return (
      <div>
        <p>
          <button onClick={this.toggle}>Play / Pause</button>
          Current state: {this.state.playing ? 'Play' : 'Stop'}
        </p>

        <div ref={(el) => {this.el = el; }}></div>
      </div>
    );
  }
}
*/