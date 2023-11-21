const { src, dest } = require("gulp");
const { sass } = require("gulp-sass")(require('sass'));

function css( done ){
    // Identificar el archivo de SASS
        //Compilar
            //Almacenar en el disco duro
    src('src/scss/app.scss')
        .pipe(sass())
            .pipe(dest("build/css"));
    
    done(); //Callback que avisa a gulp cuando llegamos al final
}

exports.css = css;