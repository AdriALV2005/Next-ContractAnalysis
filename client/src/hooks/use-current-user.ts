import { useQuery } from "@tanstack/react-query"

export const useCurrentUser = () => {
    const {} = useQuery({
        queryKey:["currentUser"],
        queryFn:async()=>{
            try {
                
            } catch (error) {
                
            }
        }
    })
}