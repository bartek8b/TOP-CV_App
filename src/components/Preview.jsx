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
    </section>
  );
}
