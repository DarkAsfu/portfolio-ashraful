import { useQuery } from "@tanstack/react-query";
import { useState } from "react";

const useProjectsCategories = (category) => {
    const [loading, setLoading] = useState(true)
    const {data: categories = [], refetch} = useQuery({
        queryKey: ['categories'],
        queryFn: async() => {
            const res = await fetch(`https://portfolio-backend-0y27.onrender.com/projects/${category}`);
            setLoading(false)
            return res.json();
        }
    })
    return [categories, loading, refetch];
};

export default useProjectsCategories;