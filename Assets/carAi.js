#pragma strict

	public var navMeshAgent:NavMeshAgent ;
	private var currentDestination:GameObject;
	
function Start () {

		navMeshAgent = gameObject.GetComponent(NavMeshAgent);

		setDestination( getRandomDestination());


		//Debug.Log (navMeshAgent.destination);
}

function Update () {
	if (navMeshAgent.remainingDistance < 1) {
			//GameObject[] nextStops = currentDestination.GetComponent<intersectionStopAi>().nextStops;

			//setDestination(nextStops[Random.Range (0, nextStops.Length)]);
			
			var currentDestAi = currentDestination.GetComponent(intersectionStopAi);
			
			var nextStops:GameObject[] = currentDestAi.nextStops;
			
			if (nextStops.Length > 0 ) {
				setDestination(nextStops[Random.Range(0, nextStops.Length)]);
				
			} else {
			
			var intersection: GameObject = currentDestAi.Intersection;
			
			if (intersection != null) {
				navigateIntersection(intersection);
			 }
			 }
			//get random input from Intersection road_inputs

		}
}

	function navigateIntersection(intersection:GameObject) {
			var possibleDests: ArrayList = intersection.GetComponent(IntersectionNodeAI).input_exits;
			
				var newDestination: GameObject = possibleDests[Random.Range(0, possibleDests.Count)];
			 
				 setDestination(newDestination);
			
	}
	
	
	function setDestination ( g:GameObject) {
		currentDestination = g;
		navMeshAgent.SetDestination(g.transform.position);
	}
	
	function getRandomDestination() {
		/*
		float x = Random.Range (targetPlane.renderer.bounds.min.x, targetPlane.renderer.bounds.max.x);
		float z = Random.Range (targetPlane.renderer.bounds.min.z, targetPlane.renderer.bounds.max.z);

		return new Vector3 (x, 54, z);
		*/

		var dests:GameObject[]  = GameObject.FindGameObjectsWithTag ("roadInput");

		return dests[Random.Range(0, dests.Length)];

}
