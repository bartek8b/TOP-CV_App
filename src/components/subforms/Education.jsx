export function Education({
  education,
  addEducation,
  updateEducation,
  removeEducation,
}) {
  // pusto -> tylko przycisk
  if (education.length === 0) {
    return (
      <fieldset>
        <legend>Education</legend>

        <button type="button" onClick={addEducation}>
          + Add item
        </button>
      </fieldset>
    );
  }

  return (
    <fieldset>
      <legend>Education</legend>

      <button type="button" onClick={addEducation}>
        + Add item
      </button>

      {education.map((ed, index) => (
        <div key={ed.id} className="form-item">
          <strong>Item #{index + 1}</strong>

          <label>
            Years
            <input
              type="text"
              value={ed.years}
              onChange={(e) =>
                updateEducation(ed.id, { years: e.target.value })
              }
            />
          </label>

          <label>
            School
            <input
              type="text"
              value={ed.school}
              onChange={(e) =>
                updateEducation(ed.id, { school: e.target.value })
              }
            />
          </label>

          <label>
            Focus
            <input
              type="text"
              value={ed.focus}
              onChange={(e) =>
                updateEducation(ed.id, { focus: e.target.value })
              }
            />
          </label>

          <button
            className="delete-btn"
            type="button"
            onClick={() => removeEducation(ed.id)}
            aria-label={`Delete education item ${index + 1}`}
          >
            <svg
              aria-hidden="true"
              focusable="false"
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
              <polyline points="3 6 5 6 21 6" />
              <path d="M19 6v14a2 2 0 0 1-2 2H7a2 2 0 0 1-2-2V6m3 0V4a2 2 0 0 1 2-2h4a2 2 0 0 1 2 2v2" />
              <line x1="10" y1="11" x2="10" y2="17" />
              <line x1="14" y1="11" x2="14" y2="17" />
            </svg>
            <span aria-hidden="true">Item #{index + 1}</span>
          </button>
        </div>
      ))}
    </fieldset>
  );
}
