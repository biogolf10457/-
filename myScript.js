function highlightCircle(cid) {
    var c = document.getElementById(cid);
    var cBCR = c.getBoundingClientRect();
    if (cBCR.top > h / 4 && cBCR.top < (3 * h) / 4) {
      c.style.filter = "brightness(150%)";
    } else {
      c.style.filter = "brightness(50%)";
    }
  }
  function showByClass(eclass) {
    var elms = document.getElementsByClassName(eclass);
    for (let i = 0; i < elms.length; i++) {
      if (
        elms[i].getBoundingClientRect().top > h / 3 &&
        elms[i].getBoundingClientRect().top < (2 * h) / 3
      ) {
        elms[i].style.opacity = "100%";
      }
    }
    if (elms[0].getBoundingClientRect().top > (2 * h) / 3) {
      for (let i = 0; i < elms.length; i++) {
        elms[i].style.opacity = "0%";
      }
    }
  }
  function showByClasswTr(eclass) {
    var elms = document.getElementsByClassName(eclass);
    for (let i = 0; i < elms.length; i++) {
      if (
        elms[i].getBoundingClientRect().top > h / 3 &&
        elms[i].getBoundingClientRect().top < (2 * h) / 3
      ) {
        elms[i].style.opacity = "100%";
        elms[i].style.transform = "translate(0,0)";
      }
    }
    if (elms[0].getBoundingClientRect().top > (2 * h) / 3) {
      for (let i = 0; i < elms.length; i++) {
        elms[i].style.opacity = "0%";
        elms[i].style.transform = "translate(0,5%)";
      }
    }
  }
  function showById(eid) {
    var elm = document.getElementById(eid);
    var elmBCR = elm.getBoundingClientRect();
    if (elmBCR.top > h / 3 && elmBCR.top < (2 * h) / 3) {
      elm.style.opacity = "100%";
    } else if (elmBCR.top > (2 * h) / 3) {
      elm.style.opacity = "0%";
    }
  }
  function showByIdwTr(eid) {
    var elm = document.getElementById(eid);
    var elmBCR = elm.getBoundingClientRect();
    if (elmBCR.top > h / 3 && elmBCR.top < (2 * h) / 3) {
      elm.style.opacity = "100%";
      elm.style.transform = "translate(0,0)";
    } else if (elmBCR.top > (2 * h) / 3) {
      elm.style.opacity = "0%";
      elm.style.transform = "translate(0,5%)";
    }
  }
  function preLoadImg(src) {
    for (let i = 0; i < src.length; i++) {
      var my_image = new Image();
      my_image.src = src[i];
      imgCch.push(my_image);
    }
  }
  function scrollBG(eid, scale, start) {
    var start = -10;
    var add = head1.getBoundingClientRect().top / scale;
    document.getElementById(eid).style.bottom = start + add + "%";
  }