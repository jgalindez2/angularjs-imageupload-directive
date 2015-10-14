app
    .controller('DemoCtrl', function($scope, $http) {
        $scope.single = function(image) {
            if (angular.isArray(image)) {
                console.log('varias imagenes')
                for (var i = 0; i < image.length; i++) {
                    var formInfo = formData(image[i].file, image[i].name);
                    post(formInfo)
                };
            };
            if (image.resize) {

                var binary = atob(image.url.split(',')[1]); 
                var array = [];
                for (var i = 0; i < binary.length; i++) {
                    array.push(binary.charCodeAt(i));
                }
                var blob = new Blob([new Uint8Array(array)], {
                    type: image.type
                })
                var formInfo = formData(blob, image.name);
                post(formInfo)

            } else if (angular.isObject(image) && !angular.isArray(image)) {
                var formInfo = formData(image.file, image.name);
                post(formInfo)
            };

            function formData(file, name){
                var form = new FormData();
                form.append('image', file, name);
                return form;
            }

            function post(form) {
                $http.post('upload', form, {
                    headers: {
                        'Content-Type': false
                    },
                    transformRequest: angular.identity
                }).success(function(result) {
                    console.log('funciona')
                    $scope.uploadedImgSrc = result.src;
                    $scope.sizeInBytes = result.size;
                });
            }
        };
    });