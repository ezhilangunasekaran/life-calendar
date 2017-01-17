export class Init{

  load(){
    if(localStorage.getItem('life-calendar')=== null || localStorage.getItem('life-calendar') == undefined ){
      console.log("No weeks found... Creating...");
      var initialWeekEvent = {
        "1":["you have born"]
      };
      localStorage.setItem('life-calendar',JSON.stringify(initialWeekEvent));
      return
    }else{
      console.log("Week Events exist...")
    }
  }
}
