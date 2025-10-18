import { series } from './data.js';
var seriesTable = document.getElementById("tablaSeries");
mostrarSeries(series);
function mostrarSeries(program) {
    var seriesTbody = document.createElement("tbody");
    for (var _i = 0, program_1 = program; _i < program_1.length; _i++) {
        var serie = program_1[_i];
        var trElement = document.createElement("tr");
        trElement.innerHTML = "<td class=\"table-active\">".concat(serie.id, "</td>\n        <td class=\"table-active\"> <a href=\"\" target=\"_blank\"> ").concat(serie.name, " </a></td>\n        <td class=\"table-active\">").concat(serie.channel, "</td>\n        <td class=\"table-active\">").concat(serie.seasons, "</td>");
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
