Angular Project with important files

package.json
COntains all standard packages required for development and testing (devDependencies)
All packages those are required during production (depdnencies)
tsconfig.json
TypeScript configuration file, this contains the configuration of Angular source file compilations
angular.json
Angular Project configurations
Dev. Build
Test Build
Production Build
main.ts
Entrypoint of Angular application
Ahead-of-Time (AoT)
If aot=true then, Pre-Compiles the angular application on server and generate buil/test/production files whicj can bedelivered to browser
If aot=false, the angular uses JIT compiler, this loads the code in browser and compiled in browser. Slower than Aot
Angular 9+ the aot=true by default uses Ivy compiler, compiles all js and HTML templates into high-compressed production files.
Ivy will be used in production build ====================================================================== Angular Main classes
NgModule, applied on class to uses that class as Angular module
Component, , applied on class to uses that class as Angular component
Injectable, , applied on class to uses that class as Angular Service
Directive , applied on class to uses that class as Angular Directive
Pipe , applied on class to uses that class as Angular Pipe
======================================================================Angular Dev. Build

runtime.js
The Angular Runtime JS Object to execute app in browser
polifills.js
The interface to execute ES6 methods in browser
styles.js
JS object for all internal and external css
vendor.js
JS transpilation of all standard Angular Packages
main.js
The Develope transpilaed code ====================================================================== Programming with Angular IMP*** Each Component must be declaraed in 'declarations' array of NgModule
Binding
Interpolation
Read-only binding
{{}}
Uses JavaScript's eval() function
{{2+4}} --> 6
Property Binding
HTML DOM is bound with the public datamember of component
<input type="text" [value]="">
[href], [checked] [disable], etc
Defined iin BrowserModule
[myval]
Event Binding
<input type="button" (click)="">
Two-Way Binding
Property Binding + Event Binding
Attribute Directive of name 'ngModel'
<input type="text" [(ngModel)]="">
To execute ngModel, we need to import 'FormsModule' from @angular/forms package in 'imports' array of NgModule.
ngModel, contains ngModelChanges event,
watch the default event on DOM element where ngModel is applied e.g. / DOM elemnt's, the default event is 'change' ngModel will read the updated value of DOM element, and pass the value to component to the currespoing proeprty Component will update itself and then update the property and all other properties those are depending on property bi=eing updated. Send the updated values back to the UI using BInding The Directives They are the objects those will be used to define Custom Reusable UI and or custom reusable function behavior for HTML DOM elements Component Directive To re-use component as reusable directive then use it in the HTML of other component using its selector Structural Directives USed to modify DOM elements using iterations, conditional statements *ngFor, accepts for..of loop and iterates over a collection *ngIf, accepts boolean condition *ngSwitch-ngSwitchCase Attribute Directives Attributes applied on DOM elements to define ite behavior e.g. ngModel e.g. formGroup, formControlName Components Reusability Input and Output Component Parent Child Communication Forms Reactive Forms Validations Services Observers with Components HTTP Communications Secure calls Interceptor LitElements and Angular Elements Creating Web Components Micro-FrontEnds USing Elements with independent libraries Routing SPA Lazy Loading Testing Jest Component Service Misc IOTA CSS Gulp Custom Decorators
