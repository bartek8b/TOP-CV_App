import { Form } from './components/Form';
import { Preview } from './components/Preview';

function App() {
  return (
    <>
      <header>CV Builder</header>
      <a href="#preview" style={{ textAlign: 'center' }}>
        Scroll to Preview &#8681;
      </a>
      <main>
        <Form />
        <Preview />
      </main>
      <footer>
        <a
          href="https://github.com/bartek8b"
          target="_blank"
          rel="noopener noreferrer"
        >
          Created by &#128279; Bartlomiej Balcerzak
        </a>
      </footer>
    </>
  );
}

export default App;
