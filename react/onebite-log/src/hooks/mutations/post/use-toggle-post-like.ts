import { useMutation } from "@tanstack/react-query";
import { togglePostLike } from "@/api/post.ts";
import type { UseMutationCallback } from "@/types.ts";

export default function useTogglePostLike(callbacks?:UseMutationCallback){
  return useMutation({
    mutationFn: togglePostLike,
    onSuccess:(data)=>{
      if(callbacks?.onSuccess) callbacks.onSuccess();
    },
    onError: (error)=>{
      if(callbacks?.onError) callbacks.onError(error);
    }
  })
}