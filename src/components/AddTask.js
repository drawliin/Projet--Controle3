import React, {useState} from 'react'

function AddTask(){

    const [newTask, setNewTask] = useState('');

    const [tasks, setTasks] = useState([]);

    function handleTasks(){
        
        if(!tasks.includes(newTask.trim())){  
            setTasks([...tasks, newTask.trim()]);
            setNewTask('');
        }else{
            alert('Task already exists');
            setNewTask('');
        }
        
    }

    function handleDelete(i){
        const filteredTasks = tasks.filter((_, j) => (j !== i));
        setTasks(filteredTasks);
    }
    
    function handleEdit(i){
        const taskToEdit = tasks[i];
        setNewTask(taskToEdit)
    }

    

    return (
        <div>
            <input type='text' placeholder='Enter task...' value={newTask} onChange={(e) => {setNewTask(e.target.value)}} />
            <button onClick={() => {handleTasks()}} disabled={!newTask.trim()}>Add Task</button>

            <ul>
                {tasks.map((element, index) => {
                    return(
                        <div className='listElement' key={index}>
                            <li>{element}</li>
                            <button onClick={() => handleEdit(index)}>Modifier</button>
                            <button onClick={() => handleDelete(index)}>Supprimer</button>
                        </div>
                    )           
                })}
            </ul>
            

            


        </div>
    )
}

export default AddTask