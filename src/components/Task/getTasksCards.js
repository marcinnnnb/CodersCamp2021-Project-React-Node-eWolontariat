import TaskCard from "../TasksPage/TaskCard"

function getTasksCards(isFilterTasks, orderedTasks, filteredTasks, startSlice, endSlice){
    if (isFilterTasks===false) return (
        orderedTasks?.slice(startSlice,endSlice).map((task,id) =>{
              return <TaskCard key={`item-${task.id}`} task={task} id={task.id}/>
            })
    )
    if (isFilterTasks===true) return (
        filteredTasks?.slice(startSlice,endSlice).map((task,id) =>{
              return <TaskCard key={`item-${task.id}`} task={task} id={task.id}/>
          })
    )
  };

export default getTasksCards;