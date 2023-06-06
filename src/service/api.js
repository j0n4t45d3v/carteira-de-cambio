import axios from "axios";

export const connection = axios.create({
  baseURL: "https://economia.awesomeapi.com.br/",
  headers: {
    "Content-Type": "application/json",
  }
})
