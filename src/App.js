import React, { Component } from 'react'

import './App.css'
import Movie from './Movie'
import Video from './Video'

class App extends Component {
  state = {}

  componentDidMount() {
    setTimeout(() => {
      this.setState({
        movies: [
          {
            title: 'matrix',
            poster:
              'https://previews.123rf.com/images/ismagilov/ismagilov1502/ismagilov150201922/36895784-%EB%B8%94%EB%A3%A8-%EB%A7%A4%ED%8A%B8%EB%A6%AD%EC%8A%A4-%ED%81%B0-%EA%B0%80%EC%83%81-%ED%99%94%EB%A9%B4.jpg',
          },
          {
            title: 'old boy',
            poster:
              'https://upload.wikimedia.org/wikipedia/ko/thumb/4/48/Old_Boy.jpg/250px-Old_Boy.jpg',
          },
          {
            title: 'i see the evil',
            poster:
              'http://image.cine21.com/resize/cine21/poster/2010/0804/M0010007__1.jpg',
          },
          {
            title: 'star wars',
            poster:
              'https://upload.wikimedia.org/wikipedia/ko/thumb/6/6a/%EC%8A%A4%ED%83%80%EC%9B%8C%EC%A6%88_%EA%B9%A8%EC%96%B4%EB%82%9C_%ED%8F%AC%EC%8A%A4.jpg/250px-%EC%8A%A4%ED%83%80%EC%9B%8C%EC%A6%88_%EA%B9%A8%EC%96%B4%EB%82%9C_%ED%8F%AC%EC%8A%A4.jpg',
          },
          {
            title: 'load of the ling',
            poster:
              'http://image.chosun.com/sitedata/image/201711/14/2017111401718_0.jpg',
          },
        ],
      })
    }, 2000)
  }

  _renderMovies = () => {
    {
      const movies = this.state.movies.map((movie, index) => {
        return <Movie title={movie.title} poster={movie.poster} key={index} />
      })
      return movies
    }
  }

  render() {
    return (
      <div className="App">
        <Video />
        {this.state.movies ? this._renderMovies() : 'Loading'}
      </div>
    )
  }
}

export default App
