let box1 = document.getElementById('box1')
let box2 = document.getElementById('box2')

Box1.addEventListener('click'), function(){
  box1.style.backgroundColor = "blue"
  box1.style.width = "200px"
})

box2.addEventListener('mouseover', function(){
  box2.style.backgroundColor = 'yellow'
})
box1.addEventListener('dblclick', function()){
  box1.style.backgroundColor="purple"
})

box2.addEventListener('mouseleave', function()){
  box2.style.backgroundColor = "black"
})

let name = document.getElementById('name')
let pass = document.getElementById('pass')
let btn = document.getElementById('btn')

btn.addEventListener('click', function(){
  result.innerHTML = name.value
})
let num1 = document.getElementById('num1')
let num2 = document.getelementById('num2')
let add = document.getElementById('add')
let answer = document.getElementById('answer')

add.addEventListener(click, function(){
  answer,innerHTML = num1.value + num2.value
})
