import { Pop } from "../Utils/Pop.js";




export class QuestionsController{
  constructor(){
    console.log("qctor up");
  }

  // when doing something asynchronous, the cardinal rule is every time you type "async" type "try" and press down to select trycatch. without this we would not get any kind of error msg so we won't know whats wrong or why
  async goGetSomethingFromSwapi(){
    try { await swapiService.getSomething()
      console.log("test the ");
    } catch (error) {
      console.error('[getting something]', error)
      Pop.error(error)
    }
  }
}