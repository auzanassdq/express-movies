const express = require("express")
const app = express()

const PORT = process.env.PORT || 3000

const movies = [
  {id: 67, title: "Spiderman:work from home", year: 2021},
  {id: 89, title: "The Batman", year: 2022},
  {id: 99, title: "Doctor Strange: Multiverse of madness", year: 2022},
]

app.use(express.json())

app.get("/", (req, res) => {
  res.json("hello ini dari express")
})

app.get("/movies", (req, res) => {
  res.json(movies)
})

app.get("/movies/:id", (req, res) => {
  const { id } = req.params

  const movie = movies.find(item => (item.id == id))

  res.json(movie)
})

app.post("/movies", (req, res) => {
  const data = req.body

  movies.push(data)

  res.json("data berhasil di tambahkan")
})



app.listen(PORT, () => {
  console.log(`server running on port : ${PORT}`);
})