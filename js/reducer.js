// add code snippets from README
let state
 
function reducer(state = {count: 0}, action){
    switch (action.type) {
      case 'INCREASE_COUNT':
        return {count: state.count + 1}
      case 'DECREASE_COUNT':
        return {count: state.count - 1}
      default:
        return state;
    }
  }
  

function dispatch(action){
    state = reducer(state, action);
    render()
  }


  function render(){
    let container = document.getElementById('container');
    container.textContent = state.count;
  }

let upButton = document.getElementById('up_button');
let downButton = document.getElementById('down_button');

 
upButton.addEventListener('click', () => {
  dispatch({type: 'INCREASE_COUNT'})
})
downButton.addEventListener('click', () => {
  dispatch({type: 'DECREASE_COUNT'})
})

dispatch({type: "@@INIT"})