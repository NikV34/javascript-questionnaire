export default class QuestionnaireService {

  _apiBaseUrl = 'https://js-questionnaire-source.herokuapp.com';

  getResource = async (url) => {
    const res = await fetch(`${this._apiBaseUrl}${url}`);

    if (!res.ok) {
      throw new Error(`Could not fetch ${url}` +
        `, received ${res.status}`)
    }
    return await res.json();
  };

  getQuestions = async () => {
    const response = await this.getResource('/');
    return response.result
  }

  getAllQuestions = async () => {
    const res = await this.getResource('/');
    return res;
  };

};