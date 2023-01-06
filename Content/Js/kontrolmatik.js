var Filter = {
  Elements: {
    cozumler: document.getElementById("cozumler"),
    endustriler: document.getElementById("endustriler"),
    kurumsal: document.getElementById("kurumsal"),
    surdurulebilirlik: document.getElementById("surdurulebilirlik"),
    yatirimciI: document.getElementById("yatirimciI"),
    iletisim: document.getElementById("iletisim"),
  },
  Actions: {
    //Sayfa ilk açıldığında istenilen fonksiyonları çalıştrıacak
    init: () => {},
    onMouseOverCoumler: () => {
      var cozumler=Filter.Elements.cozumler;
      cozumler.style.display="block"
    },
    onMouseOutCoumler: () => {
      var cozumler=Filter.Elements.cozumler;
      cozumler.style.display="none"
    },


    onMouseOverEndustriler: () => {
      var endustriler=Filter.Elements.endustriler;
      endustriler.style.display="block"
    },
    onMouseOutEndustriler: () => {
      var endustriler=Filter.Elements.endustriler;
      endustriler.style.display="none"
    },


    onMouseOverKurumsal: () => {
      var kurumsal=Filter.Elements.kurumsal;
      kurumsal.style.display="block"
    },
    onMouseOutKurumsal: () => {
      var kurumsal=Filter.Elements.kurumsal;
      kurumsal.style.display="none"
    },


    onMouseOverSurdurulebilirlik: () => {
      var surdurulebilirlik=Filter.Elements.surdurulebilirlik;
      surdurulebilirlik.style.display="block"
    },
    onMouseOutSurdurulebilirlik: () => {
      var surdurulebilirlik=Filter.Elements.surdurulebilirlik;
      surdurulebilirlik.style.display="none"
    },


    onMouseOverYatirimciI: () => {
      var yatirimciI=Filter.Elements.yatirimciI;
      yatirimciI.style.display="block"
    },
    onMouseOutYatirimciI: () => {
      var yatirimciI=Filter.Elements.yatirimciI;
      yatirimciI.style.display="none"
    },
  },
};

Filter.Actions.init();
