playersDiv = document.getElementsByClassName("content-portrait-grid-l")[0];
playersDivParent = playersDiv.parentNode;

playersDivParent.insertBefore(createUrlElement(),playersDiv);

function createUrlElement() {
    var opggUrlElementContainer = document.createElement("div");
    var opggUrlElement = document.createElement("a");
    var linkText = document.createTextNode("Team op.gg Link");
    var summonerNames = loadSummonerNames();
    var opggUrl = createTeamOpggUrl(summonerNames);

    opggUrlElement.href = opggUrl;
    opggUrlElement.rel = "noopener noreferrer"
    opggUrlElement.target = "_blank";
    opggUrlElement.appendChild(linkText);

    opggUrlElementContainer.classList.add("txt-content");
    opggUrlElementContainer.appendChild(opggUrlElement);

    return opggUrlElementContainer;
}

function loadSummonerNames() {
    var summonerNames = [];
    var infoDivs = document.getElementsByClassName("txt-info");

    for (var index = 0; index < infoDivs.length; index++) {
        var childDiv = infoDivs[index].firstElementChild;

        if (childDiv == null) {continue;}

        var title = childDiv.getAttribute("title");
        if (title != null) {
            if (title.includes("LoL Summoner Name")) {
                summonerNames.push(infoDivs[index].firstElementChild.innerText);
            }
        }
    }

    return summonerNames;
}