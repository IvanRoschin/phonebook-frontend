import { useCurrentQuery } from 'redux/auth/authApi';

import { MDBModal, MDBModalDialog, MDBModalContent } from 'mdb-react-ui-kit';

export const CurrentUser = () => {
  const { data: currentUser } = useCurrentQuery();
  console.log('currentUser', currentUser);

  return (
    <div className="vh-100 gradient-custom">
      <MDBModal show={true}>
        <MDBModalDialog centered>
          <MDBModalContent>
            <p
              className="mt-3"
              style={{ marginLeft: 'auto', marginRight: 'auto' }}
            ></p>
          </MDBModalContent>
        </MDBModalDialog>
      </MDBModal>
    </div>
  );
};
