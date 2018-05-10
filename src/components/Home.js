import React, { Component } from 'react'
import { Grid, Segment, Image, Header, Item } from 'semantic-ui-react'
import ReactGA from 'react-ga'

import logo from '../logo2.png'
import ExternalLink from './ExternalLink'
import Separator from './Separator'

class Home extends Component {
  blogUrl = 'http://blog.bocabit.com'
  personalSiteUrl = 'http://renefernandez.com'

  render () {
    ReactGA.pageview('/')
    return (
      <div className={'Aligner-item'}>
        <Grid stackable columns={1} centered padded>
          <Grid.Column>
            <Segment.Group>
              <Segment textAlign={'center'} className={'main-links'}>
                <Header as={'h1'}>
                  <Image src={logo} rounded /> {'bocabit.com'}
                </Header>
              </Segment>
              <Segment textAlign={'center'} className={'main-links'}>
                <ExternalLink linkUrl={this.blogUrl} linkLabel={'Blog'} />
              </Segment>
              <Segment textAlign={'center'} className={'main-links'}>
                <ExternalLink linkUrl={this.personalSiteUrl} linkLabel={'Personal Site'} />
              </Segment>
              <Segment basic textAlign={'center'}>
                <small>{'2018 - René Fernandez'}</small>
              </Segment>
            </Segment.Group>
          </Grid.Column>
        </Grid>
      </div>
    )
  }
}

export default Home
