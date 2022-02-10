import TaskCard from "../TasksPage/TaskCard"

function getTasksCards(isFilterTasks, orderedTasks, selectValue, filteredTasks, startSlice, endSlice){
    if (isFilterTasks===false || selectValue === '') return (
        orderedTasks?.slice(startSlice,endSlice).map((task,id) =>{
              return <TaskCard key={`item-${task.id}`} task={task} id={task.id}/>
            })
    )
    if (isFilterTasks===true && selectValue !== '') return (
        filteredTasks?.slice(startSlice,endSlice).map((task,id) =>{
              return <TaskCard key={`item-${task.id}`} task={task} id={task.id}/>
          })
    )
  };

export default getTasksCards;