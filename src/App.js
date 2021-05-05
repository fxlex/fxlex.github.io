import 'semantic-ui-css/semantic.min.css'

import './App.css';


import React from 'react'
import * as THREE from 'three'
import NET from 'vanta/dist/vanta.net.min'

import { Grid, Image, Card, Tab, Breadcrumb, Icon, Reveal } from 'semantic-ui-react'

import {
  BrowserRouter as Router,
  matchPath,
  NavLink,
  Switch,
  Route,
  Redirect
} from "react-router-dom";

import Work from './components/work'
import FieldsOfExpertise from './components/fields_of_expertise'
import FieldsOfInterest from './components/fields_of_interest'
import Hobbies from './components/hobbies'
import Publications from './components/publications'
import ScientificWork from './components/scientific_work'
import Patents from './components/patents'

const panes = [
  { menuItem: {
    as: NavLink,
    id: "work",
    content: "Work",
    to: "/",
    exact: true,
    key: "work"
  }, render: () => <Tab.Pane><Work /></Tab.Pane> },
  { menuItem: {
    as: NavLink,
    id: "expertise",
    content: "Expertise/Interest",
    to: "/expertise_and_interest",
    exact: true,
    key: "expertise"
  }, render: () => <Tab.Pane><FieldsOfExpertise /><FieldsOfInterest /><Hobbies /></Tab.Pane>},
  { menuItem: {
    as: NavLink,
    id: "publications",
    content: "Publications",
    to: "/publications",
    exact: true,
    key: "puplications"
  }, render: () => <Tab.Pane><Publications /></Tab.Pane> },
  { menuItem: {
    as: NavLink,
    id: "scientific_work",
    content: "Scientific Work",
    to: "/scientific_work",
    exact: true,
    key: "scientific_work"
  }, render: () => <Tab.Pane><ScientificWork /></Tab.Pane> },
  { menuItem: {
    as: NavLink,
    id: "patents",
    content: "Patents",
    to: "/patents",
    exact: true,
    key: "patents"
  }, render: () => <Tab.Pane><Patents /></Tab.Pane>}  
  
]

const defaultActiveIndex = Math.max(0,panes.findIndex(pane => {
  return !!matchPath(window.location.pathname, {
    path: pane.menuItem.to,
    exact: true
  });
}));

class Content extends React.Component {
  
  render() {
    return (
      <Grid id="content" columns={3}>
      <Grid.Row>
        <Grid.Column computer={1} largeScreen={3} />
        <Grid.Column align="center" computer={4} mobile={16}>
          <Card fluid>
            <Reveal animated='fade'>
              <Reveal.Content visible>
                <Image src='./me.jpg' fluid />
              </Reveal.Content>
              <Reveal.Content hidden>
                <Image src='./me_color.jpeg' fluid  />
              </Reveal.Content>
            </Reveal>
            <Card.Content>
              <Card.Header>Alexander Pann, B.Sc.</Card.Header>
              <Card.Meta>
                <span>Computer Scientist</span>
              </Card.Meta>
              <Card.Description>
                Alexander is a computer science student currently studying for his master's degree.<br />
              </Card.Description>
              <Card.Content extra>
                <Breadcrumb>
                  <Breadcrumb.Section link>
                    <a href="https://alexanderpann.wordpress.com/" rel="noreferrer" target="_blank">MPS Blog</a>
                  </Breadcrumb.Section>
                  <Breadcrumb.Divider />
                  <Breadcrumb.Section link>
                    <a href="https://twitter.com/alexanderpann" rel="noreferrer" target="_blank"><Icon name='twitter' /></a>
                  </Breadcrumb.Section>
                  <Breadcrumb.Divider />
                  <Breadcrumb.Section link>
                    <a href="https://github.com/fxlex" rel="noreferrer" target="_blank"><Icon name='github' /></a>
                  </Breadcrumb.Section>
                  <Breadcrumb.Divider />
                  <Breadcrumb.Section>
                    <a href="mailto:alexander.pann@gmail.com" rel="noreferrer" target="_blank"><Icon name='mail' /></a>
                  </Breadcrumb.Section>
                  <Breadcrumb.Divider />
                  <Breadcrumb.Section>
                    <a href="https://github.com/fxlex/fxlex.github.io" rel="noreferrer" target="_blank"><Icon name='code' /></a>
                  </Breadcrumb.Section>
                  
                </Breadcrumb>
              </Card.Content>
            </Card.Content>
          </Card>
        </Grid.Column>
        <Grid.Column largeScreen={6} computer={9} mobile={16}>
          <Router>
            <Switch>
              <Tab panes={panes} defaultActiveIndex={defaultActiveIndex}   menu={{ borderless: true, attached: false, tabular: false, className: "wrapped" }} />
            </Switch>
            <Route exact path="/wafer_layout" render={() => {window.location.href="/Wafer_Layout_and_Yield_Simulator/index.html"}}>
              
            </Route>
            <Route path="*">
              <Redirect to="/" />
              </Route>
          </Router>
        </Grid.Column>
      </Grid.Row>
    </Grid>
    )
  }
}
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
