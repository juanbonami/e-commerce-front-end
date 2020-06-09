import React, { Component } from 'react'
import { Grid, Image } from 'semantic-ui-react'

export default class Mens extends Component {
    render() {
        return (
            <div>
                <Grid centered columns={2}>
    <Grid.Column>
      <Image src='https://react.semantic-ui.com/images/wireframe/image.png' />
    </Grid.Column>

    <Grid.Row centered columns={4}>
      <Grid.Column>
        <Image src='https://react.semantic-ui.com/images/wireframe/image.png' />
      </Grid.Column>
      <Grid.Column>
        <Image src='https://react.semantic-ui.com/images/wireframe/image.png' />
      </Grid.Column>
      <Grid.Column>
        <Image src='https://react.semantic-ui.com/images/wireframe/image.png' />
      </Grid.Column>
    </Grid.Row>

    <Grid.Row centered columns={4}>
      <Grid.Column>
        <Image src='https://react.semantic-ui.com/images/wireframe/image.png' />
      </Grid.Column>
      <Grid.Column>
        <Image src='https://react.semantic-ui.com/images/wireframe/image.png' />
      </Grid.Column>
      <Grid.Column>
        <Image src='https://react.semantic-ui.com/images/wireframe/image.png' />
      </Grid.Column>
      <Grid.Column>
        <Image src='https://react.semantic-ui.com/images/wireframe/image.png' />
      </Grid.Column>
    </Grid.Row>
  </Grid>
            </div>
        )
    }
}
