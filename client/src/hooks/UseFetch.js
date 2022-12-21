import { useEffect, useState } from "react"
import {makeRequest} from "../makeRequest"

export const useFetch = (url) => {
    const [data, setData] = useState([])
    const [loading, setLoading] = useState(false)
    const [err, setErr] = useState(null)

    useEffect(() => {
        const fetchData = async () => {
            try {
                setLoading(true)
                const res = await makeRequest.get(url)
                setData(res.data.data)
                setLoading(false)
            } catch (error) {
                setErr(error.message)
            }
            setLoading(false)
          }
          fetchData()
    }, [url])
    return {data, err, loading}
}

export default useFetch