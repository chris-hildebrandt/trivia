
export class Question{
  constructor(data){
    // adapter pattern
    // this.something"aliased the way I want it" = data.something"the way the data exists";
    this.question = data.question
    this.difficulty = data.difficulty
    this.correct = data.correct_answer
    this.incorrect = data.incorrect_answers
  }

  get Template(){
    return `
    <div>
    <h2>${this.question}</h2>
    </div>
    `
  }
}