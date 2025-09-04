import { useMutation, useQueryClient } from "@tanstack/react-query";

const API_URL = import.meta.env.VITE_API_URL;

export const Generative_groq = () => {
  const queryClient = useQueryClient();

  return useMutation({
    mutationKey: ['Generative_groq'],
    mutationFn: async (fd) => {
      const response = await fetch(`${API_URL}/api/v1/generative_groq`, {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(fd),
      });

      return response.json();
    },
  });
};
