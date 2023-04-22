class Geldautomat {
    private kontostand: number;
    
    constructor(kontostand: number) {
      this.kontostand = kontostand;
    }
    
    public geldAbheben(betrag: number): string {
      if (betrag <= 0) {
        return "Ungültiger Betrag.";
      }
      
      if (betrag > this.kontostand) {
        return "Nicht genug Guthaben.";
      }
      
      this.kontostand -= betrag;
      return `Erfolgreich abgehoben: ${betrag}. Neuer Kontostand: ${this.kontostand}.`;
    }
    
    public geldEinzahlen(betrag: number): string {
      if (betrag <= 0) {
        return "Ungültiger Betrag.";
      }
      
      this.kontostand += betrag;
      return `Erfolgreich eingezahlt: ${betrag}. Neuer Kontostand: ${this.kontostand}.`;
    }
  }

const geldautomat = new Geldautomat(1000);
console.log(geldautomat.geldAbheben(500));
console.log(geldautomat.geldEinzahlen(200));  
