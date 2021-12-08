class Ship {
    constructor(name) {
        this.name = name;
    }
}
class Port {
    constructor(name) {
        this.piers = []
       
        this.name = name;
    }
}

class Pier {
    constructor(name) {
        this.name = name;
        this.ships=[];
        
    }
}
var ships = []
var ports = []
var piers = []


/* a */
function addShip(name){
    ships.push(new Ship(name))
}

/* b */
function editShip(ships, index, newName ){
    ships[index].name = newName
   
}

/* c */
function removeShip(ships, index){
    ships.splice(index,1);
}

/* d */
function searchShip(ships, name){
    for (var i = 0; i < ships.length; i++){
        if (ships[i].name === name){
            return ships[i]
        }
    }
}
function addPort(name){
    ports.push(new Port(name))
}

/* b */
function editPort(ports, index, newName ){
    ports[index].name = newName
   
}

/* c */
function removePort(ports, index){
    ports.splice(index,1);
}

/* d */
function searchPort(ports, name){
    for (var i = 0; i < ports.length; i++){
        if (ports[i].name === name){
            return ports[i]
        }
    }
}
function addPiertoPort(port,pier_n){

    port.piers.push(new Pier(pier_n));
}
function removePierfromPort(port, index){
    port.piers.splice(index,1);
}
function addShiptoPier(pier,ship){

    pier.ships.push(ship);
}
function removeShipfromPier(pier, index){
    pier.ships.splice(index,1);
}
function allShips(ships){
    for (var i = 0; i < ships.length; i++){
        console.log('\t' + ships[i].name)
    }
    
}
addShip('S1');
addShip('S2');
addShip('S3');
addShip('S4');
console.log(ships);
editShip(ships,0,'M1');
console.log(ships);
removeShip(ships,3);
console.log(ships);
console.log(searchShip(ships,'S2'));
addPort('P1');
addPort('P2');
addPort('P3');
addPort('P4');
console.log(ports);
editPort(ports,2,'P4')
console.log(ports);
removePort(ports,3);
console.log(ports);
console.log(searchPort(ports,'P1'))

 
addPiertoPort(ports[1],'pierA');
addPiertoPort(ports[1],'pier B');
addPiertoPort(ports[0],'pier N');
addPiertoPort(ports[2],'pier L');
console.log(searchPort(ports,'P1'))
removePierfromPort(ports[1],1);
addShiptoPier(ports[0].piers[0],ships[0]);
addShiptoPier(ports[0].piers[0],ships[1]);
console.log('\n');
console.log(ports[0].piers[0]);
console.log(ports[1].piers[0]);
console.log(ports[2].piers[0]);
console.log('\n');
allShips(ships)

