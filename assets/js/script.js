const list = document.getElementById("item");

const materialDropdown = document.getElementById("materialDropdown");
const materialDropdownStyle = materialDropdown.style.visibility;

list.addEventListener("change", showHide);

function showHide() {
  const listItem = list.value;
  if (listItem === "metal" || listItem === "wire" || listItem === "gear" || listItem === "liquid" || listItem === "plate" || listItem === "cable") {
    materialDropdown.style.visibility = "visible";
  } else {
    materialDropdown.style.visibility = "hidden";
  }
}

function getMetal() {
  if (materialDropdown.value === "copper") {
    return metalIndex = 0;
  } else if (materialDropdown.value === "iron") {
    return metalIndex = 1;
  } else if (materialDropdown.value === "gold") {
    return metalIndex = 2;
  } else if (materialDropdown.value === "aluminium") {
    return metalIndex = 3;
  } else if (materialDropdown.value === "diamond") {
    return metalIndex = 4;
  }
}

const amountPerSecond = document.getElementById("amountPerSecond");

function calculate() {
  totalStarter = 0;
  totalWireMaker = 0;
  totalCutter = 0;
  totalFurnace = 0;
  totalCableMaker = 0;
  totalHydraulicPress = 0;
  totalCrafterMK1 = 0;
  totalCrafterMK2 = 0;
  totalCrafterMK3 = 0;

  const listItem = list.value
  const amountPS = amountPerSecond.value;
  let metalIndex = getMetal();

  if (listItem === "metal") {
    const result = metalI(amountPS, metalIndex);
    results.innerHTML = result;
    totalMachine.textContent = displayWords();
  } else if (listItem === "wire") {
    const result = wire(amountPS, metalIndex);
    results.innerHTML = result;
    totalMachine.textContent = displayWords();
  } else if (listItem === "gear") {
    const result = gear(amountPS, metalIndex);
    results.innerHTML = result;
    totalMachine.textContent = displayWords();
  } else if (listItem === "liquid") {
    const result = liquid(amountPS, metalIndex);
    results.innerHTML = result;
    totalMachine.textContent = displayWords();
  } else if (listItem === "plate") {
    const result = plate(amountPS, metalIndex);
    results.innerHTML = result;
    totalMachine.textContent = displayWords();
  } else if (listItem === "cable") {
    const result = cable(amountPS, metalIndex);
    results.innerHTML = result;
    totalMachine.textContent = displayWords();
  } else if (listItem === "circuit") {
    const result = circuit(amountPS);
    results.innerHTML = result;
    totalMachine.textContent = displayWords();
  } else if (listItem === "serverRack") {
    const result = serverRack(amountPS);
    results.innerHTML = result;
    totalMachine.textContent = displayWords();
  } else if (listItem === "battery") {
    const result = battery(amountPS);
    results.innerHTML = result;
    totalMachine.textContent = displayWords();
  } else if (listItem === "engine") {
    const result = engine(amountPS);
    results.innerHTML = result;
    totalMachine.textContent = displayWords();
  } else if (listItem === "solarCell") {
    const result = solarCell(amountPS);
    results.innerHTML = result;
    totalMachine.textContent = displayWords();
  } else if (listItem === "electricBoard") {
    const result = electricBoard(amountPS);
    results.innerHTML = result;
    totalMachine.textContent = displayWords();
  } else if (listItem === "heaterPlate") {
    const result = heaterPlate(amountPS);
    results.innerHTML = result;
    totalMachine.textContent = displayWords();
  } else if (listItem === "advancedEngine") {
    const result = advancedEngine(amountPS);
    results.innerHTML = result;
    totalMachine.textContent = displayWords();
  } else if (listItem === "lazer") {
    const result = lazer(amountPS);
    results.innerHTML = result;
    totalMachine.textContent = displayWords();
  } else if (listItem === "solarPanel") {
    const result = solarPanel(amountPS);
    results.innerHTML = result;
    totalMachine.textContent = displayWords();
  } else if(listItem === "powerSupply") {
    const result = powerSupply(amountPS);
    results.innerHTML = result;
    totalMachine.textContent = displayWords();
  } else if(listItem === "fan") {
    const result = fan(amountPS);
    results.innerHTML = result;
    totalMachine.textContent = displayWords();
  } else if(listItem === "processor") {
    const result = processor(amountPS);
    results.innerHTML = result;
    totalMachine.textContent = displayWords();
  } else if(listItem === "computer") {
    const result = computer(amountPS);
    results.innerHTML = result;
    totalMachine.textContent = displayWords();
  } else if(listItem === "superComputer") {
    const result = superComputer(amountPS);
    results.innerHTML = result;
    totalMachine.textContent = displayWords();
  } else if(listItem === "aiProcessor") {
    const result = aiProcessor(amountPS);
    results.innerHTML = result;
    totalMachine.textContent = displayWords();
  } else if(listItem === "aiRobotHead") {
    const result = aiRobotHead(amountPS);
    results.innerHTML = result;
    totalMachine.textContent = displayWords();
  } else if(listItem === "electricEngine") {
    const result = electricEngine(amountPS);
    results.innerHTML = result;
    totalMachine.textContent = displayWords();
  } else if(listItem === "aiRobotArm") {
    const result = aiRobotArm(amountPS);
    results.innerHTML = result;
    totalMachine.textContent = displayWords();
  } else if(listItem === "robotBody") {
    const result = robotBody(amountPS);
    results.innerHTML = result;
    totalMachine.textContent = displayWords();
  } else if(listItem === "aiRobot") {
    const result = aiRobot(amountPS);
    results.innerHTML = result;
    totalMachine.textContent = displayWords();
  }

  function displayWords() {
    if (totalStarter > 0) {
      totalStarter = " || " + totalStarter + " Starters" + " || ";
    } else {
      totalStarter = "";
    }
    if (totalWireMaker > 0) {
      totalWireMaker += " Wire Makers" + " || ";
    } else {
      totalWireMaker = "";
    }
    if (totalCutter > 0) {
      totalCutter += " Cutters" + " || ";
    } else {
      totalCutter = "";
    }
    if (totalFurnace > 0) {
      totalFurnace += " Furnaces" + " || ";
    } else {
      totalFurnace = "";
    }
    if (totalCableMaker > 0) {
      totalCableMaker += " Cable Makers" + " || ";
    } else {
      totalCableMaker = "";
    }
    if (totalHydraulicPress > 0) {
      totalHydraulicPress += " Hydraulic Presses" + " || ";
    } else {
      totalHydraulicPress = "";
    }
    if (totalCrafterMK1 > 0) {
      totalCrafterMK1 += " Crafters MK1" + " || ";
    } else {
      totalCrafterMK1 = "";
    }
    if (totalCrafterMK2 > 0) {
      totalCrafterMK2 += " Crafters MK2" + " || ";
    } else {
      totalCrafterMK2 = "";
    }
    if (totalCrafterMK3 > 0) {
      totalCrafterMK3 += " Crafters MK3" + " || ";
    } else {
      totalCrafterMK3 = "";
    }
    return totalStarter + totalWireMaker + totalCutter + totalFurnace + totalCableMaker + totalHydraulicPress + totalCrafterMK1 + totalCrafterMK2 + totalCrafterMK3
  }

}
const totalMachine = document.getElementById("totalMachine");

const results = document.getElementById("results")

const button = document.getElementById("calculateButton");

button.addEventListener("click", calculate)

const starterLvl = document.getElementById("starterLvl");
const starterSpeed = document.getElementById("starterSpeed");
const wireMakerLvl = document.getElementById("wireMakerLvl");
const wireMakerSpeed = document.getElementById("wireMakerSpeed");
const cutterLvl = document.getElementById("cutterLvl");
const cutterSpeed = document.getElementById("cutterSpeed");
const furnaceLvl = document.getElementById("furnaceLvl");
const furnaceSpeed = document.getElementById("furnaceSpeed");
const cableMakerLvl = document.getElementById("cableMakerLvl");
const cableMakerSpeed = document.getElementById("cableMakerSpeed");
const hydraulicPressLvl = document.getElementById("hyrdaulicPressLvl");
const hyrdaulicPressSpeed = document.getElementById("hydraulicPressSpeed");
const crafterMK1Lvl = document.getElementById("crafterMK1Lvl");
const crafterMK1Speed = document.getElementById("crafterMK1Speed");
const crafterMK2Lvl = document.getElementById("crafterMK2Lvl");
const crafterMK2Speed = document.getElementById("crafterMK2Speed");
const crafterMK3Lvl = document.getElementById("crafterMK3Lvl");
const crafterMK3Speed = document.getElementById("crafterMK3Speed");

starterLvl.addEventListener("change", function () {
  showOutput(this, starterSpeed);
})
wireMakerLvl.addEventListener("change", function () {
  showOutput(this, wireMakerSpeed);
})
cutterLvl.addEventListener("change", function () {
  showOutput(this, cutterSpeed);
})
furnaceLvl.addEventListener("change", function () {
  showOutput(this, furnaceSpeed);
})
cableMakerLvl.addEventListener("change", function () {
  showOutput(this, cableMakerSpeed);
})
hydraulicPressLvl.addEventListener("change", function () {
  showOutput(this, hyrdaulicPressSpeed);
})
crafterMK1Lvl.addEventListener("change", function () {
  showOutput(this, crafterMK1Speed);
})
crafterMK2Lvl.addEventListener("change", function () {
  showOutput(this, crafterMK2Speed);
})
crafterMK3Lvl.addEventListener("change", function () {
  showOutput(this, crafterMK3Speed);
})

function showOutput(machineLevel, machineSpeedInc) {
  const levelValue = machineLevel.value;
  const machineSpeed = machineSpeedInc;

  if (levelValue === "1") {
    machineSpeed.textContent = "0.2 Items/ps";
  } else if (levelValue === "2") {
    machineSpeed.textContent = "0.25 Items/ps";
  } else if (levelValue === "3") {
    machineSpeed.textContent = "0.33 Items/ps";
  } else if (levelValue === "4") {
    machineSpeed.textContent = "0.5 Items/ps";
  } else if (levelValue === "5") {
    machineSpeed.textContent = "1 Items/ps";
  } else if (levelValue === "6") {
    machineSpeed.textContent = "1.33 Items/ps";
  } else if (levelValue === "7") {
    machineSpeed.textContent = "2 Items/ps";
  } else if (levelValue === "8") {
    machineSpeed.textContent = "4 Items/ps";
  }
}

const maxAll = document.getElementById("maxAll");
const isMaxed = document.getElementById("isMaxed");

let machineLevelArr = [starterLvl, wireMakerLvl, cutterLvl, furnaceLvl, cableMakerLvl, hydraulicPressLvl, crafterMK1Lvl, crafterMK2Lvl, crafterMK3Lvl]
let previousLevel = new Array(machineLevelArr.length);

maxAll.addEventListener("change", function () {
  if (this.checked) {
    //stores current values
    for (let i = 0; i < machineLevelArr.length; i++) {
      previousLevel[i] = machineLevelArr[i].value;
      machineLevelArr[i].value = "5";
    }
    starterLvl.value = "8"; // starters can go to level 8
    showOutput(starterLvl, starterSpeed);
    showOutput(wireMakerLvl, wireMakerSpeed);
    showOutput(cutterLvl, cutterSpeed);
    showOutput(furnaceLvl, furnaceSpeed);
    showOutput(cableMakerLvl, cableMakerSpeed);
    showOutput(hydraulicPressLvl, hyrdaulicPressSpeed);
    showOutput(crafterMK1Lvl, crafterMK1Speed);
    showOutput(crafterMK2Lvl, crafterMK2Speed);
    showOutput(crafterMK3Lvl, crafterMK3Speed);
  } else {
    for (let i = 0; i < machineLevelArr.length; i++) {
      if (previousLevel[i] !== undefined) { //checks if it had previos value
        machineLevelArr[i].value = previousLevel[i]; //reverts to it
      }
      showOutput(starterLvl, starterSpeed);
      showOutput(wireMakerLvl, wireMakerSpeed);
      showOutput(cutterLvl, cutterSpeed);
      showOutput(furnaceLvl, furnaceSpeed);
      showOutput(cableMakerLvl, cableMakerSpeed);
      showOutput(hydraulicPressLvl, hyrdaulicPressSpeed);
      showOutput(crafterMK1Lvl, crafterMK1Speed);
      showOutput(crafterMK2Lvl, crafterMK2Speed);
      showOutput(crafterMK3Lvl, crafterMK3Speed);
    }
  }
})//update the 0.2 items PS text



let metal = ["Copper", "Iron", "Gold", "Aluminium", "Diamond"];
let machine = [{
  name: "Starters",
  metalNum: 0,
  level: 1,
  amount: 0
}, {
  name: "Crafters MK1",
  level: 1
}, {
  name: "Crafters MK2",
  level: 1
}, {
  name: "Crafters MK3",
  level: 1
}, {
  name: "Wire Makers",
  level: 1,
  amount: 0
}, {
  name: "Cutters",
  level: 1
}, {
  name: "Furnaces",
  level: 1
}, {
  name: "Cable Makers",
  level: 1
}, {
  name: "Hydraulic Presses",
  level: 1
}];
let item = [{
  name: "Metal",
}, {
  name: "Wire",
}, {
  name: "Gear",
}, {
  name: "Liquid",
}, {
  name: "Plate",
}, {
  name: "Cable",
}, {
  name: "Circuit"
}, {
  name: "Server Rack"
}, {
  name: "Battery"
}, {
  name: "Engine"
}, {
  name: "Solar Cell"
}, {
  name: "Electric Board"
}, {
  name: "Heater Plate"
}, {
  name: "Advanced Engine"
}, {
  name: "Lazer"
}, {
  name: "Solar Panel"
}, {
  name: "Power Supply"
}, {
  name: "Fan"
}, {
  name: "Processor"
}, {
  name: "Computer"
}, {
  name: "Super Computer"
}, {
  name: "AI Processor"
}, {
  name: "AI Robot Head"
}, {
  name: "Electric Engine"
}, {
  name: "AI Robot Arms"
}, {
  name: "AI Robot Body"
}, {
  name: "AI Robot"
}];

let totalStarter = 0;
let totalCrafterMK1 = 0;
let totalCrafterMK2 = 0;
let totalCrafterMK3 = 0;
let totalWireMaker = 0;
let totalCutter = 0;
let totalFurnace = 0;
let totalCableMaker = 0;
let totalHydraulicPress = 0;

function levelCalc(levelValue) {
  if (levelValue == 1) {
    levelValueFound = 1 / 5;
  } else if (levelValue == 2) {
    levelValueFound = 1 / 4;
  } else if (levelValue == 3) {
    levelValueFound = 1 / 3;
  } else if (levelValue == 4) {
    levelValueFound = 1 / 2;
  } else if (levelValue == 5) {
    levelValueFound = 1;
  } else if (levelValue == 6) {
    levelValueFound = 4 / 3;
  } else if (levelValue == 7) {
    levelValueFound = 6 / 3;
  } else if (levelValue == 8) {
    levelValueFound = 12 / 3;
  }
}

function metalI(amountPS, metalIndex) {

  machine[0].metalNum = metal[metalIndex];
  levelValue = machineLevelArr[0].value
  levelCalc(levelValue);
  starterLVL = levelValueFound;
  machine[0].amount = amountPS / starterLVL;
  totalStarter += machine[0].amount;

  metalMade = machine[0].amount + " " + machine[0].name + " " + machine[0].metalNum;

  return metalMade;
}

function wire(amountPS, metalIndex) {

  levelValue = machineLevelArr[1].value
  levelCalc(levelValue);
  wireMakerLVL = levelValueFound;
  machine[4].amount = amountPS / wireMakerLVL;
  totalWireMaker += machine[4].amount;

  wireMade = metalI(amountPS, metalIndex) + " --> " + machine[4].amount + " " + machine[4].name;

  return wireMade;
}

function gear(amountPS, metalIndex) {

  levelValue = machineLevelArr[2].value
  levelCalc(levelValue);
  cutterLVL = levelValueFound;
  machine[5].amount = amountPS / cutterLVL;
  totalCutter += machine[5].amount;

  gearMade = metalI(amountPS, metalIndex) + " --> " + machine[5].amount + " " + machine[5].name;

  return gearMade;
}

function liquid(amountPS, metalIndex) {

  levelValue = machineLevelArr[3].value
  levelCalc(levelValue);
  furnaceLVL = levelValueFound;
  machine[6].amount = amountPS / furnaceLVL;
  totalFurnace += machine[6].amount;

  liquidMade = metalI(amountPS, metalIndex) + " --> " + machine[6].amount + " " + machine[6].name;

  return liquidMade;
}

function plate(amountPS, metalIndex) {

  levelValue = machineLevelArr[5].value
  levelCalc(levelValue);
  hydraulicPressLVL = levelValueFound;
  machine[8].amount = amountPS / hydraulicPressLVL;
  totalHydraulicPress += machine[8].amount;

  plateMade = metalI(amountPS, metalIndex) + " --> " + machine[8].amount + " " + machine[8].name;

  return plateMade;
}

function cable(amountPS, metalIndex) {

  levelValue = machineLevelArr[4].value
  levelCalc(levelValue);
  cableMakerLVL = levelValueFound;
  machine[7].amount = amountPS / cableMakerLVL;
  totalCableMaker += machine[7].amount;

  cableMade = wire(amountPS * 3, metalIndex) + " --> " + " " + machine[7].amount + " " + machine[7].name;

  return cableMade
}

function circuit(amountPS) {

  levelValue = machineLevelArr[6].value
  levelCalc(levelValue);
  crafterMK1LVL = levelValueFound;
  machine[1].amount = amountPS / crafterMK1LVL;
  totalCrafterMK1 += machine[1].amount;

  circuitMade = metalI(amountPS, 2) + "<br>" + wire(amountPS, 0) + " --> " + machine[1].amount + " " + machine[1].name + "~Circuit";

  return circuitMade;
}

function serverRack(amountPS) {

  levelValue = machineLevelArr[6].value
  levelCalc(levelValue);
  crafterMK1LVL = levelValueFound;
  machine[1].amount = amountPS / crafterMK1LVL;
  totalCrafterMK1 += machine[1].amount;

  serverRackMade = metalI(amountPS, 1) + " & " + metalI(amountPS, 3) + " --> " + machine[1].amount + " " + machine[1].name + "~Server Rack";

  return serverRackMade;
}

function battery(amountPS) {

  levelValue = machineLevelArr[6].value
  levelCalc(levelValue);
  crafterMK1LVL = levelValueFound;
  machine[1].amount = amountPS / crafterMK1LVL;
  totalCrafterMK1 += machine[1].amount;

  batteryMade = metalI(amountPS, 0) + "<br>" + liquid(amountPS, 0) + " --> " + machine[1].amount + " " + machine[1].name + "~Battery";

  return batteryMade
}

function engine(amountPS) {

  levelValue = machineLevelArr[6].value
  levelCalc(levelValue);
  crafterMK1LVL = levelValueFound;
  machine[1].amount = amountPS / crafterMK1LVL;
  totalCrafterMK1 += machine[1].amount;

  engineMade = metalI(amountPS, 1) + "<br>" + gear(amountPS, 1) + " --> " + machine[1].amount + " " + machine[1].name + "~Engine"
}
function solarCell(amountPS) {

  levelValue = machineLevelArr[6].value
  levelCalc(levelValue);
  crafterMK1LVL = levelValueFound;
  machine[1].amount = amountPS / crafterMK1LVL;
  totalCrafterMK1 += machine[1].amount;

  solarCellMade = metalI(amountPS, 2) + "<br>" + liquid(amountPS, 4) + " --> " + machine[1].amount + " " + machine[1].name + "~Solar Cell";

  return solarCellMade;
}

function electricBoard(amountPS) {

  levelValue = machineLevelArr[6].value
  levelCalc(levelValue);
  crafterMK1LVL = levelValueFound;
  machine[1].amount = amountPS / crafterMK1LVL;
  totalCrafterMK1 += machine[1].amount;

  electricBoardMade = metalI(amountPS, 3) + "<br>" + wire(amountPS, 0) + " --> " + machine[1].amount + " " + machine[1].name + "~Electric Board";

  return electricBoardMade;
}

