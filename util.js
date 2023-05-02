function last(arr) {
  return arr.slice(-1)[0];
}

function parseUrl(url) {
  if(url.startsWith("http")) {
    var end = last(url.split("/"));
    var id = last(end.split("-")).split("?")[0];
    console.log(id);
    return id;
  } else {
    return url;
  }
}

module.exports = {parseUrl};
