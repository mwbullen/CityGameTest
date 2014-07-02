using UnityEngine;
using System.Collections;

public class carAi : MonoBehaviour {

	//public GameObject targetPlane;
	public NavMeshAgent navMeshAgent;
	GameObject currentDestination;

	// Use this for initialization
	void Start () {
		navMeshAgent = gameObject.GetComponent<NavMeshAgent> ();

		setDestination( getRandomDestination());


		Debug.Log (navMeshAgent.destination);
	}
	
	// Update is called once per frame
	void Update () {
		if (navMeshAgent.remainingDistance < 1) {
			//GameObject[] nextStops = currentDestination.GetComponent<intersectionStopAi>().nextStops;

			//setDestination(nextStops[Random.Range (0, nextStops.Length)]);
		}
	}

	void setDestination (GameObject g) {
		currentDestination = g;
		navMeshAgent.SetDestination(g.transform.position);
	}

	GameObject getRandomDestination() {
		/*
		float x = Random.Range (targetPlane.renderer.bounds.min.x, targetPlane.renderer.bounds.max.x);
		float z = Random.Range (targetPlane.renderer.bounds.min.z, targetPlane.renderer.bounds.max.z);

		return new Vector3 (x, 54, z);
		*/

		GameObject[] dests = GameObject.FindGameObjectsWithTag ("roadOutput");

		return dests[Random.Range(0, dests.Length)];

}


}
