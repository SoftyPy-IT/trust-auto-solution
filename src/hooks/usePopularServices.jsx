import { useQuery } from "react-query";

const usePopularServices = () => {
    const {isLoading:loading , refetch, data: singleservices = []} = useQuery({
        queryKey: ['singleservices'],
        queryFn: async () =>{
            const res = await fetch('http://localhost:5000/singleservices')
            return res.json() 
        }
    })
    return [singleservices, loading, refetch]
};

export default usePopularServices;