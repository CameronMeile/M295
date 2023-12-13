async function simuliereVerzoegerung(zahl1, zahl2, ms) {
    return new Promise((resolve) => {
        setTimeout(() => {
            const result = zahl1 + zahl2;
            resolve(result);
        }, ms);
      });
}



async function addiereNachVerzoegerung(zahl1, zahl2, ms) {
    console.log(zahl1,"+",zahl2);
    const result = await simuliereVerzoegerung(zahl1, zahl2, ms);
    console.log(result);
    // Expected output: "resolved"
  }

// Aufruf
addiereNachVerzoegerung(3, 7, 2000);