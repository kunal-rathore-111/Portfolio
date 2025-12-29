import { createContext, type ReactNode } from "react";
import { type PostType } from "../hooks/queryHooks/useFetch";



type PostsContextType = {
    data: PostType[] | string | undefined,
    isError: boolean,
    error: Error | null,
    isLoading: boolean,
}


export const PostsDataContext = createContext<PostsContextType | null>(null);

export function PostsDataContextProvider({ children, props }: { children: ReactNode, props: PostsContextType }) {

    return <PostsDataContext.Provider value={props}>
        {children}
    </PostsDataContext.Provider>
}