import axios from "axios"

const baseUrl = "/api/recipes"

const getAll = () => {
  const req = axios.get(baseUrl)
  console.log("request", req)

  return req
    .then((res) => res.data)
    .catch((error) => {
      console.log("fail", error)
    })
}

const getOne = (id) => {
  const req = axios.get(`${baseUrl}/${id}`)
  console.log("request", req)
  return req
    .then((res) => res.data)
    .catch((err) => {
      console.log("fail", err)
    })
}

const createRecipe = (newRecipe) => {
  const req = axios.post(baseUrl, newRecipe)

  return req
    .then((res) => res.data)
    .then((data) => {
      console.log(data, "has been added")
      return data
    })
    .catch((error) => {
      console.log(error.response.data.error)
      throw Error(error.response.data.error)
    })
}

const updateRecipe = (id, newRecipe) => {
  const req = axios.put(`${baseUrl}/${id}`, newRecipe)
  return req.then((res) => res.data)
}

const deleteRecipe = (id, recipe) => {
  const req = axios.delete(`${baseUrl}/${id}`, recipe)
  return req.then((res) => res.data)
}

export default {
  getAll,
  getOne,
  createRecipe,
  updateRecipe,
  deleteRecipe,
}
