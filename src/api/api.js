import axios from 'axios'

const HOST = 'https://node-douban-api.herokuapp.com'

export const API_TYPE = {
  movie: {
    in_theaters: 'in_theaters',
    coming_soon: 'coming_soon'
  }
}

export function fetchMovies (type, start = 0, count = 20) {
  return new Promise((resolve, reject) => {
    axios.get(`${HOST}/movie/${type}?start=${start}&count=${count}`)
        .then((response) => {
          return resolve(response.data)
        })
  })
}

export function fetchMovieDetail (id) {
  return new Promise((resolve, reject) => {
    axios.get(`${HOST}/movie/subject/${id}`)
      .then((response) => {
        return resolve(response.data)
      })
  })
}

export function fetchSearchMovie (query, start = 0) {
  return new Promise((resolve, reject) => {
    axios.get(`${HOST}/movie/search?q=${query}&start=${start}`)
      .then((response) => {
        return resolve(response.data)
      })
  })
}
