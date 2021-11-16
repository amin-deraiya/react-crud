import React from 'react';

export default class AddNewUser extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      id: '',
      username: '',
      phone: '',
      website: '',
      company: '',
    };
  }

  handleChange = (e) => {
    this.setState({
      [e.target.name]: e.target.value,
    });
  };

  clearState = () => {
    this.setState({
      id: '',
      username: '',
      phone: '',
      website: '',
      company: '',
    });
  };

  render() {
    const { username, phone, website, company } = this.state;
    return (
      <div>
        <div className='modal fade' id='addUser' aria-labelledby='exampleModalLabel' aria-hidden='true'>
          <div className='modal-dialog'>
            <div className='modal-content p-2'>
              <div className='modal-body'>
                <div className='mb-2 d-flex'>
                  <span className='me-3'>
                    <i className='fal fa-user'></i>
                  </span>
                  <input
                    type='text'
                    required
                    placeholder='username'
                    className='form-control'
                    value={username}
                    name='username'
                    onChange={this.handleChange}
                  />
                </div>

                <div className='mb-2 d-flex'>
                  <span className='me-3'>
                    <i className='fal fa-phone'></i>
                  </span>
                  <input
                    type='text'
                    required
                    placeholder='phone'
                    className='form-control'
                    value={phone}
                    name='phone'
                    onChange={this.handleChange}
                  />
                </div>

                <div className='mb-2 d-flex'>
                  <span className='me-3'>
                    <i className='fal fa-globe'></i>
                  </span>
                  <input
                    type='text'
                    required
                    placeholder='website'
                    className='form-control'
                    value={website}
                    name='website'
                    onChange={this.handleChange}
                  />
                </div>

                <div className='mb-2 d-flex'>
                  <span className='me-3'>
                    <i className='fal fa-building'></i>
                  </span>
                  <input
                    type='text'
                    required
                    placeholder='company'
                    className='form-control'
                    value={company}
                    name='company'
                    onChange={this.handleChange}
                  />
                </div>
              </div>
              <div className='modal-footer'>
                <button
                  type='button'
                  className='btn btn-secondary'
                  data-bs-dismiss='modal'
                  onClick={() => this.clearState()}
                >
                  Close
                </button>
                <button
                  type='button'
                  data-bs-dismiss='modal'
                  className='btn btn-primary'
                  onClick={() => {
                    this.props.addUser(username, phone, website, company);
                    this.clearState();
                  }}
                >
                  Save
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
    );
  }
}
