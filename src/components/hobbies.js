import React from 'react'
import { Segment, List, Header, Icon } from 'semantic-ui-react'

export default class HobbiesComponent extends React.Component {

    constructor(props) {
        super(props);
        this.state = {hobbies: ["Playing piano (study at the Johann Fuchs Music Academy Graz)","Composing own music", "Playing snooker"]};
      }

    render() {
    
    return (
    <Segment>
        <Header as='h3' color="blue" textAlign="center">Hobbies</Header>
        <List>{ this.state.hobbies.map(hobby => <List.Item><Icon name='right triangle' />{hobby}</List.Item>)}</List>
    </Segment> 
    )
    }
}