export function PersonalInfo({ personalInfo, setPersonalInfo }) {
  const handlePersonalChange = (e) => {
    const { name, value } = e.target;
    setPersonalInfo((prev) => ({ ...prev, [name]: value }));
  };

  return (
    <fieldset>
      <legend>Personal Info</legend>

      <label>
        Name
        <input
          name="name"
          type="text"
          value={personalInfo.name}
          onChange={handlePersonalChange}
        />
      </label>

      <label>
        Year of birth
        <input
          name="yob"
          type="text"
          value={personalInfo.yob}
          onChange={handlePersonalChange}
        />
      </label>

      <label>
        Homeplace
        <input
          name="homeplace"
          type="text"
          value={personalInfo.homeplace}
          onChange={handlePersonalChange}
        />
      </label>

      <label>
        Email
        <input
          name="email"
          type="email"
          value={personalInfo.email}
          onChange={handlePersonalChange}
        />
      </label>

      <label>
        Phone
        <input
          name="phone"
          type="tel"
          value={personalInfo.phone}
          onChange={handlePersonalChange}
        />
      </label>
    </fieldset>
  );
}
