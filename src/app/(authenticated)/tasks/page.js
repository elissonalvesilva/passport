"use client";

import { useEffect, useState } from "react";
import { useRouter } from 'next/navigation';
import { useAuth } from "@/lib/contexts/AuthContext";
import useTasks from "@/lib/hooks/useTasks";
import TaskList from "@/components/TaskList";
import TaskScoreDialog from "@/components/TaskList/TaskScoreDialog";

export default function Tasks() {
  const router = useRouter();
  const { user, token } = useAuth();
  const [selectedTasks, setSelectedTask] = useState({});
  const [openDialog, setOpenDialog] = useState(false);
  const [payload, setPayload] = useState({})

  const { tasks } = useTasks(token);

  useEffect(() => {
    if (!token) {
      router.push('/login');
    }
  })

  function handleCheckTask (taskId, checked, { score, name }) {
    setSelectedTask((prevCheckedTasks) => ({
      ...prevCheckedTasks,
      [taskId]: { checked, score, name },
    }));
  }

  function handleGenerateQRCode () {
    if (Object.keys(selectedTasks).length !== 0) {
        
      setOpenDialog(true);

      const completedTasks = Object.entries(selectedTasks)
      .filter(([taskId, { checked }]) => checked)
      .map(([taskId, { score }]) => ({ id: taskId, score }));

      setPayload({
        user_id: user.id,
        tasks: completedTasks,
      });
    }
  }

  function closeDialog() {
    setOpenDialog(false);
  }


  return (
    <>
      {
        openDialog && (
          <TaskScoreDialog payload={payload} closeDialog={closeDialog} />
        )
      }
      <div>
        <h2 className="mt-8 mb-4 font-bold text-sm">Lista de Tarefas</h2>

        <div>
          <TaskList
            tasksData={tasks}
            handleCheckTask={handleCheckTask}
            handleGenerateQRCode={handleGenerateQRCode}
            selectedTasks={selectedTasks}
          />
        </div>
      </div>
    </>
  )
}