import { apiService } from "../../config/service.api"
import { useQuery } from "@tanstack/react-query";


export type PostType = {
    id: string,
    title: string,
    description?: string,
    fullDetail: string,
    imageUrl: string,
    readTimeMints: number;
    category: 'Entertainment' | 'myLife' | 'Technology' | 'Fashion' | 'Travel' | 'Games' | 'Jobs' | 'Others';
    tags: string[],
    author: string,
    updated_at: string,
};


async function fetchPosts(): Promise<PostType[] | string> {

    try {
        const response = await apiService({
            url: '/fetch-posts',
            method: "GET"
        });

        console.log(response.data);

        if (response.data.posts) return response.data.posts;

        else {
            throw new Error(response.data.message || "Someething"); // if fetch failed due to db error
        }

    } catch (err) {

        console.log("Error while fetching- ", err);
        throw err; // for useQuery
    }
}


export const useFetch = () => {
    return useQuery({
        queryKey: ['posts'],
        queryFn: fetchPosts,
    });
}