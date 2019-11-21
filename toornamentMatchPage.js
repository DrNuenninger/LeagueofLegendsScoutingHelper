teamsDiv = document.getElementsByClassName("layout-block content")[0];
team1Div = teamsDiv.getElementsByClassName("size-1-of-2")[0];
team2Div = teamsDiv.getElementsByClassName("size-1-of-2")[1];

if (team1Div != undefined) {
    opggElementTeam1 = createUrlElement(team1Div.firstElementChild.lastElementChild);
    if (opggElementTeam1 != null) {
        team1Div.firstElementChild.firstElementChild.appendChild(opggElementTeam1);
    }
}

if (team2Div != undefined) {
    opggElementTeam2 = createUrlElement(team2Div.firstElementChild.lastElementChild);
    if (opggElementTeam2 != null) {
        team2Div.firstElementChild.firstElementChild.appendChild(opggElementTeam2);
    }
}

function createUrlElement(playersDiv) {
    var opggUrlElementContainer = document.createElement("div");
    var opggUrlElement = document.createElement("a");
    var linkText = document.createTextNode("Team op.gg Link");
    var summonerNames = loadSummonerNames(playersDiv);

    if (summonerNames.length > 0) {
        var opggUrl = createTeamOpggUrl(summonerNames);
    } else {
        return null;
    }
    

    opggUrlElement.href = opggUrl;
    opggUrlElement.rel = "noopener noreferrer"
    opggUrlElement.target = "_blank";
    opggUrlElement.appendChild(linkText);

    opggUrlElementContainer.classList.add("size-content");
    opggUrlElementContainer.appendChild(opggUrlElement);

    return opggUrlElementContainer;
}

function loadSummonerNames(playersDiv) {
    var summonerNames = [];
    var infoDivs = playersDiv.firstElementChild.children;

    for (var index = 0; index < infoDivs.length; index++) {
        var childDivs = infoDivs[index].firstElementChild.childNodes;
        

        if (childDivs.length != 2) {continue;}

        var summonerName = childDivs[0].innerText;
        var unsanitizedSummonerName = childDivs[1].innerText;
        if (unsanitizedSummonerName != "No information on this player") {
            summonerName = unsanitizedSummonerName.replace("Summoner Name:", "");
        }
        
        summonerNames.push(summonerName);
    }

    return summonerNames;
}