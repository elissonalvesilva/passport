import { useState, useEffect } from 'react';
import {Config} from '@/config';

const useEventData = (selectedTab, token) => {
  const [events, setEvents] = useState([]);
  const [eventsApprovals, setEventsApprovals] = useState([]);

  useEffect(() => {
    const category = selectedTab === 0 ? 'district' : 'local';

    const fetchEvents = async () => {
      try {
        const response = await fetch(`${Config.API_URL}/events/category/${category}`, {
          headers: {
            'x-passport-token': `Bearer ${token}`,
          },
        });

        const data = await response.json();
        setEvents(data?.data || []);
      } catch (err) {
        console.error(err);
      }
    };

    const fetchApprovals = async () => {
      try {
        const response = await fetch(`${Config.API_URL}/approvals`, {
          headers: {
            'x-passport-token': `Bearer ${token}`,
          },
        });

        const data = await response.json();
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
