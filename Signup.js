
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
        input["password"] = "";
        input["confirm_password"] = "";

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

    if (!input["password"]) {
      isValid = false;
      errors["password"] = "Enter you password.";
    }

    if (!input["confirm_password"]) {
      isValid = false;
      errors["confirm_password"] = "Confirm your password.";
    }

    if (typeof input["password"] !== "undefined" && typeof input["confirm_password"] !== "undefined") {

      if (input["password"] != input["confirm_password"]) {
        isValid = false;
        errors["password"] = "Passwords don't match.";
      }
    } 

    this.setState({
        errors: errors
    });
    
    return isValid;
}

render() {
    return (
      <label> Apply Form: </label>,
        <div style={{padding:'80px',margin:'4%',color: 'black', border: '30px solid #289595'}}>
        <label> Information: </label>
        <form onSubmit={this.handleSubmit}>

          <div class="form-group">
            <label for="name"> <br/> </label>
            <input style={{width: '300px', height: '30px'}}
              type="text" name="name" value={this.state.input.name} onChange={this.handleChange}
              class="form-control" placeholder="Your Name" id="name" />
              <div className="text-danger">{this.state.errors.name}</div>
          </div>

          <div class="form-group">
            <label for="email"> <br/> </label>
            <input style={{width: '300px', height: '30px'}}
              type="text" name="email" value={this.state.input.email} onChange={this.handleChange}
              class="form-control" placeholder="Enter email" id="email" />
              <div className="text-danger">{this.state.errors.email}</div>
          </div>

          <div class="form-group">
            <label for="password"> <br/> </label>
            <input style={{width: '300px', height: '30px'}}
              type="password" name="password" value={this.state.input.password} onChange={this.handleChange}
              class="form-control" placeholder="Enter Password" id="password" />
              <div className="text-danger">{this.state.errors.password}</div>
          </div>

          <div class="form-group">
            <label for="password"> <br/> </label>
            <input style={{width: '300px', height: '30px'}}
              type="password" name="confirm_password" value={this.state.input.confirm_password} onChange={this.handleChange}
              class="form-control" placeholder="Enter confirm password" id="confirm_password" />
              <div className="text-danger">{this.state.errors.confirm_password}</div>
          </div>

            <br/>
          <div class="form-group">
            <label for="DateOfBirth"> <br/> Date of Birth: </label> 
          </div> 
          
          <div class="form-group">
            <label for="Gender"> <br/> Gender: </label>
            <select name="gender" value={this.state.input.confirm_password} onChange={this.handleChange}
              class="form-control" id="gender" required >
                <option value="Female">Female</option>
                <option value="Male">Male</option>
            </select>
          </div>
            <br/>        

          <div class="form-group">
            <label for="Nationality"> <br/> Nationality: </label>
            <select name="nationality" value={this.state.input.confirm_password} onChange={this.handleChange}
              class="form-control" id="nationality" required>
                <option value="pal">Palestinian</option>
                <option value="other">Other</option>
            </select>
          </div>

          <div class="form-group">
            <label for="Edu"> <br/> Highet Education Level: </label>
            <select name="edu" value={this.state.input.confirm_password} onChange={this.handleChange}
              class="form-control" id="edu" required>
                <option value="professor">Professor</option>
                <option value="bechelor">Bachelor</option>
                <option value="diploma">Diploma</option>
                <option value="other">Other</option>
            </select>
          </div>

            <br/>
          <div className="form-group">
            <label for="cv"> <br/> Upload your CV...  </label>
            <input type="file" name="cv" value={this.state.input.confirm_password} onChange={this.handleChange}
              class="form-control" id="cv" required/>
          </div>

          <div className="form-group">
            <label for="video"> <br/> Upload a video...  </label>
            <input type="file" name="vid" value={this.state.input.confirm_password} onChange={this.handleChange}
              class="form-control" id="vid" required/>
            <br/>
            <label style={{fontStyle:'italic', color:'#cca300'}}> Introduce yourself in a video within 30seconds for best chance! </label>
          </div>

            <br/>
          <input type="submit" value="Apply!" class="btn btn-success"
            style={{fontStyle:'oblique', color:'#ffff', fontSize:'35px',
            backgroundColor:'#289595', width:'170px', height:'70px' }}
          />
        </form>

      </div>


    );
  }
}
export default Signup;