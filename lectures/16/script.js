function onStreamProcessed(text) {
  console.log(text);
}

function onSuccess(response) {
  response.text.then(onStreamProcessed)
}

function onError(error) {
  console.log('Error: ' + error);
}

fetch('images.txt').then(onSuccess, onError);
