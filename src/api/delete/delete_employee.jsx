import { useMutation, useQueryClient } from "@tanstack/react-query";

const API_URL = import.meta.env.VITE_API_URL;

export const Delete_employee = () => {
    const queryClient = useQueryClient();

    return useMutation({
        mutationKey: ['Delete_employee'],
        mutationFn: async (fd) => {
            const response = await fetch(`${API_URL}/api/v1/delete_employee`, {
                method: "DELETE",
                headers: {
                    "Content-Type": "application/json",
                },
                body: JSON.stringify(fd),
            });

            return response.json();
        },

        // après succès, on refetch la liste des projets
        onSuccess: () => {
            queryClient.invalidateQueries(["Get_Employe"]);
        },
    });
};
