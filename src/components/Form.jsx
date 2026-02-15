export function Form() {
  const handleSubmit = (e) => {
    e.preventDefault();
  };

  return <form onSubmit={handleSubmit}></form>;
}
