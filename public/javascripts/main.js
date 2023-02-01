let btnEl = document.getElementById('toggle')

btnEl.addEventListener('click', handleClick)

function handleClick() {
    let bodyEl = document.body;
    bodyEl.classList.toggle("body_dark")
    let parentEl = document.getElementById('parent')
    parentEl.classList.toggle('container_dark')
}