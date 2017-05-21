/*
Chip Trader
*/
$("td:contains('Include your signature with this post')").append("<br />Chip Trader<form name='trade'><select name='chiptrader' onChange='ChipTrader(this.form)'><option>None</option><option>Version 1</option><option>Version 2</option><option>Version 3</option><option>Support</option></select></form>");

// Code borrowed from Cory
function addContent(censored) {
$('#c_postbtn button').click(function (e) {
if ($('#c_post-text').val().indexOf(censored) !== -1) {
e.preventDefault();
}
});
}

addContent('Chip Get');

var tier1Array = ['Cannon',
'Sword',
'WideSword',
'LongsSword',
'MiniBomb',
'SingleBomb',
'ShotGun',
'V-Gun',
'CrossGun',
'Spreader',
'HeatShot',
'Heat-V',
'HeatCross',
'HeatSide',
'Bubbler',
'Bubble-V',
'BubbleCross',
'BubbleSide',
'AirShot',
'ShockWave',
'DashAttack',
'Boomer',
'EnergyBomb',
'GutsPunch',
'CrackShoot'];

var tier2Array = ['Hi-Cannon',
'WideBlade',
'LongBlade',
'ElecSword',
'FireSword',
'AquaSword',
'BambooSword',
'ElecBlade',
'FireBlade',
'AquaBlade',
'BambooBlade',
'StepSword',
'CustomSword',
'VariableSword',
'FireTower',
'LilBomb',
'DoubleBomb',
'SonicWave',
'LavaSeed',
'SeaSeed',
'IceSeed',
'GrassSeed',
'Yo-Yo',
'MegaEnergyBomb',
'CrackBomb',
'Tornado',
'Twister',
'Blower',
'PoisonMask',
'Hammer',
'FireBreath',
'BlizzardBreath',
'StaticBreath',
'SporeBreath',
'ColdPunch',
'GutsStrength',
'DoubleShoot',
'HeatDragon',
'AquaDragon',
'ElecDragon',
'WoodDragon'];

var tier3Array = ['M-Cannon',
'CrossSword',
'FighterSword',
'KnightSword',
'MedBomb',
'BigBomb',
'TripleBomb',
'CannonBall',
'IceBall',
'LavaBall',
'WindRacket',
'SuperVulcan',
'DynaWave',
'Geyser',
'BlueWave',
'RedWave',
'EarthWave',
'Magnum',
'ParalyzeBomb',
'ResetBomb',
'BugBomb',
'FireRatton',
'PoisonFace',
'ElementFlare',
'ElementFreeze',
'ElementDune',
'ElementMound',
'GutsImpact',
'TripleShoot',
'MechSword',
'ElementSword',
'AssassinSword'];

var chipfamilyArray = ['ZapRing',
'Vulcan',
'WideShot',
'Thunder',
'Spore',
'GunDelSol',
'Quake',
'MarkCannon',
'CactusBall',
'Pulsar',
'ElecReel',
'Katana',
'DrillArm',
'MoonBlade',
'Skully',
'AquaWhirl',
'FireHit',
'Voltz',
'HotBody',
'WoodNose',
'CircleGun',
'TankCannon',
'BatCannon',
'Asteroid',
'Ratton',
'TimeBomb',
'Rope',
'MagBolt',
'AirSpin',
'Reflector',
'MachineGun',
'CornShot',
'FireBurn',
'DollThunder',
'TrainArrow',
'AquaNeedle',
'ElecPulse',
'BubbleStar',
'IronShell',
'AirRaid',
'RollingLog',
'FlashBomb',
'WaveArm',
'SandWork',
'GolemHit',
'AuraHead',
'BurnSquare'];

var megaArray1 = ['Hero Sword',
'Gun Del Sol EX',
'ZeusHammer',
'Attack +30',
'JusticeOne',
'MeteorKnuckle',
'Salamander',
'Fountain',
'Bolt',
'GaiaBlade',
'Poltergeist',
'ElementDark',
'BlackWing',
'Anubis',
'Muramasa',
'Z-Saber',
'ColonelArmy',
'BlizzardBall',
'Guardian',
'GodHammer',
'ShootStar',
'OldWood',
'GodStone',
'Forte',
'ForteAnother'];

var megaArray2 =['A Chip',
'Another Chip'];

var megaArray3 =['A Chip',
'Another Chip'];

var supportchipArray = ['Power Song',
'Quake Song',
'Trip Song',
'Anti Sword',
'Recover 50',
'Recover 100',
'Recover 150',
'Recover 200',
'Recover 300',
'Barrier',
'Barrier 100',
'Barrier 200',
'Aura',
'Invisible',
'Grass Stage',
'Ice Stage',
'Gravity Stage',
'GNull Stage',
'Holy Panel',
'Holy Stage',
'Swamp Stage',
'Paralyze Plus',
'Attack +10',
'Guard',
'Reflector',
'Double Stone',
'Paralyze Stage',
'Attack Panel',
'Buster Panel',
'Area Eater',
'Spirit Fury',
'Poison Apple',
'Double Cross',
'Giga Mine',
'Divide Line',
'Double Eater',
'Panel Format',
'Panic Cloud',
'Mega Crusher',
'Gravity Plus',
'Freeze Plus',
'Bubble Plus',
'Blind Plus',
'Poison Plus',
'Confuse Plus',
'Whistle',
'Chaos Chip',
'Chaos Equal',
'Chaos Interrupt',
'Chaos Stack'];

var t1Pool = tier1Array.slice(0);
var t2Pool = tier1Array.slice(0);
var t3Pool = tier3Array.slice(0);
		
		// assemble the tier arrays
		for (var a = 0; a < chipfamilyArray.length; a++) {
			t1Pool.push(chipfamilyArray[a] + '1');
		}
		for (var b = 0; b < chipfamilyArray.length; b++) {
			t2Pool.push(chipfamilyArray[b] + '2');
		}
		for (var c = 0; c < chipfamilyArray.length; c++) {
			t3Pool.push(chipfamilyArray[c] + '3');
    }
function ChipTrader(trade) {
    if (trade.chiptrader.selectedIndex !== 0){
		document.forms['posting'].onsubmit=function(){
		yourChip = t1Pool[Math.floor(Math.random() * t1Pool.length)];

        megachip = megaArray1[Math.floor(Math.random() * megaArray1.length)];
        
        prob = Math.floor(Math.random() * 20);
		
		
 

if (prob >18 && trade.chiptrader.selectedIndex < 4) {
	 if (trade.chiptrader.selectedIndex == 1) {
		 yourChip = megaArray1[Math.floor(Math.random() * megaArray1.length)];
	 }
	 if (trade.chiptrader.selectedIndex == 2) {
		 yourChip = megaArray2[Math.floor(Math.random() * megaArray2.length)];
	 }
	 if (trade.chiptrader.selectedIndex == 3) {
		yourChip = megaArray3[Math.floor(Math.random() * megaArray3.length)];
	 }

}
else {
	 if (trade.chiptrader.selectedIndex == 1) {
		 yourChip = t1Pool[Math.floor(Math.random() * t1Pool.length)];
	 }
	 if (trade.chiptrader.selectedIndex == 2) {
		 yourChip = t2Pool[Math.floor(Math.random() * t2Pool.length)];
	 }
	 if (trade.chiptrader.selectedIndex == 3) {
		 yourChip = t3Pool[Math.floor(Math.random() * t3Pool.length)];
	 }
	 if (trade.chiptrader.selectedIndex == 4) {
		 yourChip = supportchipArray[Math.floor(Math.random() * supportchipArray.length)];
	 }
}
 document.forms['posting'].post.value+= "\n[quote=Chip Get!]You got " +  yourChip +" [/quote]";
};
}
}