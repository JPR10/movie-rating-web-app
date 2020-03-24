import React, { Component } from 'react';

class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      movies: [],
    }
  }

  componentDidMount() {
    fetch('https://api.airtable.com/v0/appxT2va454pW7x9i/favourites?api_key=keycR5bidgzjCEzFn')
    .then((resp) => resp.json())
    .then(data => {
      this.setState({ movies: data.records });
    }).catch(err => {
      // Error message
    });
  }

  render() {
    return (
      <div className="container mt-5 mb-5">
        <div className="row">
          <div className="col">
            <div className="card-deck">
              {this.state.movies.map(movie => <MovieCard {...movie.fields} />)}
            </div>
          </div>
        </div>
      </div>
    );
  }
}

export default App;

const MovieCard = ({ title, year, description, imageURL }) => (
  <div className="card">
    <img className="card-img-top" src={imageURL[0].url} alt="Movie Poster" />
    <div className="card-body">
    <h5 className="card-title">{title}</h5>
    <p className="card-text">{description}</p>
      <p className="card-text">
        <small className="text-muted">{year}</small>
      </p>
    </div>
  </div>
);
