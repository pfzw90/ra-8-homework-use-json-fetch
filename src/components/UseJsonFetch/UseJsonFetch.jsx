import { useState, useEffect } from "react";

export default function useJsonFetch(url, opts) {
    const [data, setData] = useState(null);
    const [error, setError] =  useState(null);
    const [loading, setLoading] = useState(true);

    useEffect(() => {
        const fetchData = async() => {
            setLoading(true);
            try {
                const response = await fetch(url);
                if (!response.ok) throw new Error(`Ошибка загрузки: ${response.status}(${response.statusText})`);
                try {
                    const result = await response.json();
                    setData(result)
                    } catch(e) {
                    throw new Error('Ошибка парсинга'+ e)
                    }
                setError(null)
            } catch(error) {
                setError(error.message);
            } finally {
                setLoading(false);
            }
        }
        fetchData();
    },[])

    return {data,error,loading}
}