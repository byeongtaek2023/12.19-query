//기억이 안나는데?
//객체 분해 랑 그 뭐더라 ( ) => {} 이런식이 있었는데
import { useMutation } from "react-query";
import { addTodo, removeTodo, switchTodo } from "../api/todos";

export const AddMutataion = () => useMutation(addTodo);
export const DeleteMutation = () => useMutation(removeTodo);
export const SwitchMutation = () => useMutation(switchTodo);

// deleteMutation.mutate(todo.id); => mutate가 어디가 된다고 했지?
// 뭔가를 빼먹었는데 ... 
// 흠.....
// 그 아 ..