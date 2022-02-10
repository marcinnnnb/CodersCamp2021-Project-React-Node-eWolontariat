
import VolunteerCard from "../VolunteersPage/VolunteerCard"

function getVolunteersCards(isFilterVolunteers,  selectValue, orderedVolunteers, filteredVolunteers, startSlice, endSlice){
    if (isFilterVolunteers===false || selectValue === '') return (
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