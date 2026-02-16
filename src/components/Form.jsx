import './Form.css';

import { PersonalInfo } from './subforms/PersonalInfo';
import { Education } from './subforms/Education';
import { Experience } from './subforms/Experience';
import { Interests } from './subforms/Interests';

export function Form({
  personalInfo,
  setPersonalInfo,

  education,
  addEducation,
  updateEducation,
  removeEducation,

  experience,
  addExperience,
  updateExperience,
  removeExperience,

  interests,
  addInterest,
  updateInterest,
  removeInterest,
}) {
  const handleSubmit = (e) => {
    e.preventDefault();
  };

  return (
    <form onSubmit={handleSubmit}>
      <PersonalInfo
        personalInfo={personalInfo}
        setPersonalInfo={setPersonalInfo}
      />

      <Education
        education={education}
        addEducation={addEducation}
        updateEducation={updateEducation}
        removeEducation={removeEducation}
      />

      <Experience
        experience={experience}
        addExperience={addExperience}
        updateExperience={updateExperience}
        removeExperience={removeExperience}
      />

      <Interests
        interests={interests}
        addInterest={addInterest}
        updateInterest={updateInterest}
        removeInterest={removeInterest}
      />
    </form>
  );
}
