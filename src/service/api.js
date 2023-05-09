import axios from "axios";

export const api = axios.create({
  baseURL: "https://rocketmovies-api-trai.onrender.com"
})

//agora, quando eu quiser chamar uma rota específica, eu usarei apenas esse código:
//api.get("/users/:id")