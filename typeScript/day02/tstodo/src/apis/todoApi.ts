import { axiosApiInstance } from "./base"

export const TodoApi = {
    addTodo: async ({data}:any)=>{
      return await axiosApiInstance.post('/todo',data);
    },

    getListAll : async()=>{
      return  await axiosApiInstance.get('/todo');
    },



    getList: async ({params}:any)=>{
      return  await axiosApiInstance.get('/todo',params);
      /*
        params : {
          page : 3, //  lastId : 21
          sort : createdAt,
          order : desc
        }
      */
    },

    updateTodo: async ({data, todoId}:any)=>{
      return await axiosApiInstance.put(`/todo/${todoId}`,data)
    },

    deleteTodo: async({todoId}:any)=>{
        return await axiosApiInstance.delete(`/todo${todoId}`);
    },



}