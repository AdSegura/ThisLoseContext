# Class Server instance twice this.options mixed Error

https://stackoverflow.com/questions/57665893/typescript-javascript-class-two-instances-this-get-mixed-when-returning-promise

Resolved by Jonas Wilms at https://stackoverflow.com/a/57665937/7776516

this.options = Object.assign({}, this.defaultOptions, config);
