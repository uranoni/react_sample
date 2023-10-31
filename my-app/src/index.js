import React from 'react';
import { createRoot } from 'react-dom/client';
import Todo from './Todo';

const domNode = document.getElementById('root');
const root = createRoot(domNode);
root.render(<Todo />);