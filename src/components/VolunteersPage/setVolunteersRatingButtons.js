import Categories from "../../assets/data/Categories";
import setCategoryIcon from "../../theme/setCategoryIcon";

function setVolunteersRatingButtons (volunteersList){
    
    const thePopularCategoriesButtons = (Categories.map(category=>{
        let rate=0;
        if(volunteersList.volunteers){
            volunteersList.volunteers?.map(volunteer=>{
                if (volunteer.categories){
                    (volunteer?.categories).forEach(volunteerCategory=>{
                        if(volunteerCategory===category.value){
                            rate++;
                        }
                    });
                } else {
                    rate=null;
                }
                
                return rate;
            });
        } else {
            rate = 0;
        }
        
        category.rate=rate;
        category.buttonColor = setCategoryIcon(category.value)[1];
        category.icon = setCategoryIcon(category.value)[0];
        return category
        })).sort(compare);

    return thePopularCategoriesButtons;
}

export default setVolunteersRatingButtons;

function compare( a, b ) {
    if ( a.rate > b.rate  ){
      return -1;
    }
    if ( a.rate < b.rate ){
      return 1;
    }
    return 0;
  };
