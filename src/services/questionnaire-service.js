export default class QuestionnaireService {

  // getQuestions() {
  //   return [
  //     {
  //       "answer":"D",
  //       "explanation":"Within the function, we first declare the `name` variable with the `var` keyword. This means that the variable gets hoisted (memory space is set up during the creation phase) with the default value of `undefined`, until we actually get to the line where we define the variable. We haven't defined the variable yet on the line where we try to log the `name` variable, so it still holds the value of `undefined`.\n\nVariables with the `let` keyword (and `const`) are hoisted, but unlike `var`, don't get <i>initialized</i>. They are not accessible before the line we declare (initialize) them. This is called the \"temporal dead zone\". When we try to access the variables before they are declared, JavaScript throws a `ReferenceError`.",
  //       "id":1,
  //       "option_list":[
  //         "- A: `Lydia` and `undefined`",
  //         "- B: `Lydia` and `ReferenceError`",
  //         "- C: `ReferenceError` and `21`",
  //         "- D: `undefined` and `ReferenceError`"
  //       ],
  //       "question":"What's the output?",
  //       "task":"javascript\nfunction sayHi() {\n  console.log(name);\n  console.log(age);\n  var name = 'Lydia';\n  let age = 21;\n}\n\nsayHi();\n"
  //     },
  //     {
  //       "answer":"C",
  //       "explanation":"Because of the event queue in JavaScript, the `setTimeout` callback function is called _after_ the loop has been executed. Since the variable `i` in the first loop was declared using the `var` keyword, this value was global. During the loop, we incremented the value of `i` by `1` each time, using the unary operator `++`. By the time the `setTimeout` callback function was invoked, `i` was equal to `3` in the first example.\n\nIn the second loop, the variable `i` was declared using the `let` keyword: variables declared with the `let` (and `const`) keyword are block-scoped (a block is anything between `{ }`). During each iteration, `i` will have a new value, and each value is scoped inside the loop.",
  //       "id":2,
  //       "option_list":[
  //         "- A: `0 1 2` and `0 1 2`",
  //         "- B: `0 1 2` and `3 3 3`",
  //         "- C: `3 3 3` and `0 1 2`"
  //       ],
  //       "question":"What's the output?",
  //       "task":"javascript\nfor (var i = 0; i < 3; i++) {\n  setTimeout(() => console.log(i), 1);\n}\n\nfor (let i = 0; i < 3; i++) {\n  setTimeout(() => console.log(i), 1);\n}\n"
  //     }
  //   ]
  // }
  _apiBaseUrl = 'https://external-staff.herokuapp.com';

  getResource = async (url) => {
    const res = await fetch(`${this._apiBaseUrl}${url}`);

    if (!res.ok) {
      throw new Error(`Could not fetch ${url}` +
        `, received ${res.status}`)
    }
    return await res.json();
  };

  getQuestions = async () => {
    const response = await this.getResource('/test');
    return response.result
  }

  getAllQuestions = async () => {
    const res = await this.getResource(`/test`);
    return res;
  };

};