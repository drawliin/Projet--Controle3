import React, {useState, useRef, useEffect} from 'react'
import './styles/addTask.css'


function AddTask(){

    const [newTask, setNewTask] = useState('');
    const [tasks, setTasks] = useState([]);
    const [edit, setEdit] = useState({
        index: '',
        isEditing: false
    });
    const input = useRef(null);

    useEffect(() => {
            const storedTasks = JSON.parse(localStorage.getItem('tasks'));
            if(storedTasks !== null && storedTasks.length > 0){
                setTasks(storedTasks)
            }
    }, [])
    
    useEffect(() => {
        localStorage.setItem('tasks', JSON.stringify(tasks))
    }, [tasks])

    function handleTasks(e){
        if(e.type === 'click' || (e.type === 'keydown' && e.key === 'Enter') ){
            
            const task = newTask.trim();
            if(!edit.isEditing && task){
                if(!tasks.includes(task)){  
                    setTasks(t => [...t, task]);
                    
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
        setEdit({index: i, isEditing: true});
        input.current.focus();

    }


    return (
        <div className='taskManagerContainer'>
            <h1>Task Manager</h1>
            <div>
                <input 
                    type='text' 
                    placeholder='Enter task...' 
                    value={newTask} 
                    onChange={(e) => setNewTask(e.target.value)} 
                    onKeyDown={handleTasks} 
                    ref={input}/>
                <button 
                    onClick={handleTasks} 
                    disabled={!newTask.trim()}
                >
                        {edit.isEditing ? 'Edit Task': 'Add Task'}
                    </button>
            </div>
            

            <ul>
                {tasks.map((element, index) => {
                    return(
                        <li key={index}>
                            <span>{element}</span>
                            <button onClick={() => handleEdit(index)} >Modifier</button>
                            <button onClick={() => handleDelete(index)} >Supprimer</button>
                        </li>
                    )           
                })}
            </ul>
        </div>
    )
}

export default AddTask