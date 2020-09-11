import React from 'react';
import ReactDOM from 'react-dom';

import App from './components/app';
import ErrorBoundary from './components/error-boundary';
import { QuestionnaireServiceProvider } from './components/questionnaire-service-context';
import QuestionnaireService from './services/questionnaire-service';

import './index.css';

const questionnaireService = new QuestionnaireService();

ReactDOM.render(
  <ErrorBoundary>
    <QuestionnaireServiceProvider value={questionnaireService}>
        <App />
    </QuestionnaireServiceProvider>
  </ErrorBoundary>,
  document.getElementById('root'));