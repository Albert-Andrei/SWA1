export function fetchWithXMLHttpRequest(url, method = "GET", payload) {
  return new Promise((resolve, reject) => {
    const xhttp = new XMLHttpRequest();
    xhttp.responseType = "json";

    xhttp.open(method, url, true);

    const body = ["POST", "PUT"].includes(method.toUpperCase()) && payload;

    xhttp.send(body);

    xhttp.onreadystatechange = function () {
      if (this.readyState == 4) {
        if (this.status >= 200 && this.status < 300) {
          resolve(xhttp.response);
        } else {
          reject(xhttp.statusText);
        }
      }
    };
  });
}