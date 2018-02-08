import React, { Component } from 'react';
import { Container, Button, Input, Icon, Grid, Segment, Divider } from 'semantic-ui-react';

export default class ComplaintForm extends Component {		
		Clpt = () => {
			window.alert("Submitted");
			console.log("Submitted");
		}

	
	render() {
		return (
			<Container fluid>
				<Grid>
				<Grid.Column mobile={14} tablet={8} computer={8}>
				<div>
					<form>
						<Input type="text" placeholder='Name' /><br/>
						<label>Grivence Issue</label><br/>
						<Input list='complaint' placeholder='Issue facing...' />
							<datalist id='complaint'>
								<option value='1' />
								<option value='2' />
								<option value='3' />
								<option value='4' />
								<option value='5' />
							</datalist><br/><br/>
						<Input fluid placeholder="Explain your issue in detail.." /><br/>
						<Button basic color="red" onClick={this.Clpt.bind(this)}>Submit</Button>
					</form>
				</div>
				</Grid.Column>
				</Grid>
			</Container>
		);
	}
}