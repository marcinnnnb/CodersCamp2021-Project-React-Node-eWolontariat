import { Box, CircularProgress } from '@material-ui/core';
import { useEffect } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { selectAllOrganizations } from '../../store/organizationSlice';
import { fetchOrganizations } from '../../store/organizationSlice';
import OrganizationCard from '../OrganizationsPage/OrganizationCard';

const OrganizationList = ({ startSlice, endSlice }) => {
  const dispatch = useDispatch();
  const organizationsList = useSelector((state) => state.organization.organizations);
  const organizationsStatus = useSelector((state) => state.organization.status);
  const error = useSelector((state) => state.organization.error);

  useEffect(() => {
    if (organizationsStatus === 'idle') {
      dispatch(fetchOrganizations());
    }
  }, [organizationsStatus, dispatch]);

  let content;

  if (organizationsStatus === 'loading...') {
    content = (
      <Box style={{ color: 'red' }} padding={2} align={'center'}>
        <CircularProgress style={{ margin: '2rem' }} align={'center'} color={'secondary'} />
      </Box>
    );
  } else if (organizationsStatus === 'succeeded (:') {
    content = (
      <Box
        display={'flex'}
        flexDirection={'row'}
        flexWrap={'wrap'}
        padding={'0 2rem 4rem 2rem'}
        justifyContent={'center'}
      >
        {organizationsList.length > 0 &&
          organizationsList.slice(startSlice, endSlice).map((organization, id) => {
            return (
              <OrganizationCard key={`item-${organization.id}`} organization={organization} id={organization.id} />
            );
          })}
      </Box>
    );
  } else if (organizationsStatus === 'failed :(') {
    content = (
      <Box style={{ color: 'red' }} padding={2} align={'center'}>
        ERROR: {error}
      </Box>
    );
  }
  return content;
};

export default OrganizationList;
