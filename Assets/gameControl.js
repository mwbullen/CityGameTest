#pragma strict

public var car:GameObject;

public var carCount:int;

public var carSpawnInterval:float;

private var timeSinceLastCar:float;

private var roads:GameObject[];

function Start () {
 roads = GameObject.FindGameObjectsWithTag("Road");

	
	/*
	for (var i = 0; i < carCount; i++) {
			}	
	*/
}

function spawnCar() {
	Instantiate(car, roads[Random.Range(0, roads.length)].transform.position,  roads[Random.Range(0, roads.length)].transform.rotation);
			
}

function Update () {
timeSinceLastCar += Time.deltaTime;
	
	if (timeSinceLastCar >= carSpawnInterval) {
		var currentCars:GameObject[] = GameObject.FindGameObjectsWithTag("Car");
		
		Debug.Log(currentCars.Length);
		if (currentCars.Length < carCount) {
			spawnCar();
			timeSinceLastCar = 0;
		}
	}
}