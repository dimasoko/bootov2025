import { useQuery } from '@tanstack/react-query';
import { getNews } from '../../../../infrastructure/api/news';

export const useNews = () => {
  const { data: news = [], isLoading: isLoadingNews, error: errorNews } = useQuery({
    queryKey: ['news'],
    queryFn: getNews,
    select: (data) => data.data
  });
  
  return { news, isLoadingNews, errorNews };
};
