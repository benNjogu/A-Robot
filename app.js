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
