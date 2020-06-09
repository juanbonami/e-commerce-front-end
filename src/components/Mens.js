import React, { Component } from 'react'
import { Grid, Image } from 'semantic-ui-react'
import logo1 from '../images/fashionable-man-in-hat.jpg'
import logo2 from '../images/bright-modern-mens-fashion.jpg'
import logo3 from '../images/fashionable-man-checks-time.jpg'
import logo4 from '../images/young-man-in-bright-fashion.jpg'
import logo5 from '../images/a-man-looks-to-the-street-below-from-a-rooftop.jpg'
import logo6 from '../images/man-sits-casually-on-roof-ledge.jpg'
import logo7 from '../images/man-sitting-comfortably-on-roof-ledge.jpg'
import logo8 from '../images/drinking-coffee-on-a-couch.jpg'

export default class Mens extends Component {
    render() {
        return (
            <div>
                <br />
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

    <Grid.Column>
      <Image src={logo7} />
    </Grid.Column>

    <Grid.Row centered columns={4}>
      <Grid.Column>
        <Image src={logo6} />
      </Grid.Column>
      <Grid.Column>
        <Image src={logo5} height="680" width="650" />
      </Grid.Column>
      <Grid.Column>
        <Image src={logo8} />
      </Grid.Column>
    </Grid.Row> 
  </Grid>
            </div>
        )
    }
}
