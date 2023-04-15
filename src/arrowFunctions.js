"use strict"

function Pessoa() {
    // const pessoa = this
    this.age = 0

    setInterval(() => {
        // console.log(pessoa+age++)
        console.log(this.age++);
    }, 1000);

}

const p1 = new Pessoa();

/*
(p1, p2, ..., pX) => { retorno }
(p1, p2) => retorno

*/