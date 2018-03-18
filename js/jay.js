function drawJ(lineMaterial) {
  var jup = new THREE.Geometry();
  jup.vertices.push(new THREE.Vector3( -30, 10, 0) );
  jup.vertices.push(new THREE.Vector3( -10, 10, 0) );


  var jupLine = new THREE.Line( jup, lineMaterial );
  scene.add( jupLine );

  var jmid = new THREE.Geometry();
  jmid.vertices.push(new THREE.Vector3( -20, 10, 0) );
  jmid.vertices.push(new THREE.Vector3( -20, -10, 0) );

  var jmidLine = new THREE.Line( jmid, lineMaterial );
  scene.add( jmidLine );

  var jdown = new THREE.Geometry();
  jdown.vertices.push(new THREE.Vector3( -30, -10, 0) );
  jdown.vertices.push(new THREE.Vector3( -20, -10, 0) );

  var jdownLine = new THREE.Line( jdown, lineMaterial );
  return jdownLine;
  // scene.add( jdownLine );
}
