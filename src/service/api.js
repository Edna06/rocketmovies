import axios from "axios";

export const api = axios.create({
  baseURL: "http://localhost:3333"
})

//agora, quando eu quiser chamar uma rota específica, eu usarei apenas esse código:
//api.get("/users/:id")