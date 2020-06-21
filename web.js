window.onload = () => {
    let video = document.querySelector("#videoElement");

    if (navigator.mediaDevices.getUserMedia) {
        navigator.mediaDevices.getUserMedia({ video: { width: 1920, height: 1080 } })
            .then((stream) => {
                video.srcObject = stream;
            })
            .catch((err) => {
                console.log("ERROR: ", err);
            });
    }
};
