import {Serie} from './serie.js'
import {series} from './data.js'


let seriesTable: HTMLElement = document.getElementById("tablaSeries")!;
let serieCard: HTMLElement = document.getElementById("serieCard")!;

mostrarSeries(series);

function mostrarSeries(program:Serie[]):void{
    let seriesTbody:HTMLElement = document.createElement("tbody");
    for (let serie of program)
    {
        let trElement:HTMLElement = document.createElement("tr");
        trElement.innerHTML = `<td class="table-active">${serie.id}</td>
        <td class="table-active"> <a class="link text-primary" id="Card${serie.id}"> ${serie.name} </a></td>
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

let links: NodeListOf<Element> = document.querySelectorAll(".link");

links.forEach(link => {
    link.addEventListener("click", function(event){
        event.preventDefault();
        serieCard.classList.remove('hidden');
        let clickedLink = (event.target as HTMLElement).id;
        let id_serie: number = Number(clickedLink.slice(4));
        mostrarInfo(series[id_serie - 1]);
    });
});

function mostrarInfo(serie:Serie):void{
    let seriesTbody:HTMLElement = document.querySelector("#serieCard div")!;
    if (seriesTbody){
        seriesTbody.innerHTML = "";
    } else {
        seriesTbody = document.createElement("div");
    }
    seriesTbody.innerHTML = `<div class="card">
        <img class="card-img-top" src="${serie.image}" alt="Card image cap">
        <div class="card-body">
            <h5 class="card-title">${serie.name}</h5>
            <p class="card-text">${serie.description}</p>
            <a href="${serie.link}" target="_blank" class="card-link">${serie.link}</a>
        </div>
    </div>`;
    serieCard.appendChild(seriesTbody);
}
