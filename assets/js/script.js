const XLSX = require('xlsx');
const fs = require('fs');

const filePath = 'C:/Users/alexa/Documents/Projects/Assembly Line/Assembly-Line-2-Calc/Assembly-Database.xlsx';

let colArray = Array.from({ length: 26 }, (_, i) => String.fromCharCode(65 + i));
let rowArray = Array.from({ length: 1000 }, (_, i) => i + 1);
let colRow = colArray[0] + rowArray[0];

function readExcelFile(filePath, colRow) {
  const workbook = XLSX.readFile(filePath);

  const sheetName = 'checks';
  const worksheet = workbook.Sheets[sheetName];

  const cell = worksheet[colRow];

  return cell.v;
}

let amountPS = 1;
let make;

let metal = ["Copper", "Iron", "Gold", "Aluminium", "Diamond"];
let machine = [{
  name: "Starter",
  metalNum: 0,
  level: 1,
  amount: 0
}, {
  name: "Crafter MK1",
  level: 1
}, {
  name: "Crafter MK2",
  level: 1
}, {
  name: "Crafter MK3",
  level: 1
}, {
  name: "Wire Maker",
  level: 1,
  amount: 0
}, {
  name: "Cutter",
  level: 1
}, {
  name: "Furnace",
  level: 1
}, {
  name: "Cable Maker",
  level: 1
}, {
  name: "Hydraulic Press",
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

colRow = "C" + [0];

for (let i = 0; i <= 8; i++) {
  colRow = "C" + [i + 2];
  if (readExcelFile(filePath, colRow) !== 1) {
    machine[i].level = readExcelFile(filePath, colRow);
  }

}
//REFERENCE TEST CELLS
colRow = "P" + [2];
amountPS = readExcelFile(filePath, colRow);
colRow = "O" + [2];
make = item[readExcelFile(filePath, colRow)].name;
let colValue = readExcelFile(filePath, colRow);

//ITEM & TYPE IS SET
let index = 1;
let metalIndex = 4; // make if statement for certain items need type specified

if(machine[0].level == 1) {
  machine[0].level = 1 ;
} else if(machine[0].level == 2) {
  machine[0].level = 5/4;
} else if(machine[0].level == 3) {
  machine[0].level = 5/3;
} else if(machine[0].level == 4) {
  machine[0].level = 5/2;
} else if(machine[0].level == 5) {
  machine[0].level = 5;
} else if(machine[0].level == 6) {
  machine[0].level = 20/3;
} else if(machine[0].level == 7) {
  machine[0].level = 10;
} else if(machine[0].level == 8) {
  machine[0].level = 20;
}

let starterLVL = machine[0].level;
let crafterMK1LVL = machine[1].level;
let crafterMK2LVL = machine[2].level;
let crafterMK3LVL = machine[3].level;
let wireMakerLVL = machine[4].level;
let cutterLVL = machine[5].level;
let furnaceLVL = machine[6].level;
let cableMakerLVL = machine[7].level;
let hydraulicPressLVL = machine[8].level;

let totalStarter = {
  amount: 0,
  copper: 0,
  iron: 0,
  gold: 0,
  aluminium: 0,
  diamond: 0,
}
let totalCrafterMK1 = 0;
let totalCrafterMK2 = 0;
let totalCrafterMK3 = 0;
let totalWireMaker = 0;
let totalCutter = 0;
let totalFurnace = 0;
let totalCableMaker = 0;
let totalHydraulicPress = 0;

function needsType() {
  if (readExcelFile(filePath, colRow) >= 0 && readExcelFile(filePath, colRow) <= 5) {
    colRow = "N" + [2];
    metalIndex = metal[readExcelFile(filePath, colRow)];
    return metalIndex;
  } else {
    return "";
  }
}

function metalI(amountPS, metalIndex) {

  machine[0].metalNum = metal[metalIndex];
  machine[0].amount = amountPS / starterLVL;
  
  if(metalIndex == 0) {
    totalStarter.amount += machine[0].amount;
    totalStarter.copper += machine[0].amount;
  } else if (metalIndex == 1) {
    totalStarter.amount += machine[0].amount;
    totalStarter.iron += machine[0].amount;
  } else if (metalIndex == 2) {
    totalStarter.amount += machine[0].amount;
    totalStarter.gold += machine[0].amount;
  } else if (metalIndex == 3) {
    totalStarter.amount += machine[0].amount;
    totalStarter.aluminium += machine[0].amount;
  } else if (metalIndex == 4) {
    totalStarter.amount += machine[0].amount;
    totalStarter.diamond += machine[0].amount;
  }

  metalMade = machine[0].amount + " " + machine[0].name + " " + machine[0].metalNum;

  return metalMade;
}

function wire(amountPS, metalIndex) {

  machine[4].amount = amountPS / wireMakerLVL;
  totalWireMaker += machine[4].amount;

  wireMade = metalI(amountPS, metalIndex) + " --> " + machine[4].amount + " " + machine[4].name;

  return wireMade;
}

function gear(amountPS, metalIndex) {

  machine[5].amount = amountPS / cutterLVL;
  totalCutter += machine[5].amount;

  gearMade = metalI(amountPS, metalIndex) + " --> " + machine[5].amount + " " + machine[5].name;

  return gearMade;
}

function liquid(amountPS, metalIndex) {

  machine[6].amount = amountPS / furnaceLVL;
  totalFurnace += machine[6].amount;

  liquidMade = metalI(amountPS, metalIndex) + " --> " + machine[6].amount + " " + machine[6].name;

  return liquidMade;
}

function plate(amountPS, metalIndex) {

  machine[8].amount = amountPS / hydraulicPressLVL;
  totalHydraulicPress += machine[8].amount;

  plateMade = metalI(amountPS, metalIndex) + " --> " + machine[8].amount + " " + machine[8].name;

  return plateMade;
}

function cable(amountPS, metalIndex) {

  machine[7].amount = amountPS / cableMakerLVL;
  totalCableMaker += machine[7].amount;

  cableMade = wire(amountPS * 3, metalIndex) + " --> " + " " + machine[7].amount + " " + machine[7].name;

  return cableMade
}

function circuit(amountPS) {

  machine[1].amount = amountPS / crafterMK1LVL;
  totalCrafterMK1 += machine[1].amount;

  circuitMade = metalI(amountPS, 2) + "\n" + wire(amountPS, 0) + " --> " + machine[1].amount + " " + machine[1].name;

  return circuitMade;
}

function serverRack(amountPS) {

  machine[1].amount = amountPS / crafterMK1LVL;
  totalCrafterMK1 += machine[1].amount;

  serverRackMade = metalI(amountPS, 1) + " & " + metalI(amountPS, 3) + " --> " + machine[1].amount + " " + machine[1].name;

  return serverRackMade;
}

function battery(amountPS) {

  machine[1].amount = amountPS / crafterMK1LVL;
  totalCrafterMK1 += machine[1].amount;

  batteryMade = metalI(amountPS, 0) + "\n" + liquid(amountPS, 0) + " --> " + machine[1].amount + " " + machine[1].name;

  return batteryMade
}

function engine(amountPS) {

  machine[1].amount = amountPS / crafterMK1LVL;
  totalCrafterMK1 += machine[1].amount;

  engineMade = metalI(amountPS, 1) + "\n" + gear(amountPS, 1) + " --> " + machine[1].amount + " " + machine[1].name;

  return engineMade;
}

function solarCell(amountPS) {

  machine[1].amount = amountPS / crafterMK1LVL;
  totalCrafterMK1 += machine[1].amount;

  solarCellMade = metalI(amountPS, 2) + "\n" + liquid(amountPS, 4) + " --> " + machine[1].amount + " " + machine[1].name;

  return solarCellMade;
}

function electricBoard(amountPS) {

  machine[1].amount = amountPS / crafterMK1LVL;
  totalCrafterMK1 += machine[1].amount;

  electricBoardMade = metalI(amountPS, 3) + "\n" +  wire(amountPS, 0) + " --> " + machine[1].amount + " " + machine[1].name;

  return electricBoardMade;
}

function heaterPlate(amountPS) {

  machine[1].amount = amountPS / crafterMK1LVL;
  totalCrafterMK1 += machine[1].amount;

  heaterPlateMade = metalI(amountPS, 3) + "\n" + wire(amountPS, 1) + " --> " + machine[1].amount + " " + machine[1].name;

  return heaterPlateMade;
}

function advancedEngine(amountPS) {

  machine[2].amount = amountPS / crafterMK2LVL;
  totalCrafterMK2 += machine[2].amount;

  advancedEngineMade = metalI(amountPS * 10, 4) + "\n" + circuit(amountPS * 5) + "\n" + engine(amountPS * 5) + " --> " + machine[2].amount + " " + machine[2].name;

  return advancedEngineMade;
}

function lazer(amountPS) {

  machine[2].amount = amountPS / crafterMK2LVL;
  totalCrafterMK2 += machine[2].amount;

  lazerMade = liquid(amountPS * 5, 1) + "\n" + battery(amountPS * 5) + "\n" + heaterPlate(amountPS * 5) + " --> " + machine[2].amount + " " + machine[2].name;

  return lazerMade;
}

function solarPanel(amountPS) {

  machine[2].amount = amountPS / crafterMK2LVL;
  totalCrafterMK2 += machine[2].amount;

  solarPanelMade = solarCell(amountPS * 2) + "\n" + circuit(amountPS) + "\n" + electricBoard(amountPS * 2) + " --> " + machine[2].amount + " " + machine[2].name;

  return solarPanelMade;
}

function powerSupply(amountPS) {

  machine[2].amount = amountPS / crafterMK2LVL;
  totalCrafterMK2 += machine[2].amount;

  powerSupplyMade = metalI(amountPS * 6, 4) + "\n" + liquid(amountPS * 3, 3) + "\n" + circuit(amountPS) + " --> " + machine[2].amount + " " + machine[2].name;

  return powerSupplyMade;
}

function fan(amountPS) {

  machine[2].amount = amountPS / crafterMK2LVL;
  totalCrafterMK2 += machine[2].amount;

  fanMade = metalI(amountPS * 6, 3) + "\n" + gear(amountPS * 3, 4) + "\n" + circuit(amountPS) + " --> " + machine[2].amount + " " + machine[2].name;

  return fanMade;
}

function processor(amountPS) {

  machine[2].amount = amountPS / crafterMK2LVL;
  totalCrafterMK2 += machine[2].amount;

  processorMade = liquid(amountPS * 3, 2) + "\n" + wire(amountPS * 3, 4) + "\n" + circuit(amountPS) + " --> " + machine[2].amount + " " + machine[2].name;

  return processorMade;
}

function computer(amountPS) {

  machine[2].amount = amountPS / crafterMK2LVL;
  totalCrafterMK2 += machine[2].amount;

  computerMade = powerSupply(amountPS) + "\n" + fan(amountPS) + "\n" + processor(amountPS) + " --> " + machine[2].amount + " " + machine[2].name;

  return computerMade;
}

function superComputer(amountPS) {

  machine[3].amount = amountPS / crafterMK3LVL;
  totalCrafterMK3 += machine[3].amount;

  superComputerMade = cable(amountPS * 3, 2) + "\n" + computer(amountPS * 2) + "\n" + serverRack(amountPS) + "\n" + circuit(amountPS * 3) + " --> " + machine[3].amount + " " + machine[3].name;

  return superComputerMade;
}

function aiProcessor(amountPS) {

  machine[3].amount = amountPS / crafterMK3LVL;
  totalCrafterMK3 += machine[3].amount;

  aiProcessorMade = circuit(amountPS * 10) + "\n" + cable(amountPS * 4, 0) + "\n" + plate(amountPS * 6, 0) + "\n" + superComputer(amountPS)  + " --> " + machine[3].amount + " " + machine[3].name;

  return aiProcessorMade;
}

function aiRobotHead(amountPS) {

  machine[3].amount = amountPS / crafterMK3LVL;
  totalCrafterMK3 += machine[3].amount;

  aiRobotHeadMade = cable(amountPS * 10, 4) + "\n" + plate(amountPS * 5, 2) + "\n" + aiProcessor(amountPS) + "\n" + circuit(amountPS * 10) + " --> " + machine[3].amount + " " + machine[3].name;

  return aiRobotHeadMade;
}

function electricEngine(amountPS) {

  machine[3].amount = amountPS / crafterMK3LVL;
  totalCrafterMK3 += machine[3].amount;

  electricEngineMade = plate(amountPS * 5, 1) + "\n" + electricBoard(amountPS * 2) + "\n" + advancedEngine(amountPS * 2) + "\n" + battery(amountPS * 2) + " --> " + machine[3].amount + " " + machine[3].name;

  return electricEngineMade;
}

function aiRobotArm(amountPS) {

  machine[3].amount = amountPS / crafterMK3LVL;
  totalCrafterMK3 += machine[3].amount;

  aiRobotArmMade = metalI(amountPS * 8, 1) + "\n" + cable(amountPS * 3, 3) + "\n" + plate(amountPS * 2, 3) + "\n" + lazer(amountPS * 2) + " --> " + machine[3].amount + " " + machine[3].name;

  return aiRobotArmMade;
}

function aiRobotBody(amountPS) {

  machine[3].amount = amountPS / crafterMK3LVL;
  totalCrafterMK3 += machine[3].amount;

  aiRobotBodyMade = electricBoard(amountPS * 5) + "\n" + aiRobotArm(amountPS) + "\n" + solarPanel(amountPS * 2) + "\n" + electricEngine(amountPS) + " --> " + machine[3].amount + " " + machine[3].name;

  return aiRobotBodyMade;
}

function aiRobot(amountPS) {

  machine[3].amount = amountPS / crafterMK3LVL;
  totalCrafterMK3 += machine[3].amount;

  aiRobotMade = cable(amountPS * 5, 4) + "\n" + plate(amountPS * 10, 1) + "\n" + aiRobotHead(amountPS) + "\n" + aiRobotBody(amountPS) + " --> " + machine[3].amount + " " + machine[3].name;

  return aiRobotMade;
}

//WHAT YOU WANT (with the checker for type required)
console.log("You want " + amountPS + " " + make + " " + needsType());
//WHAT YOU NEED
if (colValue == 0) {

  metalIndex = readExcelFile(filePath, colRow);
  console.log(metalI(amountPS, metalIndex));
  console.log("L> " + amountPS + " " + item[0].name);  

} else if (colValue == 1) {

  metalIndex = readExcelFile(filePath, colRow);
  console.log(wire(amountPS, metalIndex));
  console.log("L> " + amountPS + " " + item[1].name + " " + metal[metalIndex]);  

} else if (colValue == 2) {

  metalIndex = readExcelFile(filePath, colRow);
  console.log(gear(amountPS, metalIndex));
  console.log("L> " + amountPS + " " + item[2].name + " " + metal[metalIndex]);

} else if (colValue == 3) {

  metalIndex = readExcelFile(filePath, colRow);
  console.log(liquid(amountPS, metalIndex));
  console.log("L> " + amountPS + " " + item[3].name + " " + metal[metalIndex]);

} else if (colValue == 4) {

  metalIndex = readExcelFile(filePath, colRow);
  console.log(plate(amountPS, metalIndex));
  console.log("L> " + amountPS + " " + item[4].name + " " + metal[metalIndex]);

} else if (colValue == 5) {

  metalIndex = readExcelFile(filePath, colRow);
  console.log(cable(amountPS, metalIndex));
  console.log("L> " + amountPS + " " + item[5].name + " " + metal[metalIndex]);

} else if (colValue == 6) {

  console.log(circuit(amountPS));
  console.log("L> " + amountPS + " " + item[6].name);

} else if (colValue == 7) {

  console.log(serverRack(amountPS));
  console.log("L> " + amountPS + " " + item[7].name);

} else if (colValue == 8) {

  console.log(battery(amountPS));
  console.log("L> " + amountPS + " " + item[8].name);

} else if (colValue == 9) {

  console.log(engine(amountPS));
  console.log("L> " + amountPS + " " + item[9].name);

} else if (colValue == 10) {

  console.log(solarCell(amountPS));
  console.log("L> " + amountPS + " " + item[10].name);

} else if (colValue == 11) {

  console.log(electricBoard(amountPS));
  console.log("L> " + amountPS + " " + item[11].name);

} else if (colValue == 12) {

  console.log(heaterPlate(amountPS));
  console.log("L> " + amountPS + " " + item[12].name);

} else if (colValue == 13) {

  console.log(advancedEngine(amountPS));
  console.log("L> " + amountPS + " " + item[13].name);

} else if (colValue == 14) {

  console.log(lazer(amountPS));
  console.log("L> " + amountPS + " " + item[14].name);

} else if (colValue == 15) {

  console.log(solarPanel(amountPS));
  console.log("L> " + amountPS + " " + item[15].name);

} else if (colValue == 16) {

  console.log(powerSupply(amountPS));
  console.log("L> " + amountPS + " " + item[16].name);

} else if (colValue == 17) {

  console.log(fan(amountPS));
  console.log("L> " + amountPS + " " + item[17].name);

} else if (colValue == 18) {

  console.log(processor(amountPS));
  console.log("L> " + amountPS + " " + item[18].name);

} else if (colValue == 19) {

  console.log(computer(amountPS));
  console.log("L> " + amountPS + " " + item[19].name);

} else if (colValue == 20) {

  console.log(superComputer(amountPS));
  console.log("L> " + amountPS + " " + item[20].name);

} else if (colValue == 21) {

  console.log(aiProcessor(amountPS));
  console.log("L> " + amountPS + " " + item[21].name);

} else if (colValue == 22) {

  console.log(aiRobotHead(amountPS));
  console.log("L> " + amountPS + " " + item[22].name);

} else if (colValue == 23) {

  console.log(electricEngine(amountPS));
  console.log("L> " + amountPS + " " + item[23].name);

} else if (colValue == 24) {

  console.log(aiRobotArm(amountPS));
  console.log("L> " + amountPS + " " + item[24].name);

} else if (colValue == 25) {

  console.log(aiRobotBody(amountPS));
  console.log("L> " + amountPS + " " + item[25].name);

} else if (colValue == 26) {

  console.log(aiRobot(amountPS));
  console.log("L> " + amountPS + " " + item[26].name);

}

totalStarter.amount += " Starters";
totalCrafterMK1 += " CraftersMK1";
totalCrafterMK2 +=" CrafterMK2";
totalCrafterMK3 += " CraftersMK3";
totalWireMaker += " Wire Makers";
totalCutter += " Cutters";
totalFurnace += " Furnaces";
totalCableMaker += " Cable Makers";
totalHydraulicPress += " Hyrdaulic Presses";

console.log("\n" + totalStarter.amount);
if(totalStarter.copper !== 0) {
  console.log(totalStarter.copper + " Copper Starters")
}
if(totalStarter.iron !== 0) {
  console.log(totalStarter.iron + " Iron Starters")
}
if(totalStarter.gold !== 0) {
  console.log(totalStarter.gold + " Gold Starters")
}
if(totalStarter.aluminium !== 0) {
  console.log(totalStarter.aluminium + " Aluminium Starters")
}
if(totalStarter.diamond !== 0) {
  console.log(totalStarter.diamond + " Diamond Starters")
}
console.log(totalCrafterMK1);
console.log(totalCrafterMK2);
console.log(totalCrafterMK3);
console.log(totalWireMaker);
console.log(totalCutter);
console.log(totalFurnace);
console.log(totalCableMaker);
console.log(totalHydraulicPress);