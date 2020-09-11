import React from 'react';
import { QuestionnaireServiceConsumer } from '../questionnaire-service-context';

const withQuestionnaireService = () => (Wrapped) => {

  return (props) => {
    return (
      <QuestionnaireServiceConsumer>
        {
          (questionnaireService) => {
            return (
              <Wrapped {...props} questionnaireService={questionnaireService} />
            )
          }
        }
      </QuestionnaireServiceConsumer>
    )
  }
};

export default withQuestionnaireService;