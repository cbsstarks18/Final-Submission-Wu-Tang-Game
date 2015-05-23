#pragma strict
var blinkTime : int = 3;            //How long the sphere will blink
 
function Start() 
{
    yield WaitForSeconds(1); // The initial delay that you passed to InvokeRepeating
    while (blinkTime > 0)
    {
        blinkTime--;
        yield WaitForSeconds(0.5);
        renderer.enabled = false;
        yield WaitForSeconds(0.5);
        renderer.enabled = true;
    }
    yield WaitForSeconds(1); // wait another sec.
    Destroy(gameObject);
}