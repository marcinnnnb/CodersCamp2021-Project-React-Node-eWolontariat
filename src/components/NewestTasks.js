import setCategoryIcon from "./setCategoryIcon";
import TasksCard from "./TasksPage/TasksCard";

function NewestTasks ({data,start,end}){
    function compareDate( a, b ) {
        if ( a.date > b.date  ){
          return -1;
        }
        if ( a.date < b.date ){
          return 1;
        }
        return 0;
      }     

    const theNewestTasks =(data.map(e=>{
        e.categorieIcon = setCategoryIcon(e.categories[0])[0];
        e.avatarColor = setCategoryIcon(e.categories[0])[1];
        return e;
    })).sort(compareDate).slice(start,end);
    
    return(
        <TasksCard data = {theNewestTasks} start ={start} end={end}/>
    )
};

export default NewestTasks;