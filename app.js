/**
 * An automation.
 * a little program that perfoms a task in a virtual world.
 * a mail-delivery robot picking up and dropping off parcels.
 */

const roads = [
  "Alice's House-Bob's House",
  "Alice's House-Cabin",
  "Alice's House-Post Office",
  "Bob's House-Town Hall",
  "Daria's House-Ernie's House",
  "Daria's House-Town Hall",
  "Ernie's House-Grete's House",
  "Grete's House-Farm",
  "Grete's House-Shop",
  "Marketplace-Farm",
  "Marketplace-Post Office",
  "Marketplace-Shop",
  "Marketplace-Town Hall",
  "Shop-Town Hall",
];
//The n/w of roads in Meadowfield form a graph.
//A graph is a collection of points(places in the village) with lines between them(roads).

function buildGraph(edges) {
  let graph = Object.create(null); //Creates an object with no prototype.
  function addEdge(from, to) {
    if (graph[from] == null) {
      graph[from] = [to];
    } else {
      graph[from].push(to);
    }
  }

  for (let [from, to] of edges.map((r) => r.split("-"))) {
    addEdge(from, to);
    addEdge(to, from);
  }

  return graph;
}

const roadGraph = buildGraph(roads);
console.log(roadGraph);

class VillageState {
  constructor(place, parcels) {
    this.place = place;
    this.parcels = parcels;
  }

  move(destination) {
    if (!roadGraph[this.place].includes(destination)) {
      return this;
    } else {
      let parcels = this.parcels
        .map((p) => {
          if (p.place != this.place) return p;
          return { place: destination, address: p.address };
        })
        .filter((p) => p.place != p.address);

      return new VillageState(destination, parcels);
    }
  }
}

let first = new VillageState("Post Office", [
  { place: "Post Office", address: "Alice's House" },
]);
let next = first.move("Alice's House");

console.log(next.place); //-> Alice's House
console.log(next.parcels); //-> []
console.log(first.place);//-> Post Office

let object = Object.freeze({ value: 5 });
object.value = 10;
console.log(object.value);//-> 5
/**
 * Object.freeze as used above changes an object so that writing to its properties is ignored.
 * It helps one to understand his/her programs.
 * Its all about complexity management.
 */
