"use strict";

import gulp from "gulp";
const smartgrid = require("smart-grid");

gulp.task("smart-grid", (cb) => {
    smartgrid("./src/styles/vendor/import/", {
        filename: "_smart-grid",
        outputStyle: 'scss',
        columns: 12,
        offset: "24px",
        mobileFirst: false,
        container: {
        maxWidth: "1188px",
        fields: "30px"
        },
        breakPoints: {

        md: {
            width: "1140px",
            // fields: "15px"
        },
        sm: {
            width: "768px",
            fields: "24px"
        },
        xs: {
            width: "692px",
            fields: "20px"
        }
        }
    });
    cb();
});