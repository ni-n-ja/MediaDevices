window.onload = () => {
    var video = document.querySelector("#videoElement");

    if (navigator.mediaDevices.getUserMedia) {
        navigator.mediaDevices.getUserMedia({ video: { width: 1920, height: 1080 } })
            .then(function (stream) {
                video.srcObject = stream;
            })
            .catch(function (err) {
                console.log("ERROR: ", err);
            });
    }
};