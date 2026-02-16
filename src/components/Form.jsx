import './Form.css';

import { PersonalInfo } from './subforms/PersonalInfo';

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
    </form>
  );
}
