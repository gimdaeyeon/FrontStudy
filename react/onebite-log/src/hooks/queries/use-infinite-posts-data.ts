import { useInfiniteQuery } from "@tanstack/react-query";
import { fetchPosts } from "@/api/post.ts";
import { QUERY_KEYS } from "@/lib/constants.ts";

const PAGE_SIZE = 5;

export function useInfinitePostsData() {
  return useInfiniteQuery({
    queryKey: QUERY_KEYS.post.list,
    queryFn: async ({ pageParam }) => {
      const from = pageParam * PAGE_SIZE;
      const to = from + PAGE_SIZE - 1;

      const posts = await fetchPosts({ from, to });
      return posts;
    },
    initialPageParam: 0,
    getNextPageParam: (lastPage, allPage) => {
      if (lastPage.length < PAGE_SIZE) return undefined;
      return allPage.length;
    },
  });
}
