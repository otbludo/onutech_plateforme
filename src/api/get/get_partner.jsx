import { useQuery } from '@tanstack/react-query';

const API_URL = import.meta.env.VITE_API_URL;

export const Get_partner = () => {
    return useQuery({
        queryKey: ['Get_partner'],
        queryFn: async () => {
            const response = await fetch(`${API_URL}/api/v1/get_partner`, {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json',
                },
            });

            const data = await response.json();
            return data;
        },
    });
};


