import classNames from 'classnames';
import { useState } from 'react';

const TaskItem = ({ id, checked, score, name, onChange }) => {
  const [isChecked, setIsChecked] = useState(checked || false);

  const handleCheckboxChange = () => {
    setIsChecked(!isChecked);
    if (onChange) {
      onChange(id, !isChecked, { score, name });
    }
  };

  return (
    <div className={classNames('w-28 h-32 tasks cursor-pointe relative grid justify-items-stretch', isChecked ? 'bg-primary': '')} onClick={handleCheckboxChange}>
      <input
        type="checkbox"
        checked={isChecked}
        onChange={handleCheckboxChange}
        className='hidden'
      />
      <div className='flex flex-col h-full items-center justify-center text-center mt-4'>
        <span className={classNames('text-primary text-xl', isChecked ? 'text-white': '')}>+{score}</span>
        <span className={classNames('text-typography-black font-light text-md mt-3 grow overflow-hidden line-clamp-2', isChecked ? 'text-white': '')}>{name}</span>
      </div>
    </div>
  );
};

export default TaskItem;
