#pragma strict




function OnTriggerEnter2D(hit: Collider2D) {
if(hit.gameObject.tag == "Player"){

rigidbody2D.isKinematic = false;
yield WaitForSeconds (3);
Destroy (gameObject);

}
}