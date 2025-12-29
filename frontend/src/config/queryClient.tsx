import { QueryClient } from "@tanstack/react-query";



export const Client = new QueryClient({
    defaultOptions: {
        queries: {
            staleTime: 60 * 1000 * 60 * 20,
            gcTime: 60 * 1000 * 60 * 24,
            retry: 2,
            refetchOnReconnect: false,
            refetchOnWindowFocus: false,
            refetchOnMount: false
        }
    }
});