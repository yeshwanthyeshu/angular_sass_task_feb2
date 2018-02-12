var app = angular.module("myApp",[]);
app.controller('myc', function ($scope) {
    $scope.name = "yeshwanth";
    $scope.product_name = "I fusion app";
    $scope.expiration ="15-022018";
    $scope.license_key = "XYZS ASDF ASDF";
    $scope.renewal_link = "<a>http:www.google.com</a>";
});