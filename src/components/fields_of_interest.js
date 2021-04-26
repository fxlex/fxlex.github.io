import React from 'react'
import { Segment, List, Header, Icon, Image } from 'semantic-ui-react'

export default class FieldsOfInterestComponent extends React.Component {

    render() {
    
    return (
    <>
        <Segment>
            <Header as='h3' color="blue" textAlign="center">Fields of interest</Header>
            <b>Functional programming</b>:
            <List horizontal>
                <List.Item>
                <Image avatar src='/images/haskell.png' alt="Haskell" />
                <List.Content>
                    Haskell
                </List.Content>
                </List.Item>
                <List.Item>
                <Image avatar src='/images/f_sharp.png' alt="F Sharp" />
                <List.Content>
                    F#
                </List.Content>
                </List.Item>
                <List.Item>
                <Image avatar src='/images/scala.png' alt="Scala" />
                <List.Content>
                    Scala
                </List.Content>
                </List.Item>
            </List>
            <br />
            <List>
                <List.Item>
                <Icon name='right triangle' />
                New applications of AI and machine learning
                </List.Item>
                <List.Item>
                <Icon name='right triangle' />
                Domain specific languages
                </List.Item>
                <List.Item>
                <Icon name='right triangle' />
                Programming paradigms
                </List.Item>
            </List>
        </Segment> 
    </>
    )
    }
}