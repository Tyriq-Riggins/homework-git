let movie = {
  title: "titanic",
  rating: "pg-13",
  runtime: "194 mins",
  actors: ["Leonardo Dicaprio", "Kate winslet"],
  year: "1997"
}
let t =document.getElementById('title')
let r =document.getElementById('rating')
let a = document.getElementById('actors')
let i = document.getElementById('poster')
let y = document.getElementById('year')

t.innerHTML=movie.title
r.innerHTML=movie.rating
a.innerHTML=movie.actors[0] + " " + movie.actors[1]
i.setAttribute("src", "https://media.npr.org/assets/img/2018/01/03/img_9492_slide-067b5110c29a59f028b12b1420e75bddecfc68da-s800-c85.jpg")
rt.innerHTML = movie.runtime
y.innerHTML = movie.year
