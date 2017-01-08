module.exports = function () {
    var config= {
        allTs:'./app/**/*.ts',
        allMap:'./app/**/*.map',
        typings: './typings/**/*.d.ts',
        tsOutPath: './../public/app/'
    }
    return config;
}
