import React, {useState, useRef} from 'react'

function AddTask(){

    const [newTask, setNewTask] = useState('');
    const [tasks, setTasks] = useState([]);
    const [edit, setEdit] = useState({
        index: '',
        isEditing: false
    });
    const input = useRef(null);

    function handleTasks(e){
        if(e.type === 'click' || (e.type === 'keydown' && e.key === 'Enter') ){
            
            const task = newTask.trim();
            if(!edit.isEditing && task){
                if(!tasks.includes(task)){  
                    setTasks([...tasks, task]);
                }else{
                    alert('Task already exists');
                }

            }else{
                const updatedTasks = [...tasks];
                updatedTasks[edit.index] = newTask;
                setTasks(updatedTasks);
                setEdit({index: '', isEditing: false});
            }

            setNewTask('');
            input.current.blur();
        }     
    }

    function handleDelete(i){
        const filteredTasks = tasks.filter((_, j) => (j !== i));
        setTasks(filteredTasks);
    }
    
    function handleEdit(i){
        const taskToEdit = tasks[i];
        setNewTask(taskToEdit);
        input.current.focus();
        setEdit({index: i, isEditing: true});

    }

    

    return (
        <div className='taskManagerContainer'>
            <h1>Task Manager</h1>
            <input type='text' className='task-input' placeholder='Enter task...' value={newTask} onChange={(e) => setNewTask(e.target.value)} onKeyDown={handleTasks} ref={input}/>
            <button onClick={handleTasks} disabled={!newTask.trim()} className='add-task-button'>{edit.isEditing ? 'Edit Task': 'Add Task'}</button>

            <ul className='task-list'>
                {tasks.map((element, index) => {
                    return(
                        <li key={index} className='task-item'>
                            <span>{element}</span>
                            <button onClick={() => handleEdit(index)} className='edit-button'>Modifier</button>
                            <button onClick={() => handleDelete(index)} className='delete-button'>Supprimer</button>
                        </li>
                    )           
                })}
            </ul>
            

            


        </div>
    )
}

export default AddTask