import axios from "axios"

export const baseUrl = "https://bayut.p.rapidapi.com"

export const fetchApi = async (url) => {
  const { data } = await axios.get(url, {
    headers: {
      "X-RapidAPI-Key": "e6e1c3a97bmshf95aa1ae646f76bp17a1f2jsnffe5c9fdbe67",
      "X-RapidAPI-Host": "bayut.p.rapidapi.com",
    },
  })
  return data
}
