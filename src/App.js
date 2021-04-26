import 'semantic-ui-css/semantic.min.css'

import './App.css';


import React from 'react'
import * as THREE from 'three'
import NET from 'vanta/dist/vanta.net.min'

import { Grid, Image } from 'semantic-ui-react'
import { Card, Tab } from 'semantic-ui-react'

import Work from './components/work'
import FieldsOfExpertise from './components/fields_of_expertise'
import FieldsOfInterest from './components/fields_of_interest'
import Publications from './components/publications'
import ScientificWork from './components/scientific_work'
import Patents from './components/patents'

const panes = [
  { menuItem: 'Work', render: () => <Tab.Pane><Work /></Tab.Pane> },
  { menuItem: 'Expertise/Interest', render: () => <Tab.Pane><FieldsOfExpertise /><FieldsOfInterest /></Tab.Pane>},
  { menuItem: 'Publications', render: () => <Tab.Pane><Publications /></Tab.Pane> },
  { menuItem: 'Scientific work', render: () => <Tab.Pane><ScientificWork /></Tab.Pane> },
  { menuItem: 'Patents', render: () => <Tab.Pane><Patents /></Tab.Pane>}  
]


const Content = () =>
  <Grid id="content" columns={3}>
    <Grid.Row>
      <Grid.Column computer={1} largeScreen={4} />
      <Grid.Column align="center" computer={4} mobile={16}>
        <Card fluid>
          <Image src='./me.jpg' wrapped ui={false} alt="Alexander Pann" />
          <Card.Content>
            <Card.Header>Alexander Pann, B.Sc.</Card.Header>
            <Card.Meta>
              <span>Computer Scientist</span>
            </Card.Meta>
            <Card.Description>
              Alexander is a computer science student currently studying for his master's degree.<br />
            </Card.Description>
            <Card.Content extra>
              <a href="https://alexanderpann.wordpress.com/">
                [MPS Blog]
              </a>

              <a href="https://twitter.com/alexanderpann">
                [Twitter]
              </a>

              <a href="mailto:alexander.pann@gmail.com">
                [Mail]
              </a>
            </Card.Content>
          </Card.Content>
        </Card>
      </Grid.Column>
      <Grid.Column largeScreen={6} computer={9} mobile={16}>
      <Tab menu={{ borderless: true, attached: false, tabular: false, className: "wrapped" }} panes={panes} />
      </Grid.Column>
    </Grid.Row>
  </Grid>


class App extends React.Component {
  constructor() {
    super()
    this.vantaRef = React.createRef()
  }
  componentDidMount() {
    this.vantaEffect = NET({
      THREE: THREE,
      el: this.vantaRef.current,
      color: 0x19b2d4,
      gyroControls: true,
    })
  }
  componentWillUnmount() {
    if (this.vantaEffect) this.vantaEffect.destroy()
  }
  render() {
    return (
      <>
        <div ref={this.vantaRef} id="background">
          <Content />
        </div>
      </>
    )
  }
}

export default App;
