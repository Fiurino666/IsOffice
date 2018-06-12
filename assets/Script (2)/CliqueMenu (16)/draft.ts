declare var state:String;

class CliqueMenuBehavior extends Sup.Behavior {
  
  awake() {
    state = "suspended";
  }

  update() {
    if(Sup.Input.wasMouseButtonJustPressed(0)){
      this.chargeMenu(state);
    }
  }
  
  chargeMenu(state) {
    if (state === "suspended") {
      
    } else {
      
    }
  }
  
}
Sup.registerBehavior(CliqueMenuBehavior);
