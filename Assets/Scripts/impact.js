#pragma strict
var impactSound : AudioClip;
var impactVolumeModifier : float = 1.0; //Modifies how loud the audio plays related to how hard it hits something.
 
function OnCollisionEnter2D (col : Collision2D) {
        audio.PlayOneShot(impactSound, col.relativeVelocity.magnitude * 0.1 * impactVolumeModifier);
}
 
@script RequireComponent(AudioSource)
@script RequireComponent(Rigidbody2D)