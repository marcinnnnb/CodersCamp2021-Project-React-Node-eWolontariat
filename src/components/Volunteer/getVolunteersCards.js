
import VolunteerCard from "../VolunteersPage/VolunteerCard"

function getVolunteersCards(isFilterVolunteers, orderedVolunteers, filteredVolunteers, startSlice, endSlice){
    if (isFilterVolunteers===false) return (
        orderedVolunteers?.slice(startSlice, endSlice).map((volunteer,id) =>{
              return <VolunteerCard key={`volunteer-${volunteer.id}`} volunteer={volunteer} id={volunteer.id}/>
            })
    )
    if (isFilterVolunteers===true) return (
        filteredVolunteers?.slice(startSlice, endSlice).map((volunteer,id) =>{
              return <VolunteerCard key={`volunteer-${volunteer.id}`} volunteer={volunteer} id={volunteer.id}/>
          })
    )
  };

export default getVolunteersCards;