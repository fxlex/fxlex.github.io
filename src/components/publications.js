import React from 'react'
import { Card, Image } from 'semantic-ui-react'

export const Publication = ({header, date, description, href, src, alt}) => {
    return (
    <Card fluid>
        <Card.Content>
            <Card.Header>{header}</Card.Header>
            <Card.Meta>
            <span className='date'>{date}</span>
            </Card.Meta>
            <Card.Description>{description}</Card.Description>
        </Card.Content>
        <Card.Content extra>
            <figure>
                <Image rounded href={href} rel="noreferrer" target="_blank" src={src} alt={alt} size="medium"/>
            </figure>
        </Card.Content>
    </Card>
    )
  }

export default class PublicationsComponent extends React.Component {

    render() {
    return (
    <>
        <Publication header="Paper: MetaR - Towards an R Notebook with Composable Languages" date="2016" description="Co-author of paper for congress at the Cold Spring Harbor Laboratory, Long Island, New York" href="./publications/csh.pdf" src="images/csh.png" alt="Cold Spring Harbor" />
        <Publication header="Booklet: MetaR" date="2016" description="Co-author of booklet MetaR (JetBrains MPS)" href="https://www.google.at/search?tbm=bks&hl=de&q=MetaR+Alexander+Pann" src="images/metar.png" alt="MetaR" />
        <Publication header="Pre-scientific work: Processing" date="2012" description="Title: Processing - Entdecke deine Fähigkeiten" href="./publications/Processing.pdf" src="images/processing_cover.png" alt="Processing" />
    </>
    )
    }
}