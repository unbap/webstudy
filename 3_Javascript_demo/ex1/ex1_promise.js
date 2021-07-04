// This function returnes value after 1000ms.

function dummyPromise() {
  return new Promise((res, rej) => {
    setTimeout(() => res("This response after 1000ms"), 1000);
  });
}
