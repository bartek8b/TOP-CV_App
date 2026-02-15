import { Form } from './components/Form';
import { Preview } from './components/Preview';

import { useState } from 'react';

function App() {
  const [personalInfo, setPersonalInfo] = useState(() => ({
    name: '',
    yob: '',
    homeplace: '',
    email: '',
    phone: '',
  }));

  const [education, setEducation] = useState(() => [
    { id: crypto.randomUUID(), years: '', school: '', focus: '' },
  ]);

  const [experience, setExperience] = useState(() => [
    { id: crypto.randomUUID(), years: '', company: '', position: '' },
  ]);

  return (
    <>
      <header>CV Builder</header>
      <a href="#preview" style={{ textAlign: 'center' }}>
        Scroll to Preview &#8681;
      </a>
      <main>
        <Form
          personalInfo={personalInfo}
          setPersonalInfo={setPersonalInfo}
          education={education}
          setEducation={setEducation}
          experience={experience}
          setExperience={setExperience}
        />
        <Preview
          personalInfo={personalInfo}
          education={education}
          experience={experience}
        />
      </main>
      <footer>
        <a
          href="https://github.com/bartek8b"
          target="_blank"
          rel="noopener noreferrer"
        >
          Created by &#128279; Bartlomiej Balcerzak
        </a>
      </footer>
    </>
  );
}

export default App;
