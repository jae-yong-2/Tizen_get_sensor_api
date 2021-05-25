
function getHeart() {
    var textHeart = document.getElementById('text-heart');

 function onchangedCB(hrm)
 {
     textHeart.innerHTML = hrm.heartRate;
 }

 tizen.humanactivitymonitor.start('HRM', onchangedCB);
}  



window.onload = function () {
    // TODO:: Do your initialization job

    // add eventListener for tizenhwkey
    document.addEventListener('tizenhwkey', function(e) {
        if(e.keyName == "back")
	try {
	    tizen.application.getCurrentApplication().exit();
	} catch (ignore) {
	}
    });

    // Sample code
    getHeart();
    
};
