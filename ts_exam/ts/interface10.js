var Point = /** @class */ (function () {
    function Point() {
    }
    Point.prototype["do"] = function () {
        console.log("hello");
    };
    return Point;
}());
(function () {
    var point3d = { x: 1, y: 2, z: 3, "do": function () { console.log("override"); } };
    point3d["do"]();
})();
