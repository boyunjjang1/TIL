import {createStore} from "./redux"

const INCREMENT = "increment"
const RESET = "reset"

// reducer는 state를 변경시키는 역할
function reducer(state = {}, action){
    if(action.type === INCREMENT){
        // 새로운 객체를 만들어서 반환해야 한다.
        return {
            ...state,
            count: state.count ? state.count + 1 : 1
        }
    } else if (action.type === RESET){
        return {
            ...state,
            count: action.resetCount
        }
    }

    return state;
}


// 변경시킨 store를 새로 저장
const store = createStore(reducer)

function update(){
    console.log(store.getState())
}

store.subscribe(update)

function actionCreator(type, data){
    return {
        ...data,
        type: type
    }
}

function increment(){
    store.dispatch(actionCreator(INCREMENT))
}

function reset(){
    store.dispatch(actionCreator(RESET, {resetCount: 10}))
}

increment()
increment()
increment()
reset()