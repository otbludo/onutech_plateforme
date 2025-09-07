import { useMutation, useQueryClient } from "@tanstack/react-query";

const API_URL = import.meta.env.VITE_API_URL;

export const Add_emplyees = () => {
  const queryClient = useQueryClient();

  return useMutation({
    mutationKey: ['Add_emplyees'],
    mutationFn: async (fd) => {
      const response = await fetch(`${API_URL}/api/v1/add_emplyees`, {
        method: "POST",
        body: fd,
      });

      return response.json();
    },

    // après succès, on refetch la liste des projets
    onSuccess: () => {
      queryClient.invalidateQueries(["projects"]);
    },
  });
};
