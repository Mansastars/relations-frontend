import { useQuery } from '@tanstack/react-query';
import api from '../../api';

const currentDealId =
    localStorage.getItem("currentDealId") ||
    window.location.pathname.split("/").at(-1);

export const FollowUpContacts = () => {
  return useQuery({
    queryKey: ['followUps', currentDealId],
    queryFn: async () => {
      const response = await api.get(`deals/followup-contacts/${currentDealId}`);
      return response.data.data;
    },
  });
};

