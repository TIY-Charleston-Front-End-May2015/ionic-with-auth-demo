angular.module('starter.controllers', [])

.controller('DashCtrl', function($scope, $auth) {
  $scope.authenticate = function (provider) {
    $auth.authenticate(provider).then(function() {
          $ionicPopup.alert({
            title: 'Success',
            content: 'You have successfully logged in!'
          });
        })
        .catch(function(response) {
          $ionicPopup.alert({
            title: 'Error',
            content: response.data ? response.data || response.data.message : response
          });

        });
  };
  $scope.isAuthenticated = function () {
    return $auth.isAuthenticated();
  };
  $scope.logout = function () {
    $auth.logout();
  };
})

.controller('ChatsCtrl', function($scope, Chats, $auth) {
  $scope.isAuthenticated = function () {
    return $auth.isAuthenticated();
  };
  // With the new view caching in Ionic, Controllers are only called
  // when they are recreated or on app start, instead of every page change.
  // To listen for when this page is active (for example, to refresh data),
  // listen for the $ionicView.enter event:
  //
  //$scope.$on('$ionicView.enter', function(e) {
  //});

  $scope.chats = Chats.all();
  $scope.remove = function(chat) {
    Chats.remove(chat);
  }
})

.controller('ChatDetailCtrl', function($scope, $stateParams, Chats) {
  $scope.chat = Chats.get($stateParams.chatId);
})

.controller('AccountCtrl', function($scope) {
  $scope.settings = {
    enableFriends: true
  };
});
