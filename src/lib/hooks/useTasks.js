import { useState, useEffect } from 'react';
import {Config} from '@/config';

const useTasks = (token) => {
  const [tasks, setTasks] = useState([]);

  useEffect(() => {
    

    const fetchTasks = async () => {
      try {
        const response = await fetch(`${Config.API_URL}/tasks`, {
          headers: {
            'x-passport-token': `Bearer ${token}`,
          },
        });

        const data = await response.json();
        setTasks(data?.data || []);
      } catch (err) {
        console.error(err);
      }
    };

    fetchTasks();
  }, [token]);

  return { tasks };
};

export default useTasks;
