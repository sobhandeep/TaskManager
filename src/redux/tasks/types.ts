export interface Task {
  id: number;
  title: string;
  completed: boolean;
}

export interface TasksState {
  tasks: Task[];
}