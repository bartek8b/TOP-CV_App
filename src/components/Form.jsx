import './Form.css';

export function Form() {
  const handleSubmit = (e) => {
    e.preventDefault();
  };

  return <form onSubmit={handleSubmit}>
    Here lands the form
  </form>;
}
