import { useQuery } from '@tanstack/react-query';

const API_URL = import.meta.env.VITE_API_URL;

export const get_Projet = (collectionName) => {
    return useQuery({
        queryKey: ['projects', collectionName],
        queryFn: async () => {
            const response = await fetch(`${API_URL}/api/v1/get_project`, {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json',
                },
                body: JSON.stringify({ collection: collectionName }),
            });

            const data = await response.json();
            return data;
        },
    });
};


