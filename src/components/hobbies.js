import React from 'react'
import { Segment, List, Header, Icon } from 'semantic-ui-react'

export default class HobbiesComponent extends React.Component {

    render() {
    
    return (
    <>
        <Segment>
            <Header as='h3' color="blue" textAlign="center">Hobbies</Header>
            <List>
                <List.Item>
                <Icon name='right triangle' />
                Playing piano (study at the Johann Fuchs Music Academy Graz).
                </List.Item>
                <List.Item>
                <Icon name='right triangle' />
                Composing own music
                </List.Item>
                <List.Item>
                <Icon name='right triangle' />
                Playing snooker
                </List.Item>
            </List>
        </Segment> 
    </>
    )
    }
}