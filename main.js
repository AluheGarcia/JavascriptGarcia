nombre = prompt('Hola, dime tu nombre y mira el console.log ')
console.log('Hola ' + nombre + ', esta es mi primer entrega del proyecto final, tras pensar en que ofrecer, se me ocurrió hacer un librojuego, realmente me habría gustado hacer algo más emocionante, pero desconozco de los conocimientos necesarios por el momento.')

console.log('Para comenzar, te daré el contexto. Te despiertas tirado en el suelo, en un ambiente desertico y desesperanzador. No cuentas con nada más que tus puños y unos harapos que recubren tu pecho y piernas.')

console.log('Viendo tus alrededores, descubres que a lo lejos hay una casa de dos pisos, custodiada por 2 personas, estas personas están cubiertas con placas metalicas de forma precaria.')
console.log('En cambio, viendo a otro lado, puedes observar una choza, cerca de la misma hay un hacha y varios árboles secos que ya fueron talados.')

let primeraOpcion = prompt('¿A donde prefieres ir? escribe "casa" o "choza"').toUpperCase();


function opciones(primeraOpcion) {
    while (primeraOpcion !== "CASA" && primeraOpcion !== "CHOZA" && primeraOpcion !== "A" && primeraOpcion !== "B") {
        primeraOpcion = prompt('¿A donde prefieres ir? escribe "casa" o "choza"').toUpperCase();
    }

    if (primeraOpcion == 'CASA' || primeraOpcion == 'A') {
        console.log('Te diriges hacia la casa de dos pisos. A medida que te acercas, las dos figuras que custodiaban la entrada te observan con desconfianza. Sus rostros están ocultos detrás de placas metálicas, y sus miradas te hacen sentir un escalofrío recorriendo tu espalda. Sin embargo, decides continuar."¿Quién eres y qué buscas aquí?" pregunta una de las figuras con voz ronca. Explicas tu situación, cómo te despertaste en medio del desierto sin recordar cómo llegaste allí. Ellos hacen que pases al recinto sin decir una palabra.');
        console.log('Dentro, puedes observar varias esculturas peculiares como... un estante de craneos y velas compuestos principalmente de cera apoyadas en lo que parecen ser mesas de extremidades. Cuando descubres en donde te metiste, fue demasiado tarde para ti.');
        let casaOpciones1 = prompt('Podrias "luchar", "dialogar" o intentar "huir"').toUpperCase();
        while (casaOpciones1 !== "LUCHAR" && casaOpciones1 !== "DIALOGAR" && casaOpciones1 !== "HUIR" && casaOpciones1 !== "A" && casaOpciones1 !== "B" && casaOpciones1 !== "C") {
            casaOpciones1 = prompt('Podrias "luchar", "dialogar" o intentar "huir"').toUpperCase();
        }
        switch (casaOpciones1) {
            case "LUCHAR":
            case "A":
                return console.log('Intentaste darles pelea, pero no tenías ninguna posibilidad, fin del juego :(');
            case "DIALOGAR":
            case "B":
                return console.log('Al pedir explicaciones, ellos simplemente se quedaron callados mientras se abría una puerta. De la puerta emerge una araña gigante, paralizado por el pánico, no tienes tiempo para reaccionar y eres encapsulado en telas de araña y termina tu historia con un tragico final :c');
            case "HUIR":
            case "C":
                return console.log('Al intentar huir, no encuentras otra posibilidad más que saltar del segundo piso y correr lo más rápido que puedes, afortunadamente encuentras un refugio seguro con algo para comer y una cama para dormir, el resto de tu aventura a día de hoy sigue siendo un misterio.');
        }
    } else if (primeraOpcion == 'CHOZA' || primeraOpcion == 'B') {
        console.log('Mientras te acercas a la choza, el olor a madera podrida y humedad te golpea. Cerca de uno de los árboles, encuentras hacha que buscabas, pero en manos de un ente, el mismo te ofrece un trato... "Me gustan los dedos humanos, jugaremos un juego, tienes que tirar esta moneda al cielo, si cae en la cara, ganas y te llevas el hacha, si pierdes, me llevo tus dedos." ¿Aún quieres el hacha?');
        let chozaOpciones1 = prompt('Elige entre jugar al cara, cruz con el ente o irte').toUpperCase();
        while (chozaOpciones1 !== "LUCHAR" && chozaOpciones1 !== "DIALOGAR" && chozaOpciones1 !== "HUIR" && chozaOpciones1 !== "A" && chozaOpciones1 !== "B" && chozaOpciones1 !== "C") {
            chozaOpciones1 = prompt('Elige entre jugar al cara, cruz con el ente o irte').toUpperCase();
        }
        switch (chozaOpciones1) {
            case "CARA":
            case "A":
                return console.log('AL tirar la moneda, cae del lado de la cruz, tuviste mala suerte y pierdes todos tus dedos y mueres desangrado');
            case "CRUZ":
            case "B":
                return console.log('"¡Hoy es tu dia de suerte!" exclama el demonio antes de desvanecerse entre los árboles, ahora tienes un hacha y un refugio donde pasar al menos tu primer noche, deberás pensar que hacer mañana, pero esa es otra historia.');
            case "irte":
            case "C":
                return console.log('Al intentar huir, el ente te persigue y por terminas cayendo de un barranco por no ver al frente ¡que mala suerte!');
            default:
                return console.log('no elegiste ninguna de las opciones propuestas, haré que salgas del juego! >:C');
        }
    }
}

opciones(primeraOpcion);