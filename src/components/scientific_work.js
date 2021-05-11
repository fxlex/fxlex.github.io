import React from 'react'
import { Card, Image } from 'semantic-ui-react'

export default class ScientificWorkComponent extends React.Component {

    render() {
    
    return (
    <>
        <Card fluid>
            <Card.Content>
                <Card.Header>Bachelor Thesis </Card.Header>
                <Card.Meta>
                <span className='date'>2020</span>
                </Card.Meta>
                <Card.Description>
                Title: Development of a domain-specific language for cronjobs with the language workbench JetBrains MPS
                </Card.Description>
            </Card.Content>
            <Card.Content extra>
                <Image rounded href="./publications/bachelor_thesis.pdf" rel="noreferrer" target="_blank" src='images/bachelor_thesis.png' alt="Processing" size="medium"/>
            </Card.Content>
        </Card>
            
        <Card fluid>
            <Card.Content>
                <Card.Header>In-Depth Scientific Works </Card.Header>
                <Card.Meta>
                <span className='date'>2020 - 2021</span>
                </Card.Meta>
                <Card.Description>
                <a href="./publications/Einsatz_funktionaler_Programmierung_in_der_Webentwicklung.pdf" rel="noreferrer" target="_blank">Einsatz funktionaler Programmierung in derWebentwicklung</a><br />
            <a href="./publications/Einsatz_von_Gesten_in_der_mobilen_Softwareentwicklung.pdf" rel="noreferrer" target="_blank">Einsatz von Gesten in der mobilen Softwareentwicklung</a><br />
            <a href="./publications/Vergleich_einer_reaktiven_und_imperativen_Implementierung_eines_Demoprojektes_zum_Filtern_von_Live_Daten.pdf" rel="noreferrer" target="_blank">Reaktive und imperative Implementierung zum Filtern von Live-Daten</a><br />
            <a href="./publications/Obfuskation_von_Quellcode_in_mobilen_und_webbasierten_Anwendungen.pdf" rel="noreferrer" target="_blank">Obfuskation von Quellcode in mobilen und webbasierten_Anwendungen</a><br />
                </Card.Description>
            </Card.Content>
            <Card.Content extra>
                <Image src="./images/idea.svg" alt="idea" size="medium" />
            </Card.Content>
        </Card>
    </>
    )
    }
}