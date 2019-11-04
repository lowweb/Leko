"use strict";

import gulp from "gulp";
import del from "del";

gulp.task("clean-svgfolder", () => {
    return del(["./dist/img/svg"]);
});