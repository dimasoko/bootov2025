import { useMutation, useQueryClient } from '@tanstack/react-query';
import { addNews, updateNews, deleteNews } from '../../api/news';

export const useNewsMutations = () => {
  const queryClient = useQueryClient();

  const addMutation = useMutation({
    mutationFn: addNews,
    onSuccess: () => {
      queryClient.invalidateQueries({ queryKey: ['news'] });
    }
  });

  const editMutation = useMutation({
    mutationFn: updateNews,
    onSuccess: () => {
      queryClient.invalidateQueries({ queryKey: ['news'] });
    }
  });

  const deleteMutation = useMutation({
    mutationFn: deleteNews,
    onSuccess: () => {
      queryClient.invalidateQueries({ queryKey: ['news'] });
    }
  });

  return { addMutation, editMutation, deleteMutation };
};
