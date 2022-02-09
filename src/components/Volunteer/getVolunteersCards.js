
import VolunteerCard from "../VolunteersPage/VolunteerCard"

function getVolunteersCards(isFilterVolunteers, orderedVolunteers, filteredVolunteers, startSlice, endSlice){
    if (isFilterVolunteers===false) return (
        orderedVolunteers?.slice(startSlice, endSlice).map((volunteer) =>{
              return <VolunteerCard key={`volunteer-${volunteer.id}`} volunteer={volunteer} />
            })
    )
    if (isFilterVolunteers===true) return (
        filteredVolunteers?.slice(startSlice, endSlice).map((volunteer) =>{
              return <VolunteerCard key={`volunteer-${volunteer.id}`} volunteer={volunteer} />
          })
    )
  };

export default getVolunteersCards;