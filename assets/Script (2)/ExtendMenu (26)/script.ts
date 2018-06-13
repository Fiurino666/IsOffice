class ExtendMenuBehavior extends CliqueMenuBehavior {
  
  menuAction(){
    
    switch(jeuTour){
        case 0:
        Sup.loadScene("Scene/PersonnelScene");
        break;
        case 1:
        Sup.loadScene("Scene/AcheterScene");
        break;
        case 2:
        Sup.loadScene("Scene/ProduireScene");
        break;
        case 3:
        Sup.loadScene("Scene/VendreScene");
        break;
        case 4:
        Sup.loadScene("Scene/CompterScene");
        break;
      default:
        break;
        
    }
  }
}
Sup.registerBehavior(ExtendMenuBehavior);