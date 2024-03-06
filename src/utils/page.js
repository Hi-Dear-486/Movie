"use client ";
import axios from "axios";

// this url base key when we will search then it will be provide BASE_URL
// search example api request
const BASE_URL = "https://api.themoviedb.org/3";

const TMDB_TOKEN = import.meta.env.VITE_APP_TMDB_TOKEN;

const headers = {
  // dont forget space in 'bearer '
  Authorization: "bearer " + TMDB_TOKEN,
};

// fetch data from api
export const fetchDatafromApi = async (url, params) => {
  try {
    const { data } = await axios.get(BASE_URL + url, {
      headers,
      params,
    });
    return data;
  } catch (error) {
    console.log(error);
    return error;
  }
};
