import 'semantic-ui-css/semantic.min.css'

import './App.css';


import React from 'react'
import * as THREE from 'three'
import NET from 'vanta/dist/vanta.net.min'

import { Grid, Image } from 'semantic-ui-react'
import { Card, Feed, Segment, List, Header } from 'semantic-ui-react'

const Content = () =>
  <Grid id="content" columns={3}>
    <Grid.Row>
      <Grid.Column computer={1} largeScreen={4} />
      <Grid.Column align="center" computer={4} mobile={16}>
        <Card fluid>
          <Image src='./me.jpg' wrapped ui={false} />
          <Card.Content>
            <Card.Header>Alexander Pann, B.Sc.</Card.Header>
            <Card.Meta>
              <span>Computer Science</span>
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
            </Card.Content>
          </Card.Content>
        </Card>
      </Grid.Column>
      <Grid.Column largeScreen={5} computer={9} mobile={16}>
        <Card fluid>
          <Card.Content>
            <Card.Header>Selection of previous work</Card.Header>
          </Card.Content>
          <Card.Content>
            <Feed size="large">
              <Feed.Event>
                <Feed.Content>
                  <Feed.Date content='2012' />
                  <Feed.Summary>
                    ams AG <small>(Styria, Austria)</small>
                  </Feed.Summary>
                  <Feed.Extra text>
                    Internship at the marketing communication department.
                  </Feed.Extra>
                  <Feed.Extra images>
                    <a href="http://www.ams.com" target="_blank" rel="noreferrer">
                      <img src='images/ams.svg' alt="ams AG" />
                    </a>
                  </Feed.Extra>
                </Feed.Content>

              </Feed.Event>

              <Feed.Event>
                <Feed.Content>
                  <Feed.Date content='2013 - present' />
                  <Feed.Summary>
                    Freelance work for ams AG
              </Feed.Summary>
                  <Feed.Extra text>
                    Development of scripts and web tools that are used in production and by clients of ams AG. (web technologies, Python)
                  </Feed.Extra>
                </Feed.Content>
              </Feed.Event>

              <Feed.Event>
                <Feed.Content>
                  <Feed.Date content='2015' />
                  <Feed.Summary>
                    Android app for solo entertainers
                </Feed.Summary>
                  <Feed.Extra text>
                    Development of an Android app that targets solo musicians (Android, Kotlin).
                  </Feed.Extra>
                  <Feed.Extra images>
                    <a href="https://apkcombo.com/playback-karaoke-player-pro/com.ep45.pro/" target="_blank" rel="noreferrer">
                      <img src='images/ep45.png' alt="EP45" />
                    </a>
                  </Feed.Extra>
                </Feed.Content>
              </Feed.Event>

              <Feed.Event>
                <Feed.Content>
                  <Feed.Date content='2016' />
                  <Feed.Summary>
                    Hue Gesture
                </Feed.Summary>
                  <Feed.Extra text>
                    Demonstration app that allowed to control Philips Hue lights with gestures (Android, Kotlin).
                  </Feed.Extra>

                </Feed.Content>
              </Feed.Event>

              <Feed.Event>
                <Feed.Content>
                  <Feed.Date content='2016' />
                  <Feed.Summary>
                    Tire Pressure simulator
                </Feed.Summary>
                  <Feed.Extra text>
                    Development of a simulator for ams AG for the long night of research (Unity, C#).
                  </Feed.Extra>
                  <Feed.Extra images>
                    <a href="https://www.youtube.com/watch?v=q5y2tZ_kLn8" target="_blank" rel="noreferrer">
                      <img src='images/tire_pressure_ams.png' alt="Tire pressure Simulator" />
                    </a>
                  </Feed.Extra>
                </Feed.Content>
              </Feed.Event>

              <Feed.Event>
                <Feed.Content>
                  <Feed.Date content='2016' />
                  <Feed.Summary>
                    Weill Cornell Medicine, Cornell University <small>(New York City, USA)</small>
                  </Feed.Summary>
                  <Feed.Extra text>
                    JetBrains MPS programmer for the institute for computational biomedicine of Weill Cornell Medicine (JetBrains MPS, Java, R).
                  </Feed.Extra>
                  <Feed.Extra images>
                  <a href="https://weill.cornell.edu/" target="_blank" rel="noreferrer">
                      <img src='images/weill_cornell.png' alt="Weill Cornell Medicine" />
                    </a>
                  </Feed.Extra>
                </Feed.Content>
              </Feed.Event>
            </Feed>
          </Card.Content>
        </Card>

        <Segment>
          <Header as='h3'>Fields of expertise</Header>
          <b>Web technologies:</b>
          <List horizontal>
            <List.Item>
              <Image avatar src='/images/html5.png' />
              <List.Content>
                <List.Header>HTML5</List.Header>
              </List.Content>
            </List.Item>
            <List.Item>
              <Image avatar src='/images/react.png' />
              <List.Content>
                <List.Header>React</List.Header>
              </List.Content>
            </List.Item>
            <List.Item>
              <Image avatar src='/images/vue.png' />
              <List.Content>
                <List.Header>Vue</List.Header>
              </List.Content>
            </List.Item>
            <List.Item>
              <Image avatar src='/images/es6.jpeg' />
              <List.Content>
                <List.Header>JavaScript ES6</List.Header>
              </List.Content>
            </List.Item>
          </List>
          <br />
          <b>Mobile:</b>
          <List horizontal>
            <List.Item>
              <Image avatar src='/images/java.png' />
              <List.Content>
                <List.Header>Java</List.Header>
              </List.Content>
            </List.Item>
            <List.Item>
              <Image avatar src='/images/android.png' />
              <List.Content>
                <List.Header>Android</List.Header>
              </List.Content>
            </List.Item>
            <List.Item>
              <Image avatar src='/images/kotlin.png' />
              <List.Content>
                <List.Header>Kotlin</List.Header>
              </List.Content>
            </List.Item>
          </List>
          <br />
          <b>Scripts:</b>
          <List horizontal>
            <List.Item>
              <Image avatar src='/images/python.png' />
              <List.Content>
                <List.Header>Python</List.Header>
              </List.Content>
            </List.Item>
          </List>
          <br />
          <b>DSLs:</b>
          <List horizontal>
            <List.Item>
              <Image avatar src='/images/mps.png' />
              <List.Content>
                <List.Header>JetBrains MPS</List.Header>
              </List.Content>
            </List.Item>
          </List>
        </Segment>

        <Segment>
          <Header as='h3'>Fields of interest</Header>
          <b>Functional programming</b>
          <List horizontal>
            <List.Item>
              <Image avatar src='/images/haskell.png' />
              <List.Content>
                <List.Header>Haskell</List.Header>
              </List.Content>
            </List.Item>
            <List.Item>
              <Image avatar src='/images/f_sharp.png' />
              <List.Content>
                <List.Header>F#</List.Header>
              </List.Content>
            </List.Item>
            <List.Item>
              <Image avatar src='/images/scala.png' />
              <List.Content>
                <List.Header>Scala</List.Header>
              </List.Content>
            </List.Item>
          </List>
          <br />
          <b>New applications of AI and machine learning</b>
          <br />
          <b>Domain specific languages</b>
          <br />
          <b>Programming paradigms</b>
        </Segment>
      </Grid.Column>
    </Grid.Row>
  </Grid>


class App extends React.Component {
  constructor() {
    super()
    this.vantaRef = React.createRef()
  }
  componentDidMount() {
    document.title = "Alexander Pann, B.Sc."
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
