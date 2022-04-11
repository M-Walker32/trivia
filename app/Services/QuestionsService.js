import { ProxyState } from "../AppState.js";
import { Question } from "../Models/Question.js";

class QuestionsService {
  async getQuestions() {
    // @ts-ignore
    const repsonse = await axios.get('https://opentdb.com/api.php?amount=10&type=boolean')
    console.log(repsonse)
    ProxyState.questions = repsonse.data.results.map(q => new Question(q))
  }
  // reveal(x) {
  //   let question = ProxyState.questions.filter(q => q.id == this.id)
  //   // ProxyState.questions
  //   console.log(question, x)
  //   // document.getElementById('reveal').innerHTML = answer.toString()
  // }
}

export const questionsService = new QuestionsService()