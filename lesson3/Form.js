var userInfoModule = angular.module('UserInfoModule', []);
userInfoModule.controller('UserInfoCtrl', ['$scope',
    function ($scope) {
        $scope.userInfo = {
            email : "Po@qq.com",
            password : "12345",
            autologin: true
        };
        $scope.getFormData = function () {
            console.log($scope.userInfo);
        };
        $scope.setFormData = function () {
            $scope.userInfo = {
                email : "Dapo@126.com",
                password : 'asdfgg',
                autologin : false
            }
        };
        $scope.resetForm = function () {
            $scope.userInfo = {
                email : "Po@qq.com",
                password : "12345",
                autoLogin: true
            }
        }
    }
])
