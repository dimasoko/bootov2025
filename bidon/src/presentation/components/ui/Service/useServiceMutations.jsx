import { useMutation, useQueryClient } from '@tanstack/react-query';
import { addService, updateService, deleteService } from '../../../../infrastructure/api/services';

export const useServiceMutations = () => {
  const queryClient = useQueryClient();

  const addMutation = useMutation({
    mutationFn: addService,
    onSuccess: () => {
      queryClient.invalidateQueries({ queryKey: ['services'] });
    },
    onSettled:()=>{},
    onError:()=>{
    }
  });
  const editMutation = useMutation({
    mutationFn: updateService,
    onSuccess: () => {
      queryClient.invalidateQueries({ queryKey: ['services'] });
    }
  });

  const deleteMutation = useMutation({
    mutationFn: deleteService,
    onSuccess: () => {
      queryClient.invalidateQueries({ queryKey: ['services'] });
    }
  });

  return { addMutation, editMutation, deleteMutation };
};
