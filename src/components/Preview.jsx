import './Preview.css';

export function Preview({ personalInfo, education, experience, interests }) {
  const hasAnyEducation = education?.some(
    (ed) => ed.years.trim() || ed.school.trim() || ed.focus.trim(),
  );

  const hasAnyExperience = experience?.some(
    (exp) => exp.years.trim() || exp.company.trim() || exp.position.trim(),
  );

  const hasAnyInterests = interests?.some((i) => i.interest.trim());

  const hasAnyPersonalInfo = Object.values(personalInfo ?? {}).some((v) =>
    String(v).trim(),
  );

  return (
    <section id="preview">
      <h1>Curricullum Vitae</h1>
      {hasAnyPersonalInfo && (
        <article>
          <strong>Personal Info</strong>
          <ul>
            {personalInfo.name.trim() && <li>Name: {personalInfo.name}</li>}
            {personalInfo.yob.trim() && (
              <li>Year of birth: {personalInfo.yob}</li>
            )}
            {personalInfo.homeplace.trim() && (
              <li>Homeplace: {personalInfo.homeplace}</li>
            )}
            {personalInfo.email.trim() && <li>Email: {personalInfo.email}</li>}
            {personalInfo.phone.trim() && <li>Phone: {personalInfo.phone}</li>}
          </ul>
        </article>
      )}

      {hasAnyEducation && (
        <article>
          <strong>Education</strong>
          <ul>
            {education
              .filter(
                (ed) => ed.years.trim() || ed.school.trim() || ed.focus.trim(),
              )
              .map((ed) => (
                <li key={ed.id}>
                  {ed.years} — {ed.school} ({ed.focus})
                </li>
              ))}
          </ul>
        </article>
      )}

      {hasAnyExperience && (
        <article>
          <strong>Experience</strong>
          <ul>
            {experience
              .filter(
                (exp) =>
                  exp.years.trim() || exp.company.trim() || exp.position.trim(),
              )
              .map((exp) => (
                <li key={exp.id}>
                  {exp.years} — {exp.company} ({exp.position})
                </li>
              ))}
          </ul>
        </article>
      )}

      {hasAnyInterests && (
        <article>
          <strong>Interests</strong>
          <ul>
            {interests
              .filter((i) => i.interest.trim())
              .map((i) => (
                <li key={i.id}>{i.interest}</li>
              ))}
          </ul>
        </article>
      )}
      <button type="button" className="pdf-btn" onClick={() => window.print()}>
        <svg
          xmlns="http://www.w3.org/2000/svg"
          width="20"
          height="20"
          viewBox="0 0 24 24"
          fill="none"
          stroke="currentColor"
          stroke-width="2"
          stroke-linecap="round"
          stroke-linejoin="round"
          class="feather feather-printer"
        >
          <polyline points="6 9 6 2 18 2 18 9"></polyline>
          <path d="M6 18H4a2 2 0 0 1-2-2v-5a2 2 0 0 1 2-2h16a2 2 0 0 1 2 2v5a2 2 0 0 1-2 2h-2"></path>
          <rect x="6" y="14" width="12" height="8"></rect>
        </svg>{' '} 
        Generate PDF
      </button>
    </section>
  );
}
