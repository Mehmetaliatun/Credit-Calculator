//? Secilen kredi turune gore kredi turunu yazdir
//? Vade vadenin oldugu alana
//? Kredi tutari kredi miktarina yazdir

document.querySelector(`#hesapla`).addEventListener("click", () => {
  const kredi = document.querySelector("#kredi").value;
  const vade = Number(document.querySelector("#vade").value);
  const tutar = Number(document.querySelector("#tutar").value);
  let faiz;

  if (kredi === "Ev Kredisi") {
    faiz = 1.99;
  } else if (kredi === "Arac Kredisi") {
    faiz = 2.19;
  } else if (kredi === "Ihtiyac Kredisi") {
    faiz = 3.29;
  }
  console.log(faiz);
  console.log(tutar);
  console.log(vade);

  const toplamTutar = Math.round(
    tutar * ((faiz * (1 + faiz) ** vade) / ((1 + faiz) ** vade - 1))
  );
  const taksitTutar = toplamTutar / vade;

  console.log(toplamTutar);
});

//? hesapla click aldiginda fonk. calisir.
