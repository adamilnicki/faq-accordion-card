function display1() {
  collapse2();
  collapse3();
  collapse4();
  collapse5();
  document.getElementById("question--1").style.fontWeight = "700";
  document.getElementById("answer--1").style.cssText += `
    display:block;
    transition:display 1s ease-in;
  `;
  document.getElementById("arrow--1").style.cssText = `
    transform-origin:center center;
    transform:rotate(180deg);
    transition:transform .2s;
    `;
  let illustration = document.getElementsByClassName("illustration");
  illustration[0].style.cssText = `
  top:-20%;
  `;

  document.getElementById("arrow--1").setAttribute("onclick", "collapse1()");
  document.getElementById("question--1").setAttribute("onclick", "collapse1()");
}

function collapse1() {
  document.getElementById("question--1").style.fontWeight = "400";
  document.getElementById("answer--1").style.cssText -= `
    display:block;
    transition:display 1s ease-in;
  `;
  document.getElementById("arrow--1").style.cssText = `
    transform-origin:center center;
    transform:rotate(-0deg);
    transition:transform .2s;
    `;
  let illustration = document.getElementsByClassName("illustration");
  illustration[0].style.cssText -= "";

  document.getElementById("arrow--1").setAttribute("onclick", "display1()");
  document.getElementById("question--1").setAttribute("onclick", "display1()");
}

function display2() {
  collapse1();
  collapse3();
  collapse4();
  collapse5();
  document.getElementById("question--2").style.fontWeight = "700";
  document.getElementById("answer--2").style.cssText += `
    display:block;
    transition:display 1s ease-in;
  `;
  document.getElementById("arrow--2").style.cssText = `
    transform-origin:center center;
    transform:rotate(180deg);
    transition:transform .2s;
    `;
  let illustration = document.getElementsByClassName("illustration");
  illustration[0].style.cssText = `
  top:-20.6%;
  `;

  document.getElementById("arrow--2").setAttribute("onclick", "collapse2()");
  document.getElementById("question--2").setAttribute("onclick", "collapse2()");
}

function collapse2() {
  document.getElementById("question--2").style.fontWeight = "400";
  document.getElementById("answer--2").style.cssText -= `
    display:block;
    transition:display 1s ease-in;
  `;
  document.getElementById("arrow--2").style.cssText = `
    transform-origin:center center;
    transform:rotate(-0deg);
    transition:transform .2s;
    `;
  let illustration = document.getElementsByClassName("illustration");
  illustration[0].style.cssText -= "";

  document.getElementById("arrow--2").setAttribute("onclick", "display2()");
  document.getElementById("question--2").setAttribute("onclick", "display2()");
}

function display3() {
  collapse1();
  collapse2();
  collapse4();
  collapse5();
  document.getElementById("question--3").style.fontWeight = "700";
  document.getElementById("answer--3").style.cssText += `
    display:block;
    transition:display 1s ease-in;
  `;
  document.getElementById("arrow--3").style.cssText = `
    transform-origin:center center;
    transform:rotate(180deg);
    transition:transform .2s;
    `;
  let illustration = document.getElementsByClassName("illustration");
  illustration[0].style.cssText = `
  top:-20%;
  `;

  document.getElementById("arrow--3").setAttribute("onclick", "collapse3()");
  document.getElementById("question--3").setAttribute("onclick", "collapse3()");
}

function collapse3() {
  document.getElementById("question--3").style.fontWeight = "400";
  document.getElementById("answer--3").style.cssText -= `
    display:block;
    transition:display 1s ease-in;
  `;
  document.getElementById("arrow--3").style.cssText = `
    transform-origin:center center;
    transform:rotate(-0deg);
    transition:transform .2s;
    `;
  let illustration = document.getElementsByClassName("illustration");
  illustration[0].style.cssText -= "";

  document.getElementById("arrow--3").setAttribute("onclick", "display3()");
  document.getElementById("question--3").setAttribute("onclick", "display3()");
}

function display4() {
  collapse1();
  collapse2();
  collapse3();
  collapse5();
  document.getElementById("question--4").style.fontWeight = "700";
  document.getElementById("answer--4").style.cssText += `
    display:block;
    transition:display 1s ease-in;
  `;
  document.getElementById("arrow--4").style.cssText = `
    transform-origin:center center;
    transform:rotate(180deg);
    transition:transform .2s;
    `;
  let illustration = document.getElementsByClassName("illustration");
  illustration[0].style.cssText = `
  top:-20.6%;
  `;

  document.getElementById("arrow--4").setAttribute("onclick", "collapse4()");
  document.getElementById("question--4").setAttribute("onclick", "collapse4()");
}

function collapse4() {
  document.getElementById("question--4").style.fontWeight = "400";
  document.getElementById("answer--4").style.cssText -= `
    display:block;
    transition:display 1s ease-in;
  `;
  document.getElementById("arrow--4").style.cssText = `
    transform-origin:center center;
    transform:rotate(-0deg);
    transition:transform .2s;
    `;
  let illustration = document.getElementsByClassName("illustration");
  illustration[0].style.cssText -= "";

  document.getElementById("arrow--4").setAttribute("onclick", "display4()");
  document.getElementById("question--4").setAttribute("onclick", "display4()");
}

function display5() {
  collapse1();
  collapse2();
  collapse3();
  collapse4();
  document.getElementById("question--5").style.fontWeight = "700";
  document.getElementById("answer--5").style.cssText += `
    display:block;
    transition:display 1s ease-in;
  `;
  document.getElementById("arrow--5").style.cssText = `
    transform-origin:center center;
    transform:rotate(180deg);
    transition:transform .2s;
    `;
  let illustration = document.getElementsByClassName("illustration");
  illustration[0].style.cssText = `
  top:-20.6%;
  `;

  document.getElementById("arrow--5").setAttribute("onclick", "collapse5()");
  document.getElementById("question--5").setAttribute("onclick", "collapse5()");
}

function collapse5() {
  document.getElementById("question--5").style.fontWeight = "400";
  document.getElementById("answer--5").style.cssText -= `
    display:block;
    transition:display 1s ease-in;
  `;
  document.getElementById("arrow--5").style.cssText = `
    transform-origin:center center;
    transform:rotate(-0deg);
    transition:transform .2s;
    `;
  let illustration = document.getElementsByClassName("illustration");
  illustration[0].style.cssText -= "";

  document.getElementById("arrow--5").setAttribute("onclick", "display5()");
  document.getElementById("question--5").setAttribute("onclick", "display5()");
}
