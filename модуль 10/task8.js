let myMap = new Map ();

myMap.set("key1", "value1");
myMap.set("key2", "value2");
myMap.set("key3", "value3");

for (let name of myMap.keys()) {
    console.log(name)
}

for (let name of myMap.values()) {
    console.log(name)
}