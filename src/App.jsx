import { useState } from 'react';

import { CORE_CONCEPTS, EXAMPLES } from './data';
import Header from './components/Header/Header';
import CoreConcepts from './components/CoreConcepts/CoreConcepts';
import TabButton from './components/TabButton/TabButton';

function App() {
  const [ selectedTopic, setSelectedTopic ] = useState();

  let tabContent = <p>Please select a topic.</p> ;

  if (selectedTopic) {
    tabContent = (
      <div id="tab-content">
        <h3>{EXAMPLES[selectedTopic].title}</h3>
        <p>{EXAMPLES[selectedTopic].description}</p>
        <pre>
          <code>
            {EXAMPLES[selectedTopic].code}
          </code>
        </pre>
      </div>
    )
  }

  function handleClick(selectedButton) {
    setSelectedTopic(selectedButton);
  }

  return (
    <div>
      <Header />
      <main>
        <section id='core-concepts'>
          <h2>Core Concepts</h2>
          <ul>
            {CORE_CONCEPTS.map(concept => <CoreConcepts key={concept.title} {...concept}/>)}
          </ul>
        </section>
        <section id="examples">
          <h2>Examples</h2>
          <menu>
            {Object.keys(EXAMPLES).map(key => 
              <TabButton
                key={key}
                isSelected={selectedTopic === key} 
                onClick={() => handleClick(key)}>
                {EXAMPLES[key].title}
              </TabButton>
            )}
          </menu>
          {tabContent}
        </section>
      </main>
    </div>
  );
}

export default App;
