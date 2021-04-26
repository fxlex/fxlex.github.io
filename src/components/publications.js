import React from 'react'
import { Card, Image } from 'semantic-ui-react'

export default class PublicationsComponent extends React.Component {

    render() {
    
    return (
    <>
        <Card fluid>
            <Card.Content>
                <Card.Header>Paper: MetaR - Towards an R Notebook with Composable Languages</Card.Header>
                <Card.Meta>
                <span className='date'>2016</span>
                </Card.Meta>
                <Card.Description>
            Co-author of paper for congress at the Cold Spring Harbor Laboratory, Long Island, New York
                </Card.Description>
            </Card.Content>
            <Card.Content extra>
                <Image rounded href="./publications/csh.pdf" rel="noreferrer" target="_blank" src='images/csh.png' alt="Cold Spring Harbor" size="medium"/>
            </Card.Content>
        </Card>

        <Card fluid>
            <Card.Content>
                <Card.Header>Booklet: MetaR</Card.Header>
                <Card.Meta>
                <span className='date'>2016</span>
                </Card.Meta>
                <Card.Description>
            Co-author of booklet MetaR (JetBrains MPS)
                </Card.Description>
            </Card.Content>
            <Card.Content extra>
                <Image rounded href="https://books.google.at/books?id=A9x8BgAAQBAJ&dq=MetaR+fab+ien+campagne+Alexander+Pann&hl=de&source=gbs_navlinks_s" rel="noreferrer" target="_blank" src='images/metar.png' alt="MetaR" size="medium"/>
            </Card.Content>
        </Card>

        <Card fluid>
            <Card.Content>
                <Card.Header>Pre-scientific work: Processing </Card.Header>
                <Card.Meta>
                <span className='date'>2012</span>
                </Card.Meta>
                <Card.Description>
                Title: Processing - Entdecke deine Fähigkeiten
                </Card.Description>
            </Card.Content>
            <Card.Content extra>
                <Image rounded href="./publications/Processing.pdf" rel="noreferrer" target="_blank" src='images/processing_cover.png' alt="Processing" size="medium"/>
            </Card.Content>
        </Card>
    </>
    )
    }
}