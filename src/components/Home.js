import React, { Component } from 'react'
import { Grid, Segment, Image, Header } from 'semantic-ui-react'
import ReactGA from 'react-ga'

import logo from '../logo2.png'
import ExternalLink from './ExternalLink'

class Home extends Component {
  blogUrl = 'https://blog.bocabit.com'
  personalSiteUrl = 'https://renefernandez.com'

  render() {
    ReactGA.pageview('/')
    return (
      <div className={'Aligner-item'}>
        <Grid stackable columns={1} centered padded>
          <Grid.Column>
            <Segment.Group>
              <Header as='h2' icon textAlign='center'>
                <Image
                  centered
                  size='large'
                  src='logo'
                />
                <Header.Content>{'bocabit.com'}</Header.Content>
              </Header>

              <Segment textAlign={'center'} className={'main-links'}>
                <Header as={'h1'}>
                  <Image src={logo} rounded />
                </Header>
              </Segment>
              <Segment textAlign={'center'} className={'main-links'}>
                <a linkUrl={this.blogUrl} title={'Blog'} >Blog</a>
              </Segment>
              <Segment textAlign={'center'} className={'main-links'}>
                <a href={this.personalSiteUrl} title={'Personal Site'}></a>
              </Segment>
              <Segment basic textAlign={'center'}>
                <small>{'2020 - René Fernandez'}</small>
              </Segment>
            </Segment.Group>
          </Grid.Column>
        </Grid>
      </div>
    )
  }
}

export default Home
