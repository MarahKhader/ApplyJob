
import React from 'react'
import './Signup.css';

class Signup extends React.Component {
    constructor() {
    super();
    this.state = {
      input: {},
      errors: { }
    };
    this.handleChange = this.handleChange.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
  }
  handleChange(event) {
    let input = this.state.input;
    input[event.target.name] = event.target.value;
    this.setState({
      input
    });
  }
  handleSubmit(event) {
    event.preventDefault();
    if(this.validate()){
        console.log(this.state);
        let input = {};
        input["name"] = ""; 
        input["email"] = "";

        this.setState({input:input});
        alert('The Form is Submited Successfuly!');
    }
  }
  validate(){
    let input = this.state.input;
    let errors = {};
    let isValid = true;

    if (!input["name"]) {
      isValid = false;
      errors["name"] = "Enter a valid name.";
      <br/>
    }

    if (!input["email"]) {
      isValid = false;
      errors["email"] = "Enter Email address.";
    }

    if (typeof input["email"] !== "undefined") {
      var pattern = new RegExp(/^(("[\w-\s]+")|([\w-]+(?:\.[\w-]+)*)|("[\w-\s]+")([\w-]+(?:\.[\w-]+)*))(@((?:[\w-]+\.)*\w[\w-]{0,66})\.([a-z]{2,6}(?:\.[a-z]{2})?)$)|(@\[?((25[0-5]\.|2[0-4][0-9]\.|1[0-9]{2}\.|[0-9]{1,2}\.))((25[0-5]|2[0-4][0-9]|1[0-9]{2}|[0-9]{1,2})\.){2}(25[0-5]|2[0-4][0-9]|1[0-9]{2}|[0-9]{1,2})\]?$)/i);

      if (!pattern.test(input["email"])) {
        isValid = false;
        errors["email"] = "Incorrect Email address.";
      }
    }

    this.setState({
        errors: errors
    });
    
    return isValid;
}

render() {
    return (
      <div className="SignUp">
      <h className="h-txt"> Find Your Dream Job !</h>
        <div className='container'>
        <label style={{color:'white', margin: "35px", fontSize:"35px", fontFamily: 'Franklin Gothic Medium'}}>
         Add Your Information: </label>
        <form onSubmit={this.handleSubmit} className="form">

          <div class="form-group">
            <label for="name"> </label>

            <div className='row'>
            <div className='col-6'>

            <label> Name:
            <input
              type="text" name="name" value={this.state.input.name} onChange={this.handleChange}
              class="form-control" placeholder="Your Name" id="name" />
              <div className="text-danger">{this.state.errors.name}</div>
            </label>
          </div>

          <div className='col-6'>

          <div class="form-group">
            <label for="email"> Email: </label>
            <input
              type="text" name="email" value={this.state.input.email} onChange={this.handleChange}
              class="form-control" placeholder="Enter email" id="email" />
              <div className="text-danger">{this.state.errors.email}</div>
          </div>
          </div>

          <div className='col-6'>
          <label for="DateOfBirth"> Date of Birth: </label> 
          <div class="form-group" style={{  display: "flex", flexDirection: "row"}}>
            <input type="text" name="day" className="date" placeholder="DD" id="day" cols="2" required/>
            <label> / </label>
            <input type="text" name="month" className="date" placeholder="MM" id="month" cols="2" required/>
            <label> / </label>
            <input type="text" name="year" className="date" placeholder="YYYY" id="year" cols="4" required/>
          </div>

          </div>

          
          <div className='col-6'>

          <div class="form-group">
            <label for="Gender">  Gender: </label>
            <select name="gender" value={this.state.input.confirm_password} onChange={this.handleChange}
              class="form-control" id="gender" required >
                <option value="Female">Female</option>
                <option value="Male">Male</option>
            </select>
          </div>
     
          </div>

          <div className='col-6'>

          <div class="form-group">
            <label for="Nationality">  Nationality: </label>
            <select name="nationality" value={this.state.input.confirm_password} onChange={this.handleChange}
              class="form-control" id="nationality" required>
                <option value="pal">Palestinian</option>
                <option value="other">Other</option>
            </select>
          </div>

          </div>
          </div>

          <div className='row'>
          <div className='col-6'>

          <div class="form-group">
            <label for="Edu">  Highet Education Level: </label>
            <select name="edu" value={this.state.input.confirm_password} onChange={this.handleChange}
              class="form-control" id="edu" required>
                <option value="professor">Professor</option>
                <option value="bechelor">Bachelor</option>
                <option value="diploma">Diploma</option>
                <option value="other">Other</option>
            </select>
          </div>

          </div>

          <div className='col-6'>

          <div className="form-group">
            <label for="cv"> Upload your CV...  </label>
            <input type="file" name="cv" value={this.state.input.confirm_password} onChange={this.handleChange}
              class="upload-btn" id="cv" required/>
          </div>

          </div>

          <div className='col-6'>

          <div className="form-group">
            <label for="video"> Upload a video...  </label>
            <input type="file" name="vid" value={this.state.input.confirm_password} onChange={this.handleChange}
              class="upload-btn" id="vid" required/>
            <br/> <br/>
            <label className="text-video"> Introduce yourself in a video within 30seconds for best chance! </label>
          </div>

          </div>

          <input type="submit" value="Apply!" class="btn-success"/>
          </div>
          </div>
        </form>

      </div>


    </div>
    );
  }
}
export default Signup;