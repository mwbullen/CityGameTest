#pragma strict

public var input_exits:ArrayList = new ArrayList();
public var intersectionSizeRange:float;


function Start () {
	var inputs:GameObject[] = GameObject.FindGameObjectsWithTag("roadInput");
	
	for (var i:GameObject in inputs) {
		if(Vector3.Distance(transform.position, i.transform.position) <= intersectionSizeRange) {
		//Debug.Log(i);
			input_exits.Add(i);
			var ai:intersectionStopAi =  i.GetComponent(intersectionStopAi);
			
		}
	}
	
	
	var outputs:GameObject[] = GameObject.FindGameObjectsWithTag("roadOutput");

	for (var o:GameObject in outputs) {
		if(Vector3.Distance(transform.position, o.transform.position) <= intersectionSizeRange) {
		//Debug.Log(o);
			//input_exits.Add(i);
			var aio:intersectionStopAi =  o.GetComponent(intersectionStopAi);
			aio.Intersection = gameObject;
			
		}
	}

	
	
	Debug.Log(input_exits.Count);
}

function Update () {

}