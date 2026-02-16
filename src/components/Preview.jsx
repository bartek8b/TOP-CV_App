import './Preview.css';

export function Preview({ personalInfo, education, experience, interests }) {
  return (
    <section id="preview">
      <article>
        <strong>Personal Info</strong>
        <ul>
          <li>Name: {personalInfo.name}</li>
          <li>Year of birth: {personalInfo.yob}</li>
          <li>Homeplace: {personalInfo.homeplace}</li>
          <li>Email: {personalInfo.email}</li>
          <li>Phone: {personalInfo.phone}</li>
        </ul>
      </article>

      <article>
        <strong>Education</strong>
        <ul>
          {education.map((ed) => (
            <li key={ed.id}>
              {ed.years} — {ed.school} ({ed.focus})
            </li>
          ))}
        </ul>
      </article>

      <article>
        <strong>Experience</strong>
        <ul>
          {experience.map((exp) => (
            <li key={exp.id}>
              {exp.years} — {exp.company} ({exp.position})
            </li>
          ))}
        </ul>
      </article>

      <article>
        <strong>Interests</strong>
        <ul>
          {interests.map((i) => (
            <li key={i.id}>{i.interest}</li>
          ))}
        </ul>
      </article>
    </section>
  );
}