function heaterPlate(amountPS) {

  levelValue = machineLevelArr[6].value
  levelCalc(levelValue);
  crafterMK1LVL = levelValueFound;
  machine[1].amount = amountPS / crafterMK1LVL;
  totalCrafterMK1 += machine[1].amount;

  heaterPlateMade = metalI(amountPS, 3) + "<br>" + wire(amountPS, 1) + " --> " + machine[1].amount + " " + machine[1].name + "~Heater Plate";

  return heaterPlateMade;
}

function advancedEngine(amountPS) {

  levelValue = machineLevelArr[7].value
  levelCalc(levelValue);
  crafterMK2LVL = levelValueFound;
  machine[2].amount = amountPS / crafterMK2LVL;
  totalCrafterMK2 += machine[2].amount;

  advancedEngineMade = metalI(amountPS * 10, 4) + "<br>" + circuit(amountPS * 5) + "<br>" + engine(amountPS * 5) + " --> " + machine[2].amount + " " + machine[2].name + "~Advanced Engine";

  return advancedEngineMade;
}

function lazer(amountPS) {

  levelValue = machineLevelArr[7].value
  levelCalc(levelValue);
  crafterMK2LVL = levelValueFound;
  machine[2].amount = amountPS / crafterMK2LVL;
  totalCrafterMK2 += machine[2].amount;

  lazerMade = liquid(amountPS * 5, 1) + "<br>" + battery(amountPS * 5) + "<br>" + heaterPlate(amountPS * 5) + " --> " + machine[2].amount + " " + machine[2].name + "~Lazer";

  return lazerMade;
}

function solarPanel(amountPS) {

  levelValue = machineLevelArr[7].value
  levelCalc(levelValue);
  crafterMK2LVL = levelValueFound;
  machine[2].amount = amountPS / crafterMK2LVL;
  totalCrafterMK2 += machine[2].amount;

  solarPanelMade = solarCell(amountPS * 2) + "<br>" + circuit(amountPS) + "<br>" + electricBoard(amountPS * 2) + " --> " + machine[2].amount + " " + machine[2].name + "~Solar Panel";

  return solarPanelMade;
}

function powerSupply(amountPS) {

  levelValue = machineLevelArr[7].value
  levelCalc(levelValue);
  crafterMK2LVL = levelValueFound;
  machine[2].amount = amountPS / crafterMK2LVL;
  totalCrafterMK2 += machine[2].amount;

  powerSupplyMade = metalI(amountPS * 6, 4) + "<br>" + liquid(amountPS * 3, 3) + "<br>" + circuit(amountPS) + " --> " + machine[2].amount + " " + machine[2].name + "~Power Supply";

  return powerSupplyMade;
}

function fan(amountPS) {

  levelValue = machineLevelArr[7].value
  levelCalc(levelValue);
  crafterMK2LVL = levelValueFound;
  machine[2].amount = amountPS / crafterMK2LVL;
  totalCrafterMK2 += machine[2].amount;

  fanMade = metalI(amountPS * 6, 3) + "<br>" + gear(amountPS * 3, 4) + "<br>" + circuit(amountPS) + " --> " + machine[2].amount + " " + machine[2].name + "~Fan";

  return fanMade;
}

function processor(amountPS) {

  levelValue = machineLevelArr[7].value
  levelCalc(levelValue);
  crafterMK2LVL = levelValueFound;
  machine[2].amount = amountPS / crafterMK2LVL;
  totalCrafterMK2 += machine[2].amount;

  processorMade = liquid(amountPS * 3, 2) + "<br>" + wire(amountPS * 3, 4) + "<br>" + circuit(amountPS) + " --> " + machine[2].amount + " " + machine[2].name + "~Processor";

  return processorMade;
}

function computer(amountPS) {

  levelValue = machineLevelArr[7].value
  levelCalc(levelValue);
  crafterMK2LVL = levelValueFound;
  machine[2].amount = amountPS / crafterMK2LVL;
  totalCrafterMK2 += machine[2].amount;

  computerMade = powerSupply(amountPS) + "<br>" + fan(amountPS) + "<br>" + processor(amountPS) + " --> " + machine[2].amount + " " + machine[2].name + "~Computer";

  return computerMade;
}

function superComputer(amountPS) {
  levelValue = machineLevelArr[8].value
  levelCalc(levelValue);
  crafterMK3LVL = levelValueFound;
  machine[3].amount = amountPS / crafterMK3LVL;
  totalCrafterMK3 += machine[3].amount;

  superComputerMade = cable(amountPS * 3, 2) + "<br>" + computer(amountPS * 2) + "<br>" + serverRack(amountPS) + "<br>" + circuit(amountPS * 3) + " --> " + machine[3].amount + " " + machine[3].name + "~Super Computer";

  return superComputerMade;
}

function aiProcessor(amountPS) {

  levelValue = machineLevelArr[8].value
  levelCalc(levelValue);
  crafterMK3LVL = levelValueFound;
  machine[3].amount = amountPS / crafterMK3LVL;
  totalCrafterMK3 += machine[3].amount;

  aiProcessorMade = circuit(amountPS * 10) + "<br>" + cable(amountPS * 4, 0) + "<br>" + plate(amountPS * 6, 0) + "<br>" + superComputer(amountPS) + " --> " + machine[3].amount + " " + machine[3].name + "~AI Processor";

  return aiProcessorMade;
}

function aiRobotHead(amountPS) {

  levelValue = machineLevelArr[8].value
  levelCalc(levelValue);
  crafterMK3LVL = levelValueFound;
  machine[3].amount = amountPS / crafterMK3LVL;
  totalCrafterMK3 += machine[3].amount;

  aiRobotHeadMade = cable(amountPS * 10, 4) + "<br>" + plate(amountPS * 5, 2) + "<br>" + aiProcessor(amountPS) + "<br>" + circuit(amountPS * 10) + " --> " + machine[3].amount + " " + machine[3].name + "~AI Robot Head";

  return aiRobotHeadMade;
}

function electricEngine(amountPS) {

  levelValue = machineLevelArr[8].value
  levelCalc(levelValue);
  crafterMK3LVL = levelValueFound;
  machine[3].amount = amountPS / crafterMK3LVL;
  totalCrafterMK3 += machine[3].amount;

  electricEngineMade = plate(amountPS * 5, 1) + "<br>" + electricBoard(amountPS * 2) + "<br>" + advancedEngine(amountPS * 2) + "<br>" + battery(amountPS * 2) + " --> " + machine[3].amount + " " + machine[3].name + "~Electric Engine";

  return electricEngineMade;
}

function aiRobotArm(amountPS) {

  levelValue = machineLevelArr[8].value
  levelCalc(levelValue);
  crafterMK3LVL = levelValueFound;
  machine[3].amount = amountPS / crafterMK3LVL;
  totalCrafterMK3 += machine[3].amount;

  aiRobotArmMade = metalI(amountPS * 8, 1) + "<br>" + cable(amountPS * 3, 3) + "<br>" + plate(amountPS * 2, 3) + "<br>" + lazer(amountPS * 2) + " --> " + machine[3].amount + " " + machine[3].name + "~AI Robot Arm";

  return aiRobotArmMade;
}

function aiRobotBody(amountPS) {

  levelValue = machineLevelArr[8].value
  levelCalc(levelValue);
  crafterMK3LVL = levelValueFound;
  machine[3].amount = amountPS / crafterMK3LVL;
  totalCrafterMK3 += machine[3].amount;

  aiRobotBodyMade = electricBoard(amountPS * 5) + "<br>" + aiRobotArm(amountPS) + "<br>" + solarPanel(amountPS * 2) + "<br>" + electricEngine(amountPS) + " --> " + machine[3].amount + " " + machine[3].name + "~AI Robot Body";

  return aiRobotBodyMade;
}

function aiRobot(amountPS) {

  levelValue = machineLevelArr[8].value
  levelCalc(levelValue);
  crafterMK3LVL = levelValueFound;
  machine[3].amount = amountPS / crafterMK3LVL;
  totalCrafterMK3 += machine[3].amount;

  aiRobotMade = cable(amountPS * 5, 4) + "<br>" + plate(amountPS * 10, 1) + "<br>" + aiRobotHead(amountPS) + "<br>" + aiRobotBody(amountPS) + " --> " + machine[3].amount + " " + machine[3].name + "~AI Robot";

  return aiRobotMade;
}