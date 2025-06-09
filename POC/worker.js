self.onmessage = function (event) {
  let sum = 0;
  let limit = event.data;
  for (let i = 0; i < limit; i++) {
    sum += i;
  }
  postMessage(sum);
};
