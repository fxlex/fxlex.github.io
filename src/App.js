import 'semantic-ui-css/semantic.min.css'

import './App.css';


import React from 'react'
import * as THREE from 'three'
import NET from 'vanta/dist/vanta.net.min'

import { Grid, Image } from 'semantic-ui-react'
import { Card, Segment, List, Header } from 'semantic-ui-react'

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

              <a href="mailto:alexander.pann@gmail.com">
                [Mail]
              </a>
            </Card.Content>
          </Card.Content>
        </Card>
      </Grid.Column>
      <Grid.Column largeScreen={5} computer={9} mobile={16}>
      <Segment>
          <Header as='h3' color="blue" textAlign="center">Fields of expertise</Header>
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
          <Header as='h3' color="blue" textAlign="center">Fields of interest</Header>
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
      <Segment attached>
      <Header textAlign="center" color="blue">Selection of previous work</Header>
      </Segment>  
      <Card fluid>
    <Card.Content>
      <Card.Header>Weill Cornell Medicine, Cornell University <small>(NYC, USA)</small></Card.Header>
      <Card.Meta>
        <span className='date'>2016</span>
      </Card.Meta>
      <Card.Description>
      JetBrains MPS programmer for the institute for computational biomedicine of Weill Cornell Medicine <i>(JetBrains MPS, Java, R)</i>.
      </Card.Description>
    </Card.Content>
    <Card.Content extra>
      <Image href="https://weill.cornell.edu/" target="_blank" src='images/weill_cornell.png' alt="Weill Cornell Medicine" size="small"/>
    </Card.Content>
  </Card>
  <Card fluid>
    <Card.Content>
      <Card.Header> Freelance work for ams AG</Card.Header>
      <Card.Meta>
        <span className='date'>2013 - present</span>
      </Card.Meta>
      <Card.Description>
        Development of scripts and web tools that are used in production and by clients of ams AG. <i>(web technologies, Python)</i>
      </Card.Description>
    </Card.Content>
  </Card>
  <Card fluid>
    <Card.Content>
      <Card.Header>ams AG</Card.Header>
      <Card.Meta>
        <span className='date'>2012</span> (Styria, Austria)
      </Card.Meta>
      <Card.Description>
      Internship at the marketing communication department.
      </Card.Description>
    </Card.Content>
    <Card.Content extra>
      <Image href="http://ams.com" target="_blank" src='images/ams.svg' size="small" alt="ams AG logo"/>
    </Card.Content>
  </Card>
  <Card fluid>
    <Card.Content>
      <Card.Header>EP45</Card.Header>
      <Card.Meta>
        <span className='date'>2015</span>
      </Card.Meta>
      <Card.Description>
      Development of an Android app that targets solo entertainers <i>(Android, Kotlin)</i>.
      </Card.Description>
    </Card.Content>
    <Card.Content extra>
      <Image href="https://apkcombo.com/playback-karaoke-player-pro/com.ep45.pro/" target="_blank" src='images/ep45.png' alt="EP45" size="small"/>
    </Card.Content>
  </Card>
  <Card fluid>
    <Card.Content>
      <Card.Header>Tire pressure simulator</Card.Header>
      <Card.Meta>
        <span className='date'>2015</span>
      </Card.Meta>
      <Card.Description>
      Development of a simulator for ams AG for the long night of research <i>(Unity, C#)</i>.
      </Card.Description>
    </Card.Content>
    <Card.Content extra>
      <Image href="https://www.youtube.com/watch?v=q5y2tZ_kLn8" target="_blank" src='images/tire_pressure_ams.png' alt="Tire pressure Simulator" size="small"/>
    </Card.Content>
  </Card>
  <Card fluid>
    <Card.Content>
      <Card.Header>Hue Gesture</Card.Header>
      <Card.Meta>
        <span className='date'>2016</span>
      </Card.Meta>
      <Card.Description>
      Demonstration app that allowed to control Philips Hue lights with gestures <i>(Android, Kotlin)</i>.
      </Card.Description>
    </Card.Content>
    <Card.Content extra>
    <Image href="https://www.youtube.com/watch?v=nhD6PNcnAys" target="_blank" src='images/hue_gesture_video.png' alt="Tire pressure Simulator" size="small"/>
   
    </Card.Content>
  </Card>

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
