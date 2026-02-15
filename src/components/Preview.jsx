import './preview.css';

export function Preview({ personalInfo, education, experience, interests }) {
  return (
    <section id="preview">
      <article>
        <strong>Personal Info</strong>
      </article>

      <article>
        <strong>Education</strong>
      </article>

      <article>
        <strong>Experience</strong>
      </article>
    </section>
  );
}
