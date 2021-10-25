import "./index.css";

const btn = document.getElementById('btn')
const text = document.getElementById('text')
// const box = document.getElementById('box')
const boxUl = document.getElementById('boxUl')

btn.addEventListener('click', function() {
  text.classList.toggle('text-fb')
  let str = ''
  const li = `<li>test</li>`

  for (let i = 0; i < 5; i++) {
    str += li
  }

  boxUl.innerHTML = str
})
