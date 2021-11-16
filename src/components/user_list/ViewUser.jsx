import  React from 'react';

export default function ViewUser({ user }) {

  return (
    <div>
      <div className='modal fade' id='viewUser' aria-labelledby='exampleModalLabel' aria-hidden='true'>
        <div className='modal-dialog'>
          <div className='modal-content p-2'>
            <button
              type='button'
              className='btn-close ms-auto'
              data-bs-dismiss='modal'
              aria-label='Close'
            ></button>
            <div className='modal-body'>
              <div className='mb-2'>
                <span className='me-3'>
                  <i className='fal fa-user'></i>
                </span>
                <span>{user?.username}</span>
              </div>

              <div className='mb-2'>
                <span className='me-3'>
                  <i className='fal fa-phone'></i>
                </span>
                <span>{user?.phone}</span>
              </div>

              <div className='mb-2'>
                <span className='me-3'>
                  <i className='fal fa-globe'></i>
                </span>
                <span>{user?.website}</span>
              </div>

              <div className='mb-2'>
                <span className='me-3'>
                  <i className='fal fa-building'></i>
                </span>
                <span>{user?.company}</span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
