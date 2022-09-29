export const fetchWithXMLHttpRequest = (url, options = {}) => {
  return new Promise((resolve, reject) => {
    const xhttp = new XMLHttpRequest();
    xhttp.responseType = "json";

    xhttp.open(options.method || "GET", url, true);

    if (options.method != null) {
      const isSendMethod = ["POST", "PUT"].includes(
        options.method.toUpperCase()
      );
      const body = isSendMethod && options.body;
      xhttp.send(body);
    } else {
      xhttp.send();
    }

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
