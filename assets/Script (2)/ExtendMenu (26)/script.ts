class ExtendMenuBehavior extends CliqueMenuBehavior {
  
  menuAction(){
    switch(this.menuIndex){
        case 0:
        Sup.loadScene("../Scene/PersonnelScene");
        break;
        case 1:
        Sup.loadScene("AcheterScene");
        break;
        case 2:
        Sup.loadScene("ProduireScene");
        break;
        case 3:
        Sup.loadScene("VendreScene");
        break;
        case 4:
        Sup.loadScene("CompterScene");
        break;
      default:
        break;
        
    }
  }
}
Sup.registerBehavior(ExtendMenuBehavior);