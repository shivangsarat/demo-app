import React from 'react'
import {
  BrowserRouter as Router,
  Route,
  Link
} from 'react-router-dom'
import Profile1 from './profile1.js';
import ComplaintForm from './Complaintform.js';
import Video from './Video.js';
import {Tab} from 'semantic-ui-react';
import Calculator from './Stateup.js';
import Card1 from './Card';


const BasicExample = () => (
  <Router>
    <div>
	<div>
      
        <Link to="/">Profile</Link><br/>
        <Link to="/Complaint">Complaint Form</Link><br/>
        <Link to="/Video">Video</Link><br/>
		<Link to="/Temp">Temprature</Link><br/>
		<Link to="/Card">Card</Link>
      
	  </div>

      <hr/>

      <Route exact path="/" component={Profile1}/>
      <Route path="/Complaint" component={ComplaintForm}/>
      <Route path="/Video" component={Video}/>
	  <Route path="/Temp" component={Calculator}/>
	  <Route path="/Card" component={Card1}/>
    </div>
  </Router>
)
export default BasicExample