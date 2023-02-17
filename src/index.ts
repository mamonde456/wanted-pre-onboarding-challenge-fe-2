interface ITags {
  id: string;
  tag?: string;
}
interface IToDo {
  id: string;
  content: string;
  category: "DOING" | "DONE" | "TODO";
  isFinish: boolean;
  tags?: ITags[];
}

function createToDo(todo: IToDo) {}

interface IReadToDo {
  id?: string;
}

function readToDo(id: IReadToDo) {}

interface IUpdateToDo {
  id: string;
  tag?: ITags;
}

function updateToDo({ id, tag }: IUpdateToDo) {}

interface IDeleteToDo {
  id: string;
  tags?: ITags[];
}

function deleteToDo({ id, tags }: IDeleteToDo) {}
