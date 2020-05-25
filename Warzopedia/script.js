function check() {
  var a = document.getElementById("srch");
  var b = document.getElementById("frm");
  var regx1 = /America/i;
  var regx2 = /kill switch/i;
  var regx3 = /laser guided technology/i;
  var regx4 = /nuclear/i;
  var regx5 = /target/i;
  var regx6 = /video/i;
  var regx7 = /Russia/i;
  var regx8 = /China/i;
  var regx9 = /France/i;
  var regx10 = /England/i;
  if (regx1.test(a.value.trim())) {
    b.action = "cAmerica.html";
    return true;
  } else if (regx2.test(a.value.trim())) {
    b.action = "killSwitch.html";
    return true;
  } else if (regx3.test(a.value.trim())) {
    b.action = "LGT.html";
    return true;
  } else if (regx4.test(a.value.trim())) {
    b.action = "nuclear.html";
    return true;
  } else if (regx5.test(a.value.trim())) {
    b.action = "target.html";
    return true;
  } else if (regx6.test(a.value.trim())) {
    b.action = "videos.html";
    return true;
  } else if (
    regx7.test(a.value.trim()) ||
    regx8.test(a.value.trim()) ||
    regx9.test(a.value.trim()) ||
    regx10.test(a.value.trim())
  ) {
    b.action = "article.html";
    return true;
  } else if (a.value.trim !== "") {
    alert(
      "we are unable to process your request. Maybe checking our Article section can help"
    );
    b.action = "article.html";
    return true;
  }
}
