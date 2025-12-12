import { useQuery } from '@tanstack/react-query';
import { getServices } from '../../api/services';

export const useServices = ()=>{
    const { data: services = [], isLoading:isLoadingServices, error:errorServices } = useQuery({
    queryKey: ['services'],
    queryFn: getServices,
    select:(data) => data.data
  });
    
    return {services, isLoadingServices, errorServices}
}