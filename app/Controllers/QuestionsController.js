import { ProxyState } from "../AppState.js";
import { swapiService } from "../Services/SwapiService.js"
import { Pop } from "../Utils/Pop.js";

function _draw(){
  let template = ''
  ProxyState.questions.forEach(q => template += q.Template)
  document.getElementById("quiz-area").innerHTML = `
    <div>
      ${template}
    </div>
    `
}

export class QuestionsController{
  constructor(){
    console.log("qctor up");
    ProxyState.on("questions", _draw)
  }

  // when doing something asynchronous, the cardinal rule is every time you type "async" type "try" and press down to select trycatch. without this we would not get any kind of error msg so we won't know whats wrong or why
  async goGetSomethingFromSwapi(){
    try { 
      await swapiService.getSomething()
    } catch (error) {
      console.error('[getting something]', error)
      Pop.error(error)
    }
  }

  async next(){
    try {
      await swapiService.getSomething()
    } catch (error) {
      
    }
  }
}