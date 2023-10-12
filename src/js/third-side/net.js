export default class Net {
  static getJson(url, callback) {
    return fetch(url).then(response => response.json()).then((data) => {
      if (callback) return callback(data)
    })
  }
}