import {useState} from "react";
import TabButton from "./TabButton.js";
import {EXAMPLES} from "./data.js";
import Section from "./Section.js";
import Tab from "./Tab";


export default function Example() {
    const [selectedTopic, setSelectedTopic] = useState('');

    // let tabContent = 'Please chick the button';
    function handleSelect(selectedButton) {
        // console.log(selectedButton);
        // tabContent = selectedButton;
        setSelectedTopic(selectedButton);
        console.log(selectedTopic);
    }

    let tabContent = <p>Please select a topic.</p>;

    if (selectedTopic) {
        tabContent = (<div id="tab-content">
                <h3>{EXAMPLES [selectedTopic].title}</h3>
                <p>{EXAMPLES [selectedTopic].description}</p>
                <pre>
                        <code>{EXAMPLES [selectedTopic].code}</code>
                    </pre>

            </div>
        );
    }
    return (
        <Section title="Examples" id="examples" className="">
            {/*<h2>Examples</h2>*/}
            <Tab
                // ButtonsContainer={"menu"}
                buttons={
                <>
                    <TabButton
                        isSelected={selectedTopic === 'components'}
                        onClick={() => handleSelect('components')}>
                        Components</TabButton>
                    <TabButton
                        isSelected={selectedTopic === 'jsx'}
                        onClick={() => handleSelect('jsx')}>
                        JSX</TabButton>
                    <TabButton
                        isSelected={selectedTopic === 'props'}
                        onClick={() => handleSelect('props')}>
                        Props</TabButton>
                    <TabButton
                        isSelected={selectedTopic === 'state'}
                        onClick={() => handleSelect('state')}>
                        State</TabButton>

                </>}>
                {tabContent}
            </Tab>
        </Section>
    );
}
