import React from 'react'
import { Segment, List, Header, Icon, Image } from 'semantic-ui-react'

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
        <Image src='https://images-wixmp-ed30a86b8c4ca887773594c2.wixmp.com/f/f619fab6-bbad-4536-892c-d7d8ef6fd4fb/d5b7itl-d9393724-d503-4cdd-912e-e31d44770d87.png/v1/fill/w_1600,h_782,q_80,strp/the_machine_by_fxlex_d5b7itl-fullview.jpg?token=eyJ0eXAiOiJKV1QiLCJhbGciOiJIUzI1NiJ9.eyJzdWIiOiJ1cm46YXBwOjdlMGQxODg5ODIyNjQzNzNhNWYwZDQxNWVhMGQyNmUwIiwiaXNzIjoidXJuOmFwcDo3ZTBkMTg4OTgyMjY0MzczYTVmMGQ0MTVlYTBkMjZlMCIsIm9iaiI6W1t7ImhlaWdodCI6Ijw9NzgyIiwicGF0aCI6IlwvZlwvZjYxOWZhYjYtYmJhZC00NTM2LTg5MmMtZDdkOGVmNmZkNGZiXC9kNWI3aXRsLWQ5MzkzNzI0LWQ1MDMtNGNkZC05MTJlLWUzMWQ0NDc3MGQ4Ny5wbmciLCJ3aWR0aCI6Ijw9MTYwMCJ9XV0sImF1ZCI6WyJ1cm46c2VydmljZTppbWFnZS5vcGVyYXRpb25zIl19.qD9-6B4TMlzsLGV6AqadgRSOLl1ApDloA8JXb0IkJwE' />
        <iframe width="100%" height="394" src="https://musescore.com/user/156429/scores/5464246/embed" frameborder="0" allowfullscreen="" allow="autoplay; fullscreen"></iframe>
    </Segment> 
    )
    }
}