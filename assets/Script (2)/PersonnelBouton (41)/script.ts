class PersonnelBoutonBehavior extends Sup.Behavior {
  
  menuIndex: number;
  buttons : Sup.Actor[];
  ray = new Sup.Math.Ray();
  
  awake() {
    jeuTour = 1;
    Sup.log(`jeuTour: ${jeuTour}`);
    
  }

  start() {
    this.cliqueBouton();

  }
  
  update() {
  }

  cliqueBouton(){
    
    //on relie les boutons
    const EmbaucherOuvrier : Sup.Actor = Sup.getActor("Boutons").getChild("Embaucher").getChild("EmbaucherOuvrier");
    const EmbaucherComptable : Sup.Actor = Sup.getActor("Boutons").getChild("Embaucher").getChild("EmbaucherComptable");
    const EmbaucherCommercial : Sup.Actor = Sup.getActor("Boutons").getChild("Embaucher").getChild("EmbaucherCommercial");
    const LicencierOuvrier : Sup.Actor = Sup.getActor("Boutons").getChild("Licencier").getChild("LicencierOuvrier");
    const LicencierComptable : Sup.Actor = Sup.getActor("Boutons").getChild("Licencier").getChild("LicencierComptable");
    const LicencierCommercial : Sup.Actor = Sup.getActor("Boutons").getChild("Licencier").getChild("LicencierCommercial");
    //on leur donne des instructions
    EmbaucherOuvrier.fMouseInput.emitter.on("leftClickReleased", () => { 
      nbOuvrier += 1;
      Sup.log(`Nombre d ouvrier ${nbOuvrier}`); });

    EmbaucherComptable.fMouseInput.emitter.on("leftClickReleased", () => { 
      nbComptable += 1;
      Sup.log(`Nombre d comptable ${nbComptable}`); });
    
    EmbaucherCommercial.fMouseInput.emitter.on("leftClickReleased", () => { 
      nbCommercial += 1;
      Sup.log(`Nombre d commercial ${nbCommercial}`); });
    
    LicencierOuvrier.fMouseInput.emitter.on("leftClickReleased", () => { 
      if(nbOuvrier > 0){
        nbOuvrier -= 1;
      }
      Sup.log(`Nombre d ouvrier ${nbOuvrier}`); });
    
    LicencierComptable.fMouseInput.emitter.on("leftClickReleased", () => { 
      if(nbComptable > 0){
        nbComptable -= 1;
      }
      Sup.log(`Nombre d comptable ${nbComptable}`); });
    
    LicencierCommercial.fMouseInput.emitter.on("leftClickReleased", () => { 
      if(nbCommercial > 0){
        nbCommercial -= 1;
      }
      Sup.log(`Nombre d commercial ${nbCommercial}`); });
    
  }
  
}
Sup.registerBehavior(PersonnelBoutonBehavior);
