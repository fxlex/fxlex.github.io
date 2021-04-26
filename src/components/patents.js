import React from 'react'
import { Card, Image } from 'semantic-ui-react'

export default class PatentsComponent extends React.Component {

    render() {
    
    return (
    <>
      <Card fluid>
        <Card.Content>
          <Card.Header>Patent: Multi Focus Lens Camera for Mobile Phones </Card.Header>
          <Card.Meta>
            <span className='date'>2020</span>
          </Card.Meta>
          <Card.Description>
        Status: pending<br />
      Countries: USA, Europe, China, Korea, Japan
          </Card.Description>
        </Card.Content>
        <Card.Content extra>
          <Image src="./images/vision.svg" alt="vision" size="medium" />
        </Card.Content>
      </Card>
    </>
  )
  }
}