import { useState, useEffect } from "react";
import { server_calls } from "../api/server";

export const useGetData = () => {
    const [inventoryData, setInventoryData] = useState<any[]>([]);

    async function handleDataFetch() {
        try {
            const response = await server_calls.get(); // Fetch data from the server
            if (!response.ok) {
                throw new Error('Failed to fetch data from the server');
            }
            const data = await response.json(); // Extract JSON data from the response
            if (Array.isArray(data)) {
                setInventoryData(data); // Set inventory data if it's an array
            } else {
                console.error("Error: Expected an array, but received:", data);
            }
        } catch (error) {
            console.error("Error fetching data:", error);
        }
    }

    useEffect(() => {
        handleDataFetch();
    }, []);

    return { inventoryData, getData: handleDataFetch };
};
