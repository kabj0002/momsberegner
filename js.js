"use strict";
//Momsberegner
// Lav en funktion der modtager to argumenter, beloeb og moms.
// Funktionen skal console.logge beløbet med momsen lagt til. (moms er i procent)
// Lav moms som et default parameter sat til 25.

//Her kan man ændre beløb og evt. momsprocent
beregnProcent(100, 25);

function beregnProcent(tal, procent) {
  console.log((tal / 100) * procent);
}
