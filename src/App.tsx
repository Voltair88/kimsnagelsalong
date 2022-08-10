import { Container, SubmittButton } from './Styled';
import { motion } from 'framer-motion';
function App() {
  return (
    <div className='App'>
      <Container>
        <h1>Hello World</h1>
        <SubmittButton as={motion.button} animate={{ y: 100 }} $primary={true}>
          Primary
        </SubmittButton>
      </Container>
    </div>
  );
}

export default App;
