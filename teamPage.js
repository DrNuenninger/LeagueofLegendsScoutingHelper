var allSummonerNames = [];
var activeSummonerNames = [];

playersDiv = document.getElementsByClassName("content-portrait-grid-l")[0];
playersDivParent = playersDiv.parentNode;
playersDivParent.insertBefore(createUrlElement(),playersDiv);

function createUrlElement() {

	
    loadSummonerNames();
	
    var opggUrlAll = createTeamOpggUrl(allSummonerNames);
    var opggUrlActive = createTeamOpggUrl(activeSummonerNames);
	
	var opggUrlElementContainer = document.createElement("div");
    var opggUrlElementActive = document.createElement("a");

    opggUrlElementActive.href = opggUrlActive;
    opggUrlElementActive.rel = "noopener noreferrer";
    opggUrlElementActive.target = "_blank";
    opggUrlElementActive.appendChild(document.createTextNode("Active team op.gg"));
	opggUrlElementActive.style.paddingRight = "50px";

    opggUrlElementContainer.classList.add("txt-content");
    opggUrlElementContainer.appendChild(opggUrlElementActive);
	
	
	var opggUrlElementAll = document.createElement("a");

    opggUrlElementAll.href = opggUrlAll;
    opggUrlElementAll.rel = "noopener noreferrer";
    opggUrlElementAll.target = "_blank";
    opggUrlElementAll.appendChild(document.createTextNode("Full team op.gg"));

    opggUrlElementContainer.classList.add("txt-content");
    opggUrlElementContainer.appendChild(opggUrlElementAll);

    return opggUrlElementContainer;
}

function loadSummonerNames() {
    var infoDivs = document.getElementsByClassName("txt-info");

    for (var index = 0; index < infoDivs.length; index++) {
        var childDiv = infoDivs[index].firstElementChild;

        if (childDiv == null) {continue;}

        var title = childDiv.getAttribute("title");
        if (title != null) {
            if (title.includes("League of Legends » LoL Riot ID (EU West)")) {
				var summonerName = infoDivs[index].firstElementChild.innerText;
                allSummonerNames.push(summonerName);
				
				var activePlayerDiv = infoDivs[index].getElementsByClassName("txt-status-positive");
				if( activePlayerDiv.length > 0 ) {
					activeSummonerNames.push(summonerName);
				}
            }
        }
    }

    return;
}