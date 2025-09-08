// app/api/post/add_project.js
import { useMutation, useQueryClient } from "@tanstack/react-query";

const API_URL = import.meta.env.VITE_API_URL;

export const Edit_emplyee = () => {
  const queryClient = useQueryClient();

  return useMutation({
    mutationKey: ['Edit_emplyee'],
    mutationFn: async (fd) => {
      const response = await fetch(`${API_URL}/api/v1/update_emplyees`, {
        method: "PUT",
        body: fd,
      });

      return response.json();
    },

    // après succès, on refetch la liste des projets
    onSuccess: () => {
      queryClient.invalidateQueries(["Get_Employe"]);
    },
  });
};
