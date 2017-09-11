var gulp = require("gulp");

gulp.task("generate-service-worker", function(callback) {
  var path = require("path");
  var swPrecache = require("sw-precache");
  var rootDir = "./";

  swPrecache.write(
    path.join(rootDir, "service-worker.js"),
    {
      staticFileGlobs: ["images/*"],
      stripPrefix: rootDir
    },
    callback
  );
});
