// Write your JS code here
import {Component} from 'react'
import './index.css'

class RegistrationForm extends Component {
  state = {
    firstname: '',
    lastname: '',
    firstNameError: false,
    secondNameError: false,
    isFormSubmitted: false,
  }

  onChangeFirstName = event => {
    this.setState({
      firstname: event.target.value,
    })
  }

  onChangeLastName = event => {
    this.setState({
      lastname: event.target.value,
    })
  }

  validateFirstName = () => {
    const {firstname} = this.state

    return firstname !== ''
  }

  onBlurFirstName = () => {
    const isvalidFirstName = this.validateFirstName()
    this.setState({
      firstNameError: !isvalidFirstName,
    })
  }

  renderFirstName = () => {
    const {firstname} = this.state

    return (
      <>
        <label htmlFor="firstname">FIRST NAME</label>
        <input
          type="text"
          id="firstname"
          placeholder="First name"
          value={firstname}
          onChange={this.onChangeFirstName}
          onBlur={this.onBlurFirstName}
        />
      </>
    )
  }

  validateLastName = () => {
    const {lastname} = this.state
    return lastname !== ''
  }

  onBlurLastName = () => {
    const isValidLastName = this.validateLastName()

    this.setState({
      secondNameError: !isValidLastName,
    })
  }

  renderLastName = () => {
    const {lastname} = this.state

    return (
      <>
        <label htmlFor="lastname">LAST NAME</label>
        <input
          type="text"
          id="lastname"
          placeholder="Last name"
          value={lastname}
          onChange={this.onChangeLastName}
          onBlur={this.onBlurLastName}
        />
      </>
    )
  }

  submitForm = event => {
    event.preventDefault()

    const isValidFirstName = this.validateFirstName()
    const isValidLastName = this.validateLastName()

    if (isValidFirstName && isValidLastName) {
      this.setState({
        isFormSubmitted: true,
      })
    } else {
      this.setState({
        firstNameError: !isValidFirstName,
        secondNameError: !isValidLastName,
        isFormSubmitted: false,
      })
    }
  }

  renderFormContainer = () => {
    const {secondNameError, firstNameError} = this.state
    return (
      <form className="form-container" onSubmit={this.submitForm}>
        <div className="input-element">{this.renderFirstName()}</div>
        {firstNameError && <p className="error-message">Required</p>}
        <div className="input-element">{this.renderLastName()}</div>
        {secondNameError && <p className="error-message">Required</p>}
        <button type="submit">Submit</button>
      </form>
    )
  }

  successContainer = () => (
    <div className="success-container">
      <img
        className="success-image"
        src="https://assets.ccbp.in/frontend/react-js/success-icon-img.png"
        alt="success"
      />
      <p className="success-heading">Submitted Successfully</p>
      <button className="resubmit" type="button" onClick={this.onClickResubmit}>
        Submit Another Response
      </button>
    </div>
  )

  onClickResubmit = () =>
    this.setState({isFormSubmitted: false, firstname: '', lastname: ''})

  render() {
    const {isFormSubmitted} = this.state

    return (
      <div className="app-container">
        <h1 className="main-heading">Registration</h1>
        <div>
          {isFormSubmitted
            ? this.successContainer()
            : this.renderFormContainer()}
        </div>
      </div>
    )
  }
}

export default RegistrationForm
