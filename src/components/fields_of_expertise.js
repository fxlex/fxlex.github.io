import React from 'react'
import { Segment, Image, List, Header } from 'semantic-ui-react'

export default class FieldsOfExpertiseComponent extends React.Component {

    render() {
    
    return (
    <>
        <Segment>
        <Header as='h3' color="blue" textAlign="center">Fields of expertise</Header>
        <b>Web technologies:</b>
        <List horizontal>
        <List.Item>
            <Image avatar src='/images/html5.png' alt="HTML5" />
            <List.Content>
            HTML5
            </List.Content>
        </List.Item>
        <List.Item>
            <Image avatar src='/images/react.png' alt="React" />
            <List.Content>
            React
            </List.Content>
        </List.Item>
        <List.Item>
            <Image avatar src='/images/vue.png' alt="Vue" />
            <List.Content>
            Vue
            </List.Content>
        </List.Item>
        <List.Item>
            <Image avatar src='/images/es6.jpeg' alt="JavaScript ES6" />
            <List.Content>
            JavaScript ES6
            </List.Content>
        </List.Item>
        </List>
        <br />
        <b>Mobile:</b>
        <List horizontal>
        <List.Item>
            <Image avatar src='/images/java.png' alt="Java" />
            <List.Content>
            Java
            </List.Content>
        </List.Item>
        <List.Item>
            <Image avatar src='/images/android.png' alt="Android" />
            <List.Content>
            Android
            </List.Content>
        </List.Item>
        <List.Item>
            <Image avatar src='/images/kotlin.png' alt="Kotlin" />
            <List.Content>
            Kotlin
            </List.Content>
        </List.Item>
        </List>
        <br />
        <b>Scripts:</b>
        <List horizontal>
        <List.Item>
            <Image avatar src='/images/python.png' alt="Python" />
            <List.Content>
            Python
            </List.Content>
        </List.Item>
        </List>
        <br />
        <b><acronym title="domain specific language">DSL</acronym>:</b>
        <List horizontal>
        <List.Item>
            <Image avatar src='/images/mps.png' alt="JetBrains MPS" />
            <List.Content>
            JetBrains MPS
            </List.Content>
        </List.Item>
        </List>
        </Segment>
    </>
    )
    }
}