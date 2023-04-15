// boolean - True or False
// string 
// tuple
var title;
title: [1, "Título"];
// enum  { chave: valor} = objeto
var Color;
(function (Color) {
    Color["white"] = "#fff";
    Color["red"] = "#f00";
    Color["blue"] = "#00f";
})(Color || (Color = {}));
