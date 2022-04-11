import { generateId } from "../Utils/generateId.js"

export class Question {
  constructor(data) {
    this.id = data.id || generateId()
    this.category = data.category
    this.diffculty = data.difficulty
    this.question = data.question
    this.correctAnswer = data.correct_answer
    this.incorrectAnswer = data.incorrect_answers
  }

  get QuestionTemplate() {
    return /*html*/`
      <div class="card m-2 shadow">
        <div class="card-body">
          <h4 class="text-uppercase no-select">
            ${this.question}
          </h4>
          <h2 class="selectable">True | False</h2>
          <h2>${this.category} | ${this.diffculty}</h2>
        </div>
        <h4 id="reveal" class="text-info d-flex justify-content-center"></h4>
        <button class="btn btn-danger square-top selectable" onclick="app.questionsController.reveal('${this.correctAnswer}')">Reveal</button>
      </div>
    `
  }
}
