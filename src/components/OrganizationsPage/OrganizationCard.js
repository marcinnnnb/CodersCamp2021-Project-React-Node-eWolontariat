import { Button, Typography, Card, CardContent, CardActions } from '@material-ui/core';
import { useNavigate } from 'react-router';
import { styled } from '@mui/material/styles';

const StyledCard = styled(Card)(({ theme }) => ({
  position: 'relative',
  height: '300px',
  maxWidth: '320px',
  margin: '1.6rem',
  width: '100%',
  display: 'flex',
  flexDirection: 'column',
  justifyContent: 'flex-start',
  alignItems: 'center',
  borderRadius: '12px',
  '& .cardTitle': {
    margin: '1rem',
    padding: '0.8rem 0',
    borderBottom: '1px solid #eee',
    fontSize: '1.1rem',
  },
  '& .describe': {
    fontSize: '0.8rem',
    margin: '0 1rem 2rem 1rem',
  },
  [theme.breakpoints.down('md')]: {
    margin: '2rem 0.6rem',
    height: 'auto',
  },
}));

function OrganizationCard(organization) {
  let navigate = useNavigate();

  const handleClick = (e) => {
    e.preventDefault();
    navigate(`/OrganizationPage/${organization.organization._id}`);
  };
  return (
    <StyledCard raised={true}>
      <CardContent>
        <Typography component="div" variant="h4" className="cardTitle">
          {organization.organization.name}
        </Typography>
        <Typography paragraph className="describe">
          {organization.organization.description.slice(0, 100) + '...'}
        </Typography>
      </CardContent>
      <CardActions>
        <Button
          style={{
            position: 'absolute',
            left: '33%',
            bottom: '30px',
          }}
          variant={'contained'}
          color={'secondary'}
          onClick={handleClick}
        >
          Więcej...
        </Button>
      </CardActions>
    </StyledCard>
  );
}

export default OrganizationCard;
