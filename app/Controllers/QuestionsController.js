import { ProxyState } from "../AppState.js";
import { questionsService } from "../Services/QuestionsService.js";
import { Pop } from "../Utils/Pop.js";


//Private
function _drawQuestions() {
  let QuestionTemplate = ''
  ProxyState.questions.forEach(q => QuestionTemplate += q.QuestionTemplate)
  document.getElementById("questions").innerHTML = QuestionTemplate
}

//Public
export class QuestionsController {
  constructor() {
    this.getQuestions()
    ProxyState.on("questions", _drawQuestions);
  }

  reveal(answer) {
    Pop.toast(answer)
    // document.getElementById('reveal').innerText = answer
  }
  async getQuestions() {
    try {
      await questionsService.getQuestions()
    }
    catch (error) {
      console.log(error)
    }
  }
}
