self.onmessage = function (event) {
  let count = 0;
  for (let i = 0; i < event.data; i++) {
    count += i;
  }
  postMessage(count);
};
