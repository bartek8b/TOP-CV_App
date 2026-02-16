export function Experience({
  experience,
  addExperience,
  updateExperience,
  removeExperience,
}) {
  if (experience.length === 0) {
    return (
      <fieldset>
        <legend>Experience</legend>

        <button type="button" onClick={addExperience}>
          + Add item
        </button>
      </fieldset>
    );
  }

  return (
    <fieldset>
      <legend>Experience</legend>

      <button type="button" onClick={addExperience}>
        + Add item
      </button>

      {experience.map((exp, index) => (
        <div key={exp.id} className="form-item">
          <strong>Item #{index + 1}</strong>

          <label>
            Years
            <input
              type="text"
              value={exp.years}
              onChange={(e) =>
                updateExperience(exp.id, { years: e.target.value })
              }
            />
          </label>

          <label>
            Company
            <input
              type="text"
              value={exp.company}
              onChange={(e) =>
                updateExperience(exp.id, { company: e.target.value })
              }
            />
          </label>

          <label>
            Position
            <input
              type="text"
              value={exp.position}
              onChange={(e) =>
                updateExperience(exp.id, { position: e.target.value })
              }
            />
          </label>

          <button
            className="delete-btn"
            type="button"
            onClick={() => removeExperience(exp.id)}
          >
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="24"
              height="24"
              viewBox="0 0 24 24"
              fill="none"
              stroke="currentColor"
              strokeWidth="2"
              strokeLinecap="round"
              strokeLinejoin="round"
              className="feather feather-trash-2"
            >
              <polyline points="3 6 5 6 21 6"></polyline>
              <path d="M19 6v14a2 2 0 0 1-2 2H7a2 2 0 0 1-2-2V6m3 0V4a2 2 0 0 1 2-2h4a2 2 0 0 1 2 2v2"></path>
              <line x1="10" y1="11" x2="10" y2="17"></line>
              <line x1="14" y1="11" x2="14" y2="17"></line>
            </svg>{' '}
            Item #{index + 1}
          </button>
        </div>
      ))}
    </fieldset>
  );
}
