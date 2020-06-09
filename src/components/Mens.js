import React, { Component } from 'react'
import { Grid, Image } from 'semantic-ui-react'
import logo1 from '../images/young-man-in-bright-fashion.jpg'
import logo2 from '../images/black-shirt-with-zipper.jpg'
import logo3 from '../images/mens-black-fall-jacket.jpg'
import logo4 from '../images/mens-fall-jacket-in-black.jpg'

export default class Mens extends Component {
    render() {
        return (
            <div>
                <Grid centered columns={2}>
    <Grid.Column>
      <Image src={logo1} />
    </Grid.Column>

    <Grid.Row centered columns={4}>
      <Grid.Column>
        <Image src={logo2} />
      </Grid.Column>
      <Grid.Column>
        <Image src={logo3} />
      </Grid.Column>
      <Grid.Column>
        <Image src={logo4} />
      </Grid.Column>
    </Grid.Row>

    {/* <Grid.Row centered columns={4}>
      <Grid.Column>
        <Image src={} />
      </Grid.Column>
      <Grid.Column>
        <Image src={} />
      </Grid.Column>
      <Grid.Column>
        <Image src={} />
      </Grid.Column>
      <Grid.Column>
        <Image src={} />
      </Grid.Column>
    </Grid.Row> */}
  </Grid>
            </div>
        )
    }
}
