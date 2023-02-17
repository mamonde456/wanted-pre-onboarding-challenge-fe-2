interface ITag {
  id: string;
  tag?: string;
}
interface IToDo {
  id: string;
  content: string;
  category: "DOING" | "DONE" | "TODO";
  isFinish: boolean;
  tags?: ITag[];
}

function createToDo(todo: IToDo) {}

interface IReadToDo {
  id?: string;
}

function readToDo(todo: IReadToDo) {}


type UpdateTodo =  Partial<Omit<IToDo,"id">> & {id:string}

/**@function updateTodo
 * todo 파라미터를 option으로 가져와 todo의 id를 제외하고 수정할 수 있습니다.
 * 
 */
function updateToDo(todo:UpdateTodo) {}

interface IDeleteToDo {
  id: string;
  tags?: {
    id:string;
  }
}

function deleteToDo(isAll:boolean,todo: IDeleteToDo) {}
