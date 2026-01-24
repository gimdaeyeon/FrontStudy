import type { Database, Tables } from "@/database.types.ts";

// export type PostEntity = Database["public"]["Tables"]["post"]["Row"];
// export type ProfileEntity = Database["public"]["Tables"]["profile"]["Row"];

export type PostEntity = Tables<"post">
export type ProfileEntity = Tables<"profile">

export type Post = PostEntity & { author: ProfileEntity };

export type UseMutationCallback = {
  onSuccess?: () => void;
  onError?: (error: Error) => void;
  onMutate?: () => void;
  onSettled?: () => void;
};
