import { useEffect, useState } from "react";

const useFetch = (url, token) => {

    const [data, setData] = useState([]);
    const [length, setLength] = useState();
    const [error, setError] = useState(null);
    const [loading, setLoading] = useState(false);

    useEffect(() => {
        const myHeaders = new Headers();
        myHeaders.append("Authorization", `Bearer ${token}`)
        // myHeaders.append("Content-Type", "application/json");
        // const raw = JSON.stringify({ "status": status });

        setLoading(true);

        const requestOptions = {
            method: 'GET',
            headers: myHeaders,
            // body: raw,
            redirect: 'follow',
        };

        fetch(url, requestOptions)
            .then(response => response.json())
            .then(result => {
                console.log(" Result :", result);
                if (result.status === "success") {
                    setData(result.data.data)
                    setLength(result.result)
                    setLoading(false);
                }
            })
            .catch(error => {
                setError(error.message)
                setLoading(false);
            });
    }, [url]);


    const reFetch = async () => {
        const myHeaders = new Headers();
        myHeaders.append("Authorization", `Bearer ${token}`)
        setLoading(true);

        const requestOptions = {
            method: 'GET',
            headers: myHeaders,
            redirect: 'follow'
        };

        fetch(url, requestOptions)
            .then(response => response.json())
            .then(result => {
                if (result.status === "success") {
                    setData(result.data.data)
                    setLength(result.results)
                    setLoading(false);
                }
            })
            .catch(error => {
                setError(error.message)
                setLoading(false);
            });
    };

    return { data, length, error, reFetch, loading };
};

export default useFetch;
