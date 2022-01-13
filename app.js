//set store
const store = Redux.createStore(mood);

//select h1 face Element
const face  = document.getElementById('face');

document.getElementById('happy').addEventListener('click', () => {
  store.dispatch({ type: 'HAPPY', payload: 'ʘ‿ʘ'})
});

document.getElementById('sad').addEventListener('click', () => {
  store.dispatch({ type: 'SAD', payload: '⊙︿⊙'})
})

document.getElementById('angry').addEventListener('click', () => {
  store.dispatch({ type: 'ANGRY', payload: 'ಠ╭╮ಠ'})
})

document.getElementById('confused').addEventListener('click', () => {
  store.dispatch({ type: 'CONFUSED', payload: '(@_@)'})
})

function renderFace() {
  face.innerHTML = store.getState().face
}

renderFace()
store.subscribe(renderFace)