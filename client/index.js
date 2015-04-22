'use strict';

angular.module('portfolio', [])
.controller('projectView', ['$scope', function($scope){
  $scope.projects = [
    { name: 'Calculator',
      desc: 'While at Coding House, I was asked to duplicate the appearance and function of Apple\'s calculator.',
      screenshotthumb: ''
    },
    { name: 'Tower of Hanoi',
      desc: '',
      screenshotthumb: ''
    },
    { name: 'test2',
      desc: '',
      screenshotthumb: ''
    }
  ];
}]);
