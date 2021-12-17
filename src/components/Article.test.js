import React from 'react';
import '@testing-library/jest-dom';
import { render, screen } from "@testing-library/react";
import Article  from './Article'
import userEvent from '@testing-library/user-event';

import Article from './Article';

const testArticle = {
    headline: 'test headline',
    author: 'test author',
    summary: 'test summary',
    body: 'test body'
}
test('renders component without errors', ()=> {
    render(<Article article={testArticle}/>)
});

// test('renders headline, author from the article when passed in through props', ()=> {
// });

// test('renders "Associated Press" when no author is given', ()=> {
// });

// test('executes handleDelete when the delete button is pressed', ()=> {
// });

//Task List:
//1. Complete all above tests. Create test article data when needed.