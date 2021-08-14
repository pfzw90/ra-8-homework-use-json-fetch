import useJsonFetch from "./UseJsonFetch/UseJsonFetch";
import React from "react";
import './JsonFetchTesters.css'

export function JsonFetchTesterWithData() {
    const data = useJsonFetch('http://localhost:7070/data', []);

    return (
         (data.loading) ? null : <div className="Fetcher-With-Data">{data.data.status}</div>
    )
}

export function JsonFetchTesterWithError() {
    const error = useJsonFetch('http://localhost:7070/error', []);
    return (
         (error.loading) ? null : <div className="Fetcher-With-Error">{error.error}</div>
    )
}

export function JsonFetchTesterWithLoading() {
    const loading = useJsonFetch('http://localhost:7070/loading', []);
    return (
         (loading.loading) ? <div className="Fetcher-With-Loading">Loading..</div> : null
        )
}

