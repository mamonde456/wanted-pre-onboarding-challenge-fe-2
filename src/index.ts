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

type UpdateToDo = Partial<Omit<IToDo,"id">> & {id:string}

function updateToDo(todo: UpdateToDo) {}

interface IDeleteToDo {
  id: string;
  tags?: {
    id:string;
  };
}

function deleteToDo(isAll:boolean,todo?: IDeleteToDo) {}
