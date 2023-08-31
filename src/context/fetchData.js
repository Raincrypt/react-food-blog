import { useCallback, useState } from "react";

const getData = (content_type) => {
    const [data, setData] = useState();
    const [isLoading, setIsLoading] = useState(false);

    const saveData = useCallback((rawData) => {
        const cleanData = cleanUp(rawData);
        setData(cleanData)
    }, [])

    const getData = useCallback(async () => {
        setIsLoading(true);
        try {
            const response = await client.getEntries({ content_type: {content_type} })
            const responseData = response.items;
            if(responseData) saveData(responseData)
            else setData();
            setIsLoading(false);
        } catch (error) {
            alert(error);
            setIsLoading(false);
        }
    }, [])

    return {
        data, isLoading, getData
    }
}