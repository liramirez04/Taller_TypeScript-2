import {Serie} from './serie.js'
import {series} from './data.js'


let seriesTable: HTMLElement = document.getElementById("tablaSeries")!;

mostrarSeries(series);

function mostrarSeries(program:Serie[]):void{
    let seriesTbody:HTMLElement = document.createElement("tbody");
    for (let serie of program)
    {
        let trElement:HTMLElement = document.createElement("tr");
        trElement.innerHTML = `<td class="table-active">${serie.id}</td>
        <td class="table-active"> <a href="" target="_blank"> ${serie.name} </a></td>
        <td class="table-active">${serie.channel}</td>
        <td class="table-active">${serie.seasons}</td>`;
        seriesTbody.appendChild(trElement);
    }
    seriesTable.appendChild(seriesTbody);
    let promTemp: number = temporadasPromedio(program);
    let promedioElement:HTMLElement = document.createElement("p");
    promedioElement.className = "seasons-average";
    promedioElement.innerHTML = `Seasons average: ${promTemp}`;
    seriesTable.parentElement!.appendChild(promedioElement);

}

function temporadasPromedio(program:Serie[]):number{
    let promedio:number = 0;
    for(let serie of program)
    {
        promedio+=serie.seasons;
    }
    promedio=Math.floor(promedio/program.length);
    return promedio;
}