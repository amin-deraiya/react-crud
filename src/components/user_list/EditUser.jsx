import React from 'react';

export default class EditUser extends React.Component {
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

  componentDidUpdate(prevProps) {
    if (this.props.user !== prevProps.user) {
      this.setState({
        id: this.props.user?.id,
        username: this.props.user?.username,
        phone: this.props.user?.phone,
        website: this.props.user?.website,
        company: this.props.user?.company,
      });
    }
  }

  handleChange = (e) => {
    this.setState({
      [e.target.name]: e.target.value,
    });
  };

  render() {
    const { id, username, phone, website, company } = this.state;
    return (
      <div>
        <div className='modal fade' id='editUser' aria-labelledby='exampleModalLabel' aria-hidden='true'>
          <div className='modal-dialog'>
            <div className='modal-content p-2'>
              <div className='modal-body'>
                <div className='mb-2 d-flex'>
                  <span className='me-3'>
                    <i className='fal fa-user'></i>
                  </span>
                  <input
                    type='text'
                    className='form-control'
                    value={username}
                    name='username'
                    placeholder="username"
                    onChange={this.handleChange}
                  />
                </div>

                <div className='mb-2 d-flex'>
                  <span className='me-3'>
                    <i className='fal fa-phone'></i>
                  </span>
                  <input
                    type='text'
                    className='form-control'
                    value={phone}
                    name='phone'
                    placeholder="phone"
                    onChange={this.handleChange}
                  />
                </div>

                <div className='mb-2 d-flex'>
                  <span className='me-3'>
                    <i className='fal fa-globe'></i>
                  </span>
                  <input
                    type='text'
                    className='form-control'
                    placeholder="website"
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
                    placeholder="company"
                    className='form-control'
                    value={company}
                    name='company'
                    onChange={this.handleChange}
                  />
                </div>
              </div>
              <div className='modal-footer'>
                <button type='button' className='btn btn-secondary' data-bs-dismiss='modal'>
                  Close
                </button>
                <button
                  type='button'
                  data-bs-dismiss='modal'
                  className='btn btn-primary'
                  onClick={() => this.props.editedUser(id, username, phone, website, company)}
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
