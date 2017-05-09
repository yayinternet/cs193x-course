const video = document.querySelector('video');

function onCameraOpen(stream) {
  video.srcObject = stream;
}

navigator.mediaDevices.getUserMedia({ video: true })
  .then(onCameraOpen);
