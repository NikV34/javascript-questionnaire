export const findQuestionById = (questions, questionId) => {
  const openedQuestionId =
    !questionId && questions.length !== 0 ? questions[0].id : questionId;
  const openedQuestion = questions.find((question) => question.id === openedQuestionId)
  return {
    question: openedQuestion,
    questionIndex: questions.indexOf(openedQuestion)
  }
};