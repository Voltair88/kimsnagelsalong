import { Container, SubmittButton } from './styles';
function App() {
  return (
    <div className='App'>
      <Container>
        <h1>Hello World</h1>
        <SubmittButton $primary={true}>Primary</SubmittButton>
      </Container>
    </div>
  );
}

export default App;
