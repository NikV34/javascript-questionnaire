import React from 'react';
import ReactDOM from 'react-dom';
import { Provider } from 'react-redux';

import App from './components/app';
import ErrorBoundary from './components/error-boundary';
import { QuestionnaireServiceProvider } from './components/questionnaire-service-context';
import QuestionnaireService from './services/questionnaire-service';

import store from './store';

import './index.css';

const questionnaireService = new QuestionnaireService();

ReactDOM.render(
  <Provider store={store}>
    <ErrorBoundary>
      <QuestionnaireServiceProvider value={questionnaireService}>
          <App />
      </QuestionnaireServiceProvider>
    </ErrorBoundary>
  </Provider>,
  document.getElementById('root'));