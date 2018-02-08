import React from 'react'
import { Card, Grid, Image } from 'semantic-ui-react'

export default class Card1 extends React.Component {
	
	render() {
		return(
			<div>
				<Grid>
					<feildset>
						<legend>Profile</legend>
						<Grid.Column mobile={15} tablet={8} computer={8}>
							<Card>
								<Card.Content>
									<Image src = 'matthew.png' />
									<Card.Header>Name</Card.Header>
									<Card.Meta>AGE</Card.Meta>
									<Card.Description>Description. React makes it painless to create interactive UIs. Design simple views for each state in your application, and React will efficiently update and render just the right components when your data changes.<br/><br/> Declarative views make your code more predictable and easier to debug. </Card.Description>
								</Card.Content>
								<Card.Content extra>ghfcbv </Card.Content>
							</Card>
						</Grid.Column>
					</feildset>
				</Grid>
			</div>
		)
	}
}