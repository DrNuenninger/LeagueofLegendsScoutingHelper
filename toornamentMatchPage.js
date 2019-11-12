teamsDiv = document.getElementsByClassName("layout-block content")[0];
team1Div = teamsDiv.getElementsByClassName("size-1-of-2")[0];
team2Div = teamsDiv.getElementsByClassName("size-1-of-2")[1];

team1Div.firstElementChild.firstElementChild.appendChild(createUrlElement(team1Div.firstElementChild.lastElementChild));
team2Div.firstElementChild.firstElementChild.appendChild(createUrlElement(team2Div.firstElementChild.lastElementChild));

function createUrlElement(playersDiv) {
    var opggUrlElementContainer = document.createElement("div");
    var opggUrlElement = document.createElement("a");
    var linkText = document.createTextNode("Team op.gg Link");
    var summonerNames = loadSummonerNames(playersDiv);
    var opggUrl = createTeamOpggUrl(summonerNames);

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
        

        if (childDivs.length == 0) {continue;}

        var unsanitizedSummonerName = childDivs[1].innerText;
        var summonerName = unsanitizedSummonerName.replace("Summoner Name:", "");
        summonerNames.push(summonerName);
    }

    return summonerNames;
}