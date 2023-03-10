import { useState, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import { MDBModal, MDBModalDialog, MDBModalContent } from 'mdb-react-ui-kit';

export const LoadingToRedirect = () => {
  const [count, setCound] = useState(5);
  const navigate = useNavigate();

  useEffect(() => {
    const interval = setInterval(() => {
      setCound(currentCount => currentCount - 1);
    }, 1000);

    count === 0 && navigate('/auth');
    return () => clearInterval(interval);
  }, [count, navigate]);
  return (
    <div className="vh-100 gradient-custom">
      <MDBModal show={true}>
        <MDBModalDialog centered>
          <MDBModalContent>
            <p
              className="mt-3"
              style={{ marginLeft: 'auto', marginRight: 'auto' }}
            >
              Redirecting in {count} sec
            </p>
          </MDBModalContent>
        </MDBModalDialog>
      </MDBModal>
    </div>
  );
};
