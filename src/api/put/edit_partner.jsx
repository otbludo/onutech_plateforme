import { useMutation, useQueryClient } from "@tanstack/react-query";

const API_URL = import.meta.env.VITE_API_URL;

export const Edit_partner = () => {
  const queryClient = useQueryClient();

  return useMutation({
    mutationKey: ['Edit_partner'],
    mutationFn: async (fd) => {
      const response = await fetch(`${API_URL}/api/v1/update_partner`, {
        method: "PUT",
        body: fd,
      });

      return response.json();
    },

    // après succès, on refetch la liste des projets
    onSuccess: () => {
      queryClient.invalidateQueries(["Get_partner"]);
    },
  });
};
