var divstore = document.getElementsByClassName('newnote');//datecontroller logic
angular.module('stickmodule').controller('DateController', ['$scope', '$rootScope'
    , function ($scope, $rootScope) {
        $scope.currentDate = new Date();
        console.log($scope.currentDate);
        $scope.addNote = function (myDate,notecount) {
            console.log(myDate);
            $rootScope.$broadcast('addNote', myDate,notecount);
        };

    }]);

//displaycontroller logic
angular.module('stickmodule').controller('DisplayController', ['$scope', '$rootScope'
    , function ($scope, $rootScope) {
        var i = 1;
        var j = 1;
        $scope.show = false;
        $scope.NotesList = [];
        $scope.TaskList = [];
        $rootScope.$on('addNote', function (event, date) {
            $scope.show = true;
            //  $scope.TaskList.splice(0,5);
            $scope.NotesList.push({ 'listeddate': date});
            console.log(" len"+$scope.NotesList.length);
            if ($scope.NotesList.length > 30) {
                $scope.NotesList.splice(0, 30);
                notecount=1;
            }
            if (localStorage) {
                console.log("yes allowed");
                try {
                    var key = "sticknotes";
                    localStorage.setItem(key, angular.toJson($scope.NotesList));
                    var ls = localStorage.getItem(key);
                    //console.log(ls);
                }
                catch (e) {
                    console.log(e);
                }
            }
        });
        $scope.addTask = function (noteIndex) {
            var currentNote = $scope.NotesList[noteIndex];
            console.log(currentNote);
            if (currentNote) {
                currentNote.TaskList = currentNote.TaskList || [];
                var task = {
                    count: currentNote.TaskList.length+1
                };
                currentNote.TaskList.push(task);
            }
        }
    }]);