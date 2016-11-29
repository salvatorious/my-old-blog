---
layout: post
title:  "Legendary Group Selector"
date:   2015-08-23 19:49:00
categories: games
---
I wanted to make the setup for Legendary a little faster.

<label>Select number of players:</label>
<select id="players" onchange="clearData">
	<option value="2">2</option>
	<option value="3">3</option>
	<option value="4">4</option>
	<option value="5">5</option>
</select>

<h2>Heroes</h2>
<button onclick="pickHeroes();">Pick Heroes</button>
<div id="heroes" class="result">
	
</div>
<hr>

<h2>Villains</h2>
<button onclick="pickVillains();">Pick Villains</button>
<div id="villains" class="result">
	
</div>
<hr>

<h2>Henchmen</h2>
<button onclick="pickHenchmen();">Pick Henchmen</button>
<div id="henchmen" class="result">
	
</div>
<hr>

<h2>Mastermind</h2>
<button onclick="pickMastermind();">Pick Mastermind</button>
<div id="mastermind" class="result">
	
</div>
<hr>

<h2>Scheme</h2>
<button onclick="pickScheme();">Pick Scheme</button>
<div id="scheme" class="result">
	
</div>
<hr>



<script>
	var players = document.getElementById('players');

	function shuffle(array) {
		var i = 0
		, j = 0
		, temp = null

		for (i = array.length - 1; i > 0; i -= 1) {
			j = Math.floor(Math.random() * (i + 1))
			temp = array[i]
			array[i] = array[j]
			array[j] = temp
		}
	}

	function pickVillains(){
		var numPlayers = players.options[players.selectedIndex].value;

		if (numPlayers == 2) {
			var counter = 2;
		} else if (numPlayers == 3 || numPlayers == 4){
			var counter = 3;
		} else {
			var counter = 4;
		};

		var villains = [
			"Spider-Foes",
			"Hydra",
			"Enemies of Asgard",
			"Masters of Evil",
			"Brotherhood"
		]

		shuffle(villains);

		var villainString = "";

		for(i=0;i<counter;i++){
			villainString += (villains[i].toString() + '<br>');
		}
		document.getElementById('villains').innerHTML = villainString;
	}

	function pickHenchmen(){
		var numPlayers = players.options[players.selectedIndex].value;

		if (numPlayers < 4) {
			var counter = 1;
		} else {
			var counter = 2;
		};

		var henchmen = [
			"Sentinels",
			"Doombots",
			"Savage Land Mutants",
			"Hand Ninjas"
		]

		shuffle(henchmen);

		var henchmenString = "";

		for(i=0;i<counter;i++){
			henchmenString += (henchmen[i].toString() + '<br>');
		}
		document.getElementById('henchmen').innerHTML = henchmenString;
	}

	function pickMastermind(){
		var numPlayers = players.options[players.selectedIndex].value;

		var masterminds = [
			"Dr. Doom",
			"Red Skull",
			"Magneto",
			"Loki"
		]

		shuffle(masterminds);

		var mmString = masterminds[0].toString();
			
		document.getElementById('mastermind').innerHTML = mmString;
	}

	function pickHeroes() {
		var numPlayers = players.options[players.selectedIndex].value;

		if (numPlayers == 5) {
			var counter = 6;
		} else {
			var counter = 5;
		};

		var heroes = [
			"Nick Fury",
			"Hawkeye",
			"Thor",
			"Black Widow",
			"Iron Man",
			"The Hulk",
			"Wolverine",
			"Storm",
			"Cyclops",
			"Gambit",
			"Spider Douche",
			"Emma Frost",
			"Rogue",
			"Deadpool"
		];
		
		shuffle(heroes);

		var heroString = "";

		for(i=0;i<counter;i++){
			heroString += (heroes[i].toString() + '<br>');
			
		}
		document.getElementById('heroes').innerHTML = heroString;
	}

	function pickScheme() {
		var schemes = [
			"The Legacy Virus",
			"Midtown Bank Robbery",
			"The Cosmic Cube",
			"Replace Earth's Leaders With Killbots",
			"Secret Invasion of the Skrull Shapeshifters",
			"Super Hero Civil War",
			"Negative Zone Prison Breakthrough",
			"Portals to the Dark Dimension"
		];
		
		shuffle(schemes);

		var heroString = schemes[0].toString();
			
		document.getElementById('scheme').innerHTML = heroString;
	}

	function clearData() {
		var results = document.querySelectorAll('.result');
		for(i=0;i<results.length;i++){
			this.innerHTML = "";	
		}
	}
</script>