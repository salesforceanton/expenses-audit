import { useState, useCallback } from 'react';

export const HTTP_METHOD = Object.freeze({
    POST: 'POST',
    GET: 'GET'
});

const DEFAULT_HEADERS = {
    'Content-Type': 'application/json',
}

export const useHttp = () => {
    const [isLoading, setIsLoading] = useState(false);
    const [error, setError] = useState(null);

    const httpRequest = useCallback(async({ endpoint, method, headers, body}, successCallback ) => {
        setError(null);
        setIsLoading(true);

        try {
            const response = await fetch(endpoint, {
                method: method ?? HTTP_METHOD.GET,
                headers: headers ?? DEFAULT_HEADERS,
                body: body ? JSON.stringify(body) : null
            });

            const responseData = await response.json();
            successCallback(responseData);
        } catch (error) {
            setError(error);
        } finally {
            setIsLoading(false);
        }
       
    }, []);

    return { isLoading, error, httpRequest };
}