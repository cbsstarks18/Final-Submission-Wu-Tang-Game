#pragma strict

	var off1 : GameObject;
	var off2 : GameObject;
	var off3 : GameObject;
	var on1 : GameObject;
	
	
	var clicked = false;
	
	
	var Move_Off : GameObject; 
	var Move_on : GameObject;
  
  
function Start () {

}

function Update () {
	if (clicked == true){
		var translation : float = Time.deltaTime * 0.4;
		Move_Off.transform.Translate (translation, 0, 0);
		
}
}

function OnMouseOver(){
 if(Input.GetMouseButtonDown(0)){
clicked = true;
yield WaitForSeconds (5);
//Clicked ();
	
}
}


function Clicked (){


	yield WaitForSeconds (5);
//	off1.active = false;
	//off2.active = false;
	//off3.active = false;
	//on1.active = true;


}
