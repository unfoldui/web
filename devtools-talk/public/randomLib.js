// Library code
function a(b, c, d, e) {
  // no nasa algorithm here..
  return e;
}

function magicalFunction(val) {
  // minified, uglified code
  val = val - 1;
  val = val + 1;
  // that calls some other minified, uglified code..
  return a(null, undefined, false, val);
}
