import { Form } from './components/Form';
import { Preview } from './components/Preview';

import { useState } from 'react';

function createEducationItem() {
  return { id: crypto.randomUUID(), years: '', school: '', focus: '' };
}

function createExperienceItem() {
  return { id: crypto.randomUUID(), years: '', company: '', position: '' };
}

function createInterestItem() {
  return { id: crypto.randomUUID(), interest: '' };
}

function App() {
  const [personalInfo, setPersonalInfo] = useState(() => ({
    name: '',
    yob: '',
    homeplace: '',
    email: '',
    phone: '',
  }));

  const [education, setEducation] = useState([]);

  const [experience, setExperience] = useState([]);

  const [interests, setInterests] = useState([]);

  // ----- Education handlers -----
  const addEducation = () => {
    setEducation((prev) => [...prev, createEducationItem()]);
  };

  const updateEducation = (id, patch) => {
    setEducation((prev) =>
      prev.map((item) => (item.id === id ? { ...item, ...patch } : item)),
    );
  };

  const removeEducation = (id) => {
    setEducation((prev) => prev.filter((item) => item.id !== id));
  };

  // ----- Experience handlers -----
  const addExperience = () => {
    setExperience((prev) => [...prev, createExperienceItem()]);
  };

  const updateExperience = (id, patch) => {
    setExperience((prev) =>
      prev.map((item) => (item.id === id ? { ...item, ...patch } : item)),
    );
  };

  const removeExperience = (id) => {
    setExperience((prev) => prev.filter((item) => item.id !== id));
  };

  // ----- Interests handlers -----
  const addInterest = () => {
    setInterests((prev) => [...prev, createInterestItem()]);
  };

  const updateInterest = (id, patch) => {
    setInterests((prev) =>
      prev.map((item) => (item.id === id ? { ...item, ...patch } : item)),
    );
  };

  const removeInterest = (id) => {
    setInterests((prev) => prev.filter((item) => item.id !== id));
  };

  return (
    <>
      <header>CV Builder</header>
      <a href="#preview" style={{ textAlign: 'center' }}>
        &#8681; Scroll to Preview &#8681;
      </a>
      <main>
        <Form
          personalInfo={personalInfo}
          setPersonalInfo={setPersonalInfo}
          education={education}
          addEducation={addEducation}
          updateEducation={updateEducation}
          removeEducation={removeEducation}
          experience={experience}
          addExperience={addExperience}
          updateExperience={updateExperience}
          removeExperience={removeExperience}
          interests={interests}
          addInterest={addInterest}
          updateInterest={updateInterest}
          removeInterest={removeInterest}
        />
        <Preview
          personalInfo={personalInfo}
          education={education}
          experience={experience}
          interests={interests}
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
