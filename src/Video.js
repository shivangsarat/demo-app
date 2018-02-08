import React, { Component } from 'react'
import { Button, Divider, Embed, Grid } from 'semantic-ui-react'

export default class Video extends Component {
  state = {}

  handleClick = () => this.setState({ active: true })

  render() {
    const { active } = this.state

    return (
      <div>
	  <Grid>
	  <Grid.Column mobile={14} tablet={8} computer={8}>
        <Embed
          id='BpCyoXv95ME'
          placeholder='/assets/images/image-16by9.png'
          source='youtube'
        />

        <Divider hidden />

        <Button
          content='Activate'
          icon='bomb'
          labelPosition='left'
          onClick={this.handleClick}
        />
		</Grid.Column>
		</Grid>
      </div>
    )
  }
}