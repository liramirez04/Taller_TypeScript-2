import { series } from './data.js';
var seriesTable = document.getElementById("tablaSeries");
var serieCard = document.getElementById("serieCard");
mostrarSeries(series);
function mostrarSeries(program) {
    var seriesTbody = document.createElement("tbody");
    for (var _i = 0, program_1 = program; _i < program_1.length; _i++) {
        var serie = program_1[_i];
        var trElement = document.createElement("tr");
        trElement.innerHTML = "<td class=\"table-active\">".concat(serie.id, "</td>\n        <td class=\"table-active\"> <a class=\"link text-primary\" id=\"Card").concat(serie.id, "\"> ").concat(serie.name, " </a></td>\n        <td class=\"table-active\">").concat(serie.channel, "</td>\n        <td class=\"table-active\">").concat(serie.seasons, "</td>");
        seriesTbody.appendChild(trElement);
    }
    seriesTable.appendChild(seriesTbody);
    var promTemp = temporadasPromedio(program);
    var promedioElement = document.createElement("p");
    promedioElement.className = "seasons-average";
    promedioElement.innerHTML = "Seasons average: ".concat(promTemp);
    seriesTable.parentElement.appendChild(promedioElement);
}
function temporadasPromedio(program) {
    var promedio = 0;
    for (var _i = 0, program_2 = program; _i < program_2.length; _i++) {
        var serie = program_2[_i];
        promedio += serie.seasons;
    }
    promedio = Math.floor(promedio / program.length);
    return promedio;
}
var links = document.querySelectorAll(".link");
links.forEach(function (link) {
    link.addEventListener("click", function (event) {
        event.preventDefault();
        serieCard.classList.remove('hidden');
        var clickedLink = event.target.id;
        var id_serie = Number(clickedLink.slice(4));
        mostrarInfo(series[id_serie - 1]);
    });
});
function mostrarInfo(serie) {
    var seriesTbody = document.querySelector("#serieCard div");
    if (seriesTbody) {
        seriesTbody.innerHTML = "";
    }
    else {
        seriesTbody = document.createElement("div");
    }
    seriesTbody.innerHTML = "<div class=\"card\">\n        <img class=\"card-img-top\" src=\"".concat(serie.image, "\" alt=\"Card image cap\">\n        <div class=\"card-body\">\n            <h5 class=\"card-title\">").concat(serie.name, "</h5>\n            <p class=\"card-text\">").concat(serie.description, "</p>\n            <a href=\"").concat(serie.link, "\" target=\"_blank\" class=\"card-link\">").concat(serie.link, "</a>\n        </div>\n    </div>");
    serieCard.appendChild(seriesTbody);
}
