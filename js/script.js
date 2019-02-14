var movies = [
  {
    id: 1,
    title: 'Patch Adams',
    desc: 'film o prawdziwym powołaniu',
    src: '../images/patch.jpg'
  },
  {
    id: 2,
    title: 'Król Lew',
    desc: 'Film o królu sawanny',
    src: '../images/krol.jpg'
  },
  {
    id: 3,
    title: 'Buntownik z wyboru',
    desc: 'Film psychologiczny',
    src: '../images/buntownik.jpg'
  },
  {
    id: 4,
    title: 'Przebudzenia',
    desc: 'Film o walce z chorobami',
    src: '../images/przebudzenia.jpg'
  }
];


var Movie = React.createClass({
  propTypes: {
    id: React.PropTypes.number.isRequired,
    title: React.PropTypes.string.isRequired,
    desc: React.PropTypes.string.isRequired,
    src: React.PropTypes.string.isRequired
  },


  render: function(){
    return (
      React.createElement('li', {key: this.props.id},
        React.createElement(MovieTitle, {title: this.props.title}),
        React.createElement(MovieDescription, {desc: this.props.desc}),
        React.createElement(MovieSrc, {src: movies.src})
      )
    );
  }
});


var MovieTitle = React.createClass({
  propTypes: {
     title: React.PropTypes.string.isRequired
  },
  render: function(){
    return(
      React.createElement('h1', {}, this.props.title)
    );
  }
});

var MovieDescription = React.createClass({
  propTypes: {
    desc: React.PropTypes.string.isRequired
  },
  render: function(){
    return (
      React.createElement('p', {}, this.props.desc)
    );
  }
});

var MovieSrc = React.createClass({
  propTypes: {
    src: React.PropTypes.string.isRequired
  },
  render: function(){
    return (
      React.createElement('src', {src: this.props.src})
    );
  }
});

var element = 
  React.createElement('div', {},
    React.createElement('h1', {}, 'List of movies'),
    React.createElement(Movie, {}
    )
  );

ReactDOM.render(element, document.getElementById('app'));
