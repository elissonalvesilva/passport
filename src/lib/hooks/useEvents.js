import { useState, useEffect } from 'react';
import { Config } from '@/config';
import api from '@/lib/services/api';

const useEventData = (selectedTab, token) => {
  const [events, setEvents] = useState([]);
  const [eventsApprovals, setEventsApprovals] = useState([]);

  useEffect(() => {
    const category = selectedTab === 0 ? 'district' : 'local';

    const fetchEvents = async () => {
      try {
        const { data } = await api.get(`/events/category/${category}`)

        setEvents(data?.data || []);
      } catch (err) {
        console.error(err);
      }
    };

    const fetchApprovals = async () => {
      try {
        const { data } = await api.get('/approvals');
        setEventsApprovals(data?.data || []);
      } catch (err) {
        console.error(err);
      }
    };

    fetchEvents();
    fetchApprovals();
  }, [selectedTab, token]);

  
  const approvedEventIds = new Set(eventsApprovals.map(approval => approval.event.id));

  const eventsWithApprovalStatus = events.map(event => ({
    ...event,
    already_approved: approvedEventIds.has(event.id),
  }));

  return { events: eventsWithApprovalStatus, eventsApprovals };
};

export default useEventData;
