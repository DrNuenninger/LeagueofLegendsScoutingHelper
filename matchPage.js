createLineupLinks();

function createLineupLinks() {
    var lineupDivs = document.getElementsByClassName("content-match-lineup");

    var teamDivs = document.getElementsByClassName("content-match-head-team-titles");
    teamDivs[0].appendChild(createLinupLinkDiv(lineupDivs[0]));
    teamDivs[1].appendChild(createLinupLinkDiv(lineupDivs[1]));
}

function createLinupLinkDiv(lineupDiv) {
    var opggUrlElementContainer = document.createElement("div");
    var opggUrlElement = document.createElement("a");
    var linkText = document.createTextNode("Lineup op.gg Link");
    opggUrlElement.appendChild(linkText);

    opggUrlElementContainer.classList.add("txt-content");
    opggUrlElementContainer.appendChild(opggUrlElement);
    opggUrlElementContainer.onclick = function(){setOpggUrl(opggUrlElement,lineupDiv)};

    return opggUrlElementContainer;
}

function setOpggUrl(opggUrlElement, lineupDiv) {
    opggUrlElement.href = createTeamOpggUrl(getSummonerNames(lineupDiv));
    opggUrlElement.rel = "noopener noreferrer"
    opggUrlElement.target = "_blank";
}

function getSummonerNames(linupDiv) {
    var txtDivs = linupDiv.getElementsByClassName("txt-info");
    var summonerNames = [];
    for (let i = 0; i < txtDivs.length; i++) {
        if (txtDivs[i].className == "txt-info") {
            summonerNames.push(txtDivs[i].innerText);
        }
    }

    return summonerNames;
}