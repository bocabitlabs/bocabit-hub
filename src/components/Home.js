import React from 'react'
import { Grid, Segment, Image, Header } from 'semantic-ui-react'
import ReactGA from 'react-ga'

import logo from '../logo2.png'

function Home() {
  const blogUrl = 'https://blog.bocabit.com'
  const personalSiteUrl = 'https://renefernandez.com'

  ReactGA.pageview('/')
  return (
    <div className={'Aligner-item'}>
      <Grid stackable columns={1} centered padded>
        <Grid.Column>
          <Header as='h1' icon textAlign='center'>
            <Image
              centered
              size='massive'
              src={logo}
            />
            <Header.Content>{'bocabit.com'}</Header.Content>
          </Header>
          <Segment.Group>
            <Segment textAlign={'center'} className={'main-links'}>
              <a href={blogUrl} title={'Blog'} >Blog</a>
            </Segment>
            <Segment textAlign={'center'} className={'main-links'}>
              <a href={personalSiteUrl} title={'Personal Site'}>Personal Site</a>
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

export default Home
