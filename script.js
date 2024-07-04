const btn = document.getElementById("calculator");

btn.addEventListener("click", function () {
  let tinggi = document.querySelector("#tinggi").value;
  let berat = document.querySelector("#berat").value;
  let rambut = document.querySelector("#rambut").value;
  let alis = document.querySelector("#alis").value;
  let mata = document.querySelector("#mata").value;
  let hidung = document.querySelector("#hidung").value;
  let bibir = document.querySelector("#bibir").value;
  let wajah = document.querySelector("#wajah").value;
  let kulit = document.querySelector("#kulit").value;
  let gaji = document.querySelector("#gaji").value;

  if (tinggi == "" || berat == "" || gaji == "") {
    alert("Isi dulu lahh broo, jangan ada yang kosong!");
    return;
  }
  if (rambut == "Jawab Jujur Yee!" || alis == "Jawab Jujur Yee!" || mata == "Jawab Jujur Yee!" || hidung == "Jawab Jujur Yee!" || bibir == "Jawab Jujur Yee!" || wajah == "Jawab Jujur Yee!" || kulit == "Jawab Jujur Yee!") {
    alert("Isi dulu lahh broo, jangan ada yang kosong!");
    return;
  }
  if (rambut == "LurusTebal") {
    rambut = 10;
  } else if (rambut == "KeritingTebal") {
    rambut = 8;
  } else if (rambut == "LurusTipis") {
    rambut = 6;
  } else if (rambut == "KeritingTipis") {
    rambut = 4;
  } else {
    rambut = 0;
  }

  if (alis == "Tebal") {
    alis = 10;
  } else if (alis == "Tipis") {
    alis = 5;
  } else {
    alis = 0;
  }

  if (mata == "Belo") {
    mata = 10;
  } else if (mata == "Sipit") {
    mata = 5;
  } else {
    mata = 0;
  }

  if (hidung == "Mancung") {
    hidung = 10;
  } else if (hidung == "Pesek") {
    hidung = 5;
  } else {
    hidung = 0;
  }

  if (bibir == "Tipis") {
    bibir = 10;
  } else if (bibir == "Tebal") {
    bibir = 5;
  } else {
    bibir = 0;
  }

  if (wajah == "oval") {
    wajah = 10;
  } else if (wajah == "bulat") {
    wajah = 8;
  } else if (wajah == "lonjong" || wajah == "segitiga" || wajah == "kotak") {
    wajah = 6;
  } else if (wajah == "jajarGenjang") {
    wajah = 2;
  } else {
    wajah = 0;
  }

  if (kulit == "Putih") {
    kulit = 10;
  } else if (kulit == "SawoMateng") {
    kulit = 8;
  } else if (kulit == "Hitam" || kulit == "Kuning" || kulit == "Ungu") {
    wajah = 6;
  } else if (kulit == "Merah") {
    kulit = 6;
  } else {
    kulit = 0;
  }

  tinggi = tinggi / 17.5;
  berat = berat / 6.5;
  gaji = gaji / 1000000;

  let GLC = tinggi + berat + gaji + rambut + alis + mata + hidung + bibir + wajah + kulit;

  GLC = GLC.toFixed(2);

  document.querySelector("#result").innerHTML = GLC;

  let pesan = "";

  if (GLC > 100.0) {
    pesan = "Wih score lu 100 lebih nih, Berarti lo goodloking dan goodrekening juga tapi semua itu akan percuma kalo lo gak sholat broo. Ingat dunia itu sementara.";
  } else if (GLC > 80.0) {
    pesan = "Lu udah goodloking, tapi saran gue akan lebih kren lagi kalau lu juga goodrekening. wkwk";
  } else if (GLC >= 50.0 && GLC <= 80.0) {
    pesan = "Gakpapa gak goodloking lu akan termaafkan jika duit lu banyak duit atau bokap lu kaya. wkwkwk";
  } else {
    pesan = "error";
  }

  document.querySelector(".pesan").innerHTML = `<p id="comment">${pesan}</p>`;
});
