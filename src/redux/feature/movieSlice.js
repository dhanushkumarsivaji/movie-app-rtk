import { createSlice } from "@reduxjs/toolkit";


const getRandom = () => `${Math.floor(Math.random() * 16777215).toString(16)}`;

const movieSlice = createSlice({
  name: "movie",
  initialState: {
    moviesList: [],
    movie: {},
    test: 'test'
  },
  reducers: {
    getMovies(name) {
      return name;
    },
    setMovies: (state, action) => {
      state.moviesList = action.payload;
    },
    getMovie(id) {
      return id;
    },
    setMovie: (state, action) => {
      state.movie = action.payload;
    },
    updateTest: (state, action) => {
      state.test = getRandom()
    }
  },
});

export const { getMovies, setMovies, setMovie, getMovie, updateTest } = movieSlice.actions;

export default movieSlice.reducer;
