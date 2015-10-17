app
    .controller('DemoCtrl', function($scope, $http) {
            function formData(file, name) {
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
                    console.log('Imagen Guardada.')
                });
            }

            function binaryDayta(url, imageType) {
                var binary = atob(url.split(',')[1]);
                var array = [];
                for (var i = 0; i < binary.length; i++) {
                    array.push(binary.charCodeAt(i));
                }
                var blob = new Blob([new Uint8Array(array)], {
                    type: imageType
                })
                return blob;
            }

        $scope.multipleImg = function(image) {
            for (var i = 0; i < image.length; i++) {
                var formInfo = formData(image[i].file, image[i].name);
                post(formInfo)
            };
        }

        $scope.multipleImgResize = function(image) {
            for (var i = 0; i < image.length; i++) {
                var blobData = binaryData(image[i].canvasURL)
                var formInfo = formData(blobData, image[i].name);
                post(formInfo)
            };
        }

        $scope.singleImg = function(image) {
            var formInfo = formData(image.file, image.name);
            post(formInfo)
        };

        $scope.singleImg2 = function(image){
            var blobData = binaryData(image.canvasURL, image.type)
            var formInfo = formData(blobData, image.name);
                post(formInfo)
        }


    });
