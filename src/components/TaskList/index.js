"use client";

import Button from "../Button";
import TaskItem from "./TaskItem";

export default function TaskList({ tasksData = [], handleGenerateQRCode = () => {}, handleCheckTask = () => {}, selectedTasks=[]}) {
  if (!tasksData || tasksData.length === 0) {
    return (
      <div className='mt-5 h-80 flex flex-col justify-center items-center pb-10'>
        <p className='text-typography-gray text-sm'>Não há Tarefas para serem exibidas</p>
      </div>
    )
  }

  return (
    <>
      <div className="flex pb-10 w-full flex-col">
        <div className='mt-10 flex pb-10 w-full justify-between'>
          {
            tasksData?.map((task) => (
              <TaskItem key={task.id} {...task} onChange={handleCheckTask} />
            ))
          }
        </div>

        <div className="actions">
          <Button
            type="button"
            className='bg-primary text-white mt-10 font-light' onClick={handleGenerateQRCode}
            >
              Pontuar
          </Button>
        </div>
      </div>
    </>
  )
}