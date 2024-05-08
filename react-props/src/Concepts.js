import {CORE_CONCEPTS, EXAMPLES} from "./data.js";
import CoreConcept from "./CoreConcept.js";
import {useState} from "react";

export default function Concepts() {

    const [selectedTopic, setSelectedTopic] = useState('');

    // let tabContent = 'Please chick the button';
    function handleSelect(selectedButton) {
        // console.log(selectedButton);
        // tabContent = selectedButton;
        setSelectedTopic(selectedButton);
        console.log(selectedTopic);
    }

    console.log('App Component Executing');

    let tabContent = <p>Please select a topic.</p>;

    if (selectedTopic) {
        tabContent =( <div id="tab-content">
                <h3>{EXAMPLES [selectedTopic].title}</h3>
                <p>{EXAMPLES [selectedTopic].description}</p>
                <pre>
                        <code>{EXAMPLES [selectedTopic].code}</code>
                    </pre>

            </div>
        );
    }
    return (
        <section id="core-concepts">
            <h2>Core Concepts</h2>
            <ul>
                {CORE_CONCEPTS.map((conceptItem) => (<CoreConcept key={conceptItem.title}
                                                                  {...conceptItem}/>))}

                {/*<CoreConcept title={CORE_CONCEPTS[0].title}*/}
                {/*             description={CORE_CONCEPTS[0].description}*/}
                {/*             image={CORE_CONCEPTS[0].image}*/}
                {/*/>*/}
                {/*/!*<CoreConcept title={...CORE_CONCEPTS[1]}/>*!/*/}

                {/*<CoreConcept title={CORE_CONCEPTS[1].title}*/}
                {/*             description={CORE_CONCEPTS[1].description}*/}
                {/*             image={CORE_CONCEPTS[1].image}/>*/}

                {/*<CoreConcept title={CORE_CONCEPTS[2].title}*/}
                {/*             description={CORE_CONCEPTS[2].description}*/}
                {/*             image={CORE_CONCEPTS[2].image}/>*/}

                {/*<CoreConcept title={CORE_CONCEPTS[3].title}*/}
                {/*             description={CORE_CONCEPTS[3].description}*/}
                {/*             image={CORE_CONCEPTS[3].image}/>*/}

            </ul>

        </section>
    );
}

