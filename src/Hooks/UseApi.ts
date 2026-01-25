import apiService from "../Api/ApiService";

interface useApiProps {
    endpoint: string;
}

export function UseApi() {

    const fetchData = async ({ endpoint }: useApiProps) => {
        try {
            const response = await apiService.get(endpoint);
            return response.data;
        } catch (error) {
            console.error("Error fetching data:", error);
            throw error;
        }
    };

    return { fetchData };
}