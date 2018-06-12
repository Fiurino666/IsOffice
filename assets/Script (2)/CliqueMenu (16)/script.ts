class CliqueMenuBehavior extends Sup.Behavior {
  
  menus : Sup.Actor[];
  menuIndex: number = 0;
  ray = new Sup.Math.Ray();
    
  awake() {
    
  }

  start() {
    this.menus = Sup.getActor("Menu").getChildren();
    this.updateMenu();
    
  }
  
  update() {
    this.keyNavigation();
    this.mouseNavigation();
  }
  
  keyNavigation(){
    if(Sup.Input.wasKeyJustPressed("DOWN", { autoRepeat:true })) {
      this.menuIndex = Math.min(this.menuIndex + 1, this.menus.length -1);
      this.updateMenu();
    }
    if(Sup.Input.wasKeyJustPressed("UP", { autoRepeat:true })) {
      this.menuIndex = Math.min(this.menuIndex - 1, this.menus.length -1);
      this.updateMenu();
    }
    if(Sup.Input.wasKeyJustPressed("ENTER", { autoRepeat:true })) {
      this.menuAction();
    }
  }
  
  mouseNavigation(){
    this.ray.setFromCamera(this.actor.camera, Sup.Input.getMousePosition());
    let hits = this.ray.intersectActors(this.menus);
    if(hits.length > 0){
      this.menuIndex = this.menus.indexOf(hits[0].actor);
      this.updateMenu();
    }
    if(Sup.Input.wasMouseButtonJustPressed(0))
      this.menuAction();
  }
  
  updateMenu(){
    for(let i = 0; i<this.menus.length;i++){
      let button = this.menus[i];
      button.textRenderer.setOpacity(i === this.menuIndex ? 1 : 0.7);
    }
  }
  
  menuAction(){
    
  }
  
}

