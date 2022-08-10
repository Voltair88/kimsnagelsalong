import styled from 'styled-components';
import { motion } from 'framer-motion';

export const Container = styled(motion.div)`
  font-family: 'Roboto', sans-serif;
  background-color: #fff;
  min-height: 100vh;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: flex-start;
  font-size: calc(10px + 2vmin);
  color: #1a1a1a;
`;

export const SubmittButton = styled(motion.button)`
  background: ${(p: { $primary: any }) => (p.$primary ? 'indigo' : 'red')};
  color: white;
  border: none;
  padding: 0.5rem 1rem;
  border-radius: 5px;
  font-size: calc(8px + 2vmin);
  font-weight: bold;
  cursor: pointer;
  transition: all 0.2s ease-in-out;
  &:hover {
    background: ${(p: { $primary: any }) => (p.$primary ? 'indigo' : 'red')};
    color: white;
  }
`;
