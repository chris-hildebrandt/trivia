import { ProxyState } from "../AppState.js";
import { Question } from "../Models/Question.js";

class SwapiService {
  async getSomething(){
    // remember to await! in the controller too! unexpected reserved word error means you missed an await or an async
    // just hover over a coe to see if it returns a promise, that is the function that needs an await, but await doesn't actually break code if used in front of the wrong lines.
    let res = await axios.get("https://opentdb.com/api.php?amount=50&category=10", res)
    console.log('always log a description when logging an object/variable: response', res);
    // customs registration will be res.data(*) give the data a class
    ProxyState.questions = res.data.results.map(q => new Question(q))
  }
}

export const swapiService = new SwapiService()