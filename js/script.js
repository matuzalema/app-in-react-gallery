var movies = [
  {
    id: 1,
    title: 'Buntownik z wyboru',
    desc: 'Will, matematyczny geniusz gardzący formalnym wykształceniem, zostaje oskarżony o pobicie policjanta. Profesor MIT, świadomy talentu chłopaka, proponuje mu, aby w zamian za zwolnienie z aresztu podjął naukę i terapię psychologiczną. ',
    src: 'images/buntownik.jpg'
  },
  {
    id: 2,
    title: 'Przebudzenia',
    desc: 'Oparta na prawdziwych wydarzeniach opowieść o lekarzu, który za pomocą eksperymentalnego leku przywracał do świadomości pogrążonych w śpiączce pacjentów.',
    src: 'images/przebudzenia.jpg'
  },
  {
    id: 3,
    title: 'Nietykalni',
    desc: 'Sparaliżowany milioner zatrudnia do opieki młodego chłopaka z przedmieścia, który właśnie wyszedł z więzienia.',
    src: 'images/nietykalni.jpg'
  },
  {
    id: 4,
    title: 'Forrest Gump',
    desc: 'Historia życia Forresta, chłopca o niskim ilorazie inteligencji z niedowładem kończyn, który staje się miliarderem i bohaterem wojny w Wietnamie.',
    src: 'images/forrest.jpg'
  },
  {
    id: 5,
    title: 'Patch Adams',
    desc: 'Po nieudanej próbie samobójczej zakończonej pobytem w szpitalu psychiatrycznym Patch postanawia zostać lekarzem. Niekonwencjonalne podejście do zawodu przysparza mu tyluż przyjaciół, co wrogów. ',
    src: 'images/patch.jpg'
  },
];


var Movie = React.createClass({
  propTypes: {
  movie: React.PropTypes.object.isRequired 
  },


  render: function(){
    return (
      React.createElement('li', {key: this.props.movie.id},
        React.createElement(MovieTitle, {title: this.props.movie.title}),
        React.createElement(MovieDescription, {desc: this.props.movie.desc}),
        React.createElement(MovieSrc, {src: this.props.movie.src})
      )
    );
  }
});


var MovieTitle = React.createClass({
  propTypes: {
     title: React.PropTypes.string.isRequired,
  },
  render: function(){
    return(
      React.createElement('h2', {}, this.props.title)
    );
  }
});

var MovieDescription = React.createClass({
  propTypes: {
    desc: React.PropTypes.string.isRequired,
  },
  render: function(){
    return (
      React.createElement('p', {}, this.props.desc)
    );
  }
});

var MovieSrc = React.createClass({
  propTypes: {
    src: React.PropTypes.string.isRequired,
  },
  render: function(){
    return (
      React.createElement('img', {src: this.props.src})
    );
  }
});

var moviesElements = movies.map(function(movie){
  return (
    React.createElement(Movie, {key: movie.id, movie: movie})
    );
});

var MoviesList = React.createClass({
  render: function(){
    return (
      React.createElement('ul', {}, moviesElements));
  }
});

var element = 
  React.createElement('div', {},
    React.createElement('h1', {}, 'List of movies'),
    React.createElement(MoviesList, {}
    )
  );

ReactDOM.render(element, document.getElementById('app'));
