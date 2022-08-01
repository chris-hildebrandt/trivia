class SwapiService{
  async getSomething(){
    // remember to await! in the controller too! unexpected reserved word error means you missed an await or an async
    let response = await axios.get('url')
    console.log('always log a description when logging an object/variable: response', response);
  }
}