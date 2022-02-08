import PhotoCameraIcon from '@material-ui/icons/PhotoCamera';
import ListAltIcon from '@material-ui/icons/ListAlt';
import ChildFriendlyIcon from '@material-ui/icons/ChildFriendly';
import SchoolIcon from '@material-ui/icons/School';
import ComputerIcon from '@material-ui/icons/Computer';
import LanguageIcon from '@material-ui/icons/Language';
import PetsIcon from '@material-ui/icons/Pets';

function setCategoryIcon(category){
    let icon;
    let avatarColor;
    
    switch (category){
        case 'Korepetycje':
            icon = <SchoolIcon/>;
            avatarColor = 'primary';
            break;
        case 'Wyprowadzanie psów':
            icon =<PetsIcon/>;
            avatarColor = 'secondary';
            break; 
        case  "Tłumaczenia":
            icon =<LanguageIcon/>;
            avatarColor = 'tertiary';
            break;
        case  "Opieka nad dziećmi":
            icon =<ChildFriendlyIcon/>;
            avatarColor = 'primary';
            break;
        case  "Strony www":
            icon =<ComputerIcon/>;
            avatarColor = 'secondary';
            break;
        case  "Fotografia":
            icon =<PhotoCameraIcon/>;
            avatarColor = 'tertiary';
            break;
        default:
            icon =<ListAltIcon/>;
            avatarColor = 'primary';  
    }
    return ([icon, avatarColor])             
}

export default setCategoryIcon;
