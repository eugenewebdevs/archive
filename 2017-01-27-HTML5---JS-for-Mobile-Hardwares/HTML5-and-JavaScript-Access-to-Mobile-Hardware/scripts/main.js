// battery js
function battery() {
    //Check for battery API support
    if ('getBattery' in navigator || ('battery' in navigator && 'Promise' in window)) {
        var target = document.getElementById('target');

        function handleChange(change) {
            var timeBadge = new Date().toTimeString().split(' ')[0];
            var newState = document.createElement('p');
            newState.innerHTML = '<span class="badge">' + timeBadge + '</span> ' + change + '.';
            target.appendChild(newState);
        }

        var batteryPromise;

        if ('getBattery' in navigator) {
            batteryPromise = navigator.getBattery();
        } else {
            batteryPromise = Promise.resolve(navigator.battery);
        }

        batteryPromise.then(function(battery) {
            document.getElementById('charging').innerHTML = battery.charging ? 'charging' : 'discharging';
            document.getElementById('chargingTime').innerHTML = battery.chargingTime + ' s';
            document.getElementById('dischargingTime').innerHTML = battery.dischargingTime + ' s';
            document.getElementById('level').innerHTML = battery.level;

            battery.addEventListener('chargingchange', function() {
                handleChange('Battery charging changed to <b>' + (battery.charging ? 'charging' : 'discharging') + '</b>')
            });

            battery.addEventListener('chargingtimechange', function() {
                handleChange('Battery charging time changed to <b>' + battery.chargingTime + ' s</b>');
            });

            battery.addEventListener('dischargingtimechange', function() {
                handleChange('Battery discharging time changed to <b>' + battery.dischargingTime + ' s</b>');
            });

            battery.addEventListener('levelchange', function() {
                handleChange('Battery level changed to <b>' + battery.level + '</b>');
            });
        });
    }
}

//canvas js
function can() {
    //Use canvas to stream preview and then take snapshot
    //Video preview events
    // Grab elements, create settings, etc.
    var canvas = document.getElementById('canvas');
    var video = document.getElementById('video');
    var mediaConfig = {
        video: true
    };
    var errBack = function(e) {
        console.log('An error has occurred!', e)
    };
    // Put video listeners into place
    if (navigator.mediaDevices && navigator.mediaDevices.getUserMedia) {
        navigator.mediaDevices.getUserMedia(mediaConfig).then(function(stream) {
            video.src = window.URL.createObjectURL(stream);
            video.play();
        });
    }
    /* Legacy code below! */
    else if (navigator.getUserMedia) { // Standard
        navigator.getUserMedia(mediaConfig, function(stream) {
            video.src = stream;
            video.play();
        }, errBack);
    } else if (navigator.webkitGetUserMedia) { // WebKit-prefixed
        navigator.webkitGetUserMedia(mediaConfig, function(stream) {
            video.src = window.webkitURL.createObjectURL(stream);
            video.play();
        }, errBack);
    } else if (navigator.mozGetUserMedia) { // Mozilla-prefixed
        navigator.mozGetUserMedia(mediaConfig, function(stream) {
            video.src = window.URL.createObjectURL(stream);
            video.play();
        }, errBack);
    }

    var context = canvas.getContext('2d');
    // Trigger photo take
    document.getElementById('snap').addEventListener('click', function() {
        context.drawImage(video, 0, 0, 640, 480);
        var x = document.getElementById("demo");
    });
}

//geolocation js
function geolocation() {
    //GEO Location. Requires https
    var output = document.getElementById("location");

    if (!navigator.geolocation) {
        output.innerHTML = "<p>Geolocation is not supported by your browser</p>";
    }

    function success(position) {
        var latitude = position.coords.latitude;
        var longitude = position.coords.longitude;

        output.innerHTML = '<p>Latitude is ' + latitude + '° <br>Longitude is ' + longitude + '°</p>';

        var img = new Image();
        img.src = "https://maps.googleapis.com/maps/api/staticmap?center=" + latitude + "," + longitude + "&zoom=13&size=300x300&sensor=false";

        output.appendChild(img);
    }

    function error() {
        output.innerHTML = "Unable to retrieve your location";
    }

    output.innerHTML = "<p>Locating…</p>";

    navigator.geolocation.getCurrentPosition(success, error);

}

//light js
function light() {
    if ("ondevicelight" in window) {
        // check if light API supported.
        window.addEventListener("devicelight", function(event) {
            //light level is returned in lux unit.
            document.getElementById('light').innerHTML = "The current level of ambient light is " + event.value + " lux";
        });
    } else {
        // API not supported
        document.getElementById('light').innerHTML = "Ambient Light API not supported";
    }
}

//orientation
function orientation() {

}

//vibration
function vibrate(){
    // enable vibration support
    navigator.vibrate = navigator.vibrate || navigator.webkitVibrate || navigator.mozVibrate || navigator.msVibrate;

    if ("vibrate" in navigator) {
        document.getElementById('vibrate').innerHTML='vibration API supported';
        // vibrate for one second
        navigator.vibrate(1000);
    }
}

//menu
function openNav() {
    document.getElementById("sidenav").style.left = "0";
}

function closeNav() {
    document.getElementById("sidenav").style.left = "-100%";
}
