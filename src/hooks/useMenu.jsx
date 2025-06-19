import { useQuery } from "@tanstack/react-query";
import useAxiosPublic from "./useAxiosPublic";

const useMenu =()=>{
const axiospublic = useAxiosPublic()
    const {data:menu =[], isPending:loading, refetch}=useQuery({
    queryKey: ['menu'],
    queryFn: async()=>{
        const res =await axiospublic.get('/menu');
        return res.data;
    } 
})
//  useEffect(() => {
//         fetch('https://bistro-boss-server-snowy-one.vercel.app/menu')
//             .then(res => res.json())
//             .then(data =>{
//                 setmenu(data)
//                 setLoading(false)
//             });

//     }, [])



return[menu,loading, refetch]
}

export default useMenu