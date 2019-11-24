// 액션 type
const ADD_TODO = "todos/ADD_TODO";
const TOGGLE_TODO = "todos/TOGGLE_TODO";
const REMOVE_TODO = "todos/REMOVE_TODO";

// 액션 생성 함수
export const addTodo = text => ({
  type: ADD_TODO,
  payload: text
});

export const toggleTodo = id => ({
  type: TOGGLE_TODO,
  payload: id
});

export const removeTodo = id => ({
  type: REMOVE_TODO,
  payload: id
});

// 초깃값 설정
const initialState = [
  { id: 1, text: "리덕스 배우기", done: true },
  { id: 2, text: "리덕스 덕패턴 사용해보기", done: true },
  { id: 3, text: "투두리스트 만들기", done: false }
];

function todos(state = initialState, action) {
  switch (action.type) {
    case ADD_TODO:
      const nextId = Math.max(...state.map(todo => todo.id)) + 1;
      return state.concat({
        id: nextId,
        text: action.payload,
        done: false
      });
    case TOGGLE_TODO:
      return state.map(todo =>
        todo.id === action.payload ? { ...todo, done: !todo.done } : todo
      );
    case REMOVE_TODO:
      return state.filter(todo => todo.id !== action.payload);
    default:
      return state;
  }
}

export default todos;
