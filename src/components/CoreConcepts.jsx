import { CORE_CONCEPT } from "../data"
import CoreConcept from "./CoreConcept/CoreConcept"

export default function CoreConcepts() {
    return (
        <section id='core-concepts'>
            <h2>Core Concepts</h2>
            <ul>
                {CORE_CONCEPT.map(concept => <CoreConcept key={concept.title} {...concept}/>)}
            </ul>
        </section>
    )
}