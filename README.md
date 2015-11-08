Demo AngularJS imageupload Directive
===============================

## Descripcion

imageupload Directive for [AngularJS](http://angularjs.org/)

## Uso

### Simple Imagen

```html
<input type="file" accept="image/*" image="image"/>
<img ng-show="image" ng-src="{{image.url}}" type="{{image.file.type}}" />
```

### Simple imagen con resizing

```html
<input type="file" accept="image/*" image="image2"
    resize-max-height="300"
    resize-max-width="250"
    resize-quality="0.7" />
Original <img ng-show="image2" ng-src="{{image2.originURL}}" type="{{image2.type}}" />
Resized <img ng-show="image2" ng-src="{{image2.canvasURL}}" />
```

### Multiples imagenes

```html
    <input id="inputImage3" 
                type="file" 
                accept="image/*" 
                multiple
                image="images3" />
Originales  <img ng-repeat="img in images3" ng-src="{{img.url}}" type="{{img.file.type}}"/>

### Multiples imagenes con resizing

```html
<input type="file" accept="image/*" multiple
    image="images"
    resize-max-height="300"
    resize-max-width="250"
    resize-quality="0.7" />
Originales <img ng-repeat="img in images4" ng-src="{{img.originURL}}" type="{{img.type}}"/>
Resized <img ng-repeat="img in images4" ng-src="{{img.canvasURL}}" />
```

### Parametros Optionales: 

- resize-quality (default is 0.7)
- resize-type (default is 'image/jpg')
- resize-max-height (default is 300)
- resize-max-width (default is 250)


## Features

- Upload Image with FileReader
- Resize Image via canvas
- Send Image Data URL (base64) to whatever you want.

## Como ejecutar el DEMO

```Shell
git clone git@github.com:jgalindez2/angularjs-imageupload-directive.git
cd angularjs-imageupload-directive
npm install

node app.js
Abrir http://localhost:8080
```

## Dependencia

- angular-1.1.4


