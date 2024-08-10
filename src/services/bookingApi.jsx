import { useQuery } from '@tanstack/react-query';
import axiosInstance from '../utils/axios-instance';

const useBookings = (page = 1, ordering = '', pageSize) => {
  const { data, isLoading, isError } = useQuery({
    queryKey: ['bookings', page, ordering, pageSize],
    queryFn: async () => {
      const { data } = await axiosInstance.get(
        `bookings/?page=${page}&ordering=${ordering}&page_size=${pageSize}`
      );

      return data;
    },

    keepPreviousData: true,
  });

  return { data, isLoading, isError };
};

export default useBookings;
