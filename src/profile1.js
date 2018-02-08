import React from 'react';
import { Image, Grid, Segment } from 'semantic-ui-react';
import ComplaintForm from './Complaintform.js';

export default class Profile1 extends React.Component {
	render(){
		return (
			<div>
				<fieldset>
					<legend><h3>Profile</h3></legend>
					<Grid textAlign='center'>
						<Grid.Row><h1>SHIVANG SARAT</h1></Grid.Row>
					</Grid>
					<Grid columns={2} textAlign='left'>
						<Grid.Column mobile={14} tablet={8} computer={8}><Segment>
								<Image src="http://i64.tinypic.com/21kdutu.jpg" />
							</Segment></Grid.Column>
							<Grid.Column mobile={14} tablet={8} computer={8}>
							<Grid.Row><Segment>
									<h1>About</h1>
									<p>
										Experienced Event Specialist with a demonstrated history of working in the education management industry. Skilled in Search Engine Optimization (SEO), Core Java, Web Content Writing, Java, and C. Strong operations professional with a Bachelor of Technology (B.Tech.) focused in Computer Science from MANIPAL UNIVERSITY, JAIPUR.
									</p>
								</Segment></Grid.Row>
							<Grid.Row>
								<Segment>
									<h1>Languages</h1>
									<ol>
										<li>HTML</li>
										<li>CSS</li>
										<li>JavaScript</li>
										<li>jQuery</li>
										<li>JSON</li>
										<li>PHP</li>
										<li>MySQL</li>
										<li>BootStrap</li>
										<li>React.js</li>
										<li>Semantic UI</li>
									</ol>
								</Segment>
								</Grid.Row>
								<Grid.Row><Segment>
									<h1>Connect</h1>
									<ol>
										<li>LinkedIn: <a href="https://www.linkedin.com/in/shivang-sarat-5761aa66/" target="_blank">Here</a></li>
										<li>Facebook: <a href="https://www.facebook.com/shivangsarat" target="_blank">Here</a></li>
										<li>GitHub: <a href="https://github.com/shivangsarat" target="_blank">Here</a></li>
									</ol>
								</Segment></Grid.Row>
							</Grid.Column>
						</Grid>
				</fieldset>
			</div>
		);
	}
}