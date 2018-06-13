class CliqueMenuBehavior extends Sup.Behavior {
  
  menuIndex: number;
  menus : Sup.Actor[];
  ray = new Sup.Math.Ray();
  isHover: boolean = false;
  
  awake() {
  }

  start() {
    //On recupere tous les elements contenus dans Menu
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
    //return correspond a entrer ;-)
    if(Sup.Input.wasKeyJustPressed("RETURN", { autoRepeat:true })) {
      this.menuAction();
    }
    
    if(Sup.Input.wasKeyJustPressed("SPACE", { autoRepeat:true })) {
      this.menuAction();
    }
  }
  
  mouseNavigation(){
    
    this.ray.setFromCamera(this.actor.camera, Sup.Input.getMousePosition());
    let hits = this.ray.intersectActors(this.menus);
    
    //isHover permet de savoir si on a le curseur dessus
    if(hits.length > 0){
      if(this.isHover != true){
        this.isHover = true;
      }
      this.menuIndex = this.menus.indexOf(hits[0].actor);
      this.updateMenu();
    }
    //ne pas oublier de desactiver le hover lorsque l on sort
    else{
      if(this.isHover){
        this.isHover = false;
      }
    }
    
    //un clique gauche appel la fonction
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
    //Elle est implementer dans ExtendedMenu pour plus de clarte
  }
  
}

