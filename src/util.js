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


const env = process.env.NODE_ENV
// run f in dev env
function devMode(f) {
  if (env !== 'production') {
    f()
  }
}

module.exports = {parseUrl, devMode};
