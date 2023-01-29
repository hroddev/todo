export interface Task {
    id: number;
    name:string,
    description:string,
    title:string,
    createDate:string,
    finished:false,
    taskStatus:string
}

export const tasks = [
    {
        "id": 1,
        "title": "libero at consequat varius",
        "description": "Sed faucibus odio eu arcu convallis, at suscipit quam volutpat. Pellentesque dapibus, libero at consequat varius, lorem massa maximus ligula, imperdiet scelerisque ",
        "createDate": "2023-01-29T05:10:19.70848",
        "eta": "2023-01-29T10:08:28.46",
        "finished": false,
        "taskStatus": "ON_TIME"
      },
      {
        "id": 2,
        "title": "libero at consequat varius",
        "description": "Sed faucibus odio eu arcu convallis, at suscipit quam volutpat. Pellentesque dapibus, libero at consequat varius, lorem massa maximus ligula, imperdiet scelerisque ",
        "createDate": "2023-01-29T05:10:19.70848",
        "eta": "2023-01-29T10:08:28.46",
        "finished": false,
        "taskStatus": "ON_TIME"
      },
      {
        "id": 3,
        "title": "libero at consequat varius",
        "description": "Sed faucibus odio eu arcu convallis, at suscipit quam volutpat. Pellentesque dapibus, libero at consequat varius, lorem massa maximus ligula, imperdiet scelerisque ",
        "createDate": "2023-01-29T05:10:19.70848",
        "eta": "2023-01-29T10:08:28.46",
        "finished": false,
        "taskStatus": "ON_TIME"
      }
]