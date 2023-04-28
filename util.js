function last(arr) {
  return arr.slice(-1)[0];
}

function parseUrl(url) {
  if(url.startsWith("http")) {
    //https://www.notion.so/chenyal/two-tricks-of-mockito-62a88d50f98048f292031a4c52e166e1?pvs=4
    var end = last(url.split("/"));
    var id = last(end.split("-")).split("?")[0];
    console.log(id);
    return id;
  } else {
    return url;
  }
}

module.exports = {parseUrl};
