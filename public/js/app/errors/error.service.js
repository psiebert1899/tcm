"use strict";
var core_1 = require("@angular/core");
var error_1 = require("./error");
var ErrorService = (function () {
    function ErrorService() {
        this.errorOccurred = new core_1.EventEmitter();
    }
    ErrorService.prototype.handleError = function (error) {
        console.log(error);
        var errorData = new error_1.Error(error.title, error.error.message);
        this.errorOccurred.emit(errorData);
        console.log(errorData);
    };
    return ErrorService;
}());
exports.ErrorService = ErrorService;

//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImVycm9ycy9lcnJvci5zZXJ2aWNlLnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7QUFBQSxxQkFBMkIsZUFBZSxDQUFDLENBQUE7QUFDM0Msc0JBQW9CLFNBQVMsQ0FBQyxDQUFBO0FBQzlCO0lBQUE7UUFDSSxrQkFBYSxHQUFHLElBQUksbUJBQVksRUFBUyxDQUFDO0lBTzlDLENBQUM7SUFORyxrQ0FBVyxHQUFYLFVBQVksS0FBUztRQUNqQixPQUFPLENBQUMsR0FBRyxDQUFDLEtBQUssQ0FBQyxDQUFDO1FBQ25CLElBQU0sU0FBUyxHQUFHLElBQUksYUFBSyxDQUFDLEtBQUssQ0FBQyxLQUFLLEVBQUUsS0FBSyxDQUFDLEtBQUssQ0FBQyxPQUFPLENBQUMsQ0FBQztRQUM5RCxJQUFJLENBQUMsYUFBYSxDQUFDLElBQUksQ0FBQyxTQUFTLENBQUMsQ0FBQztRQUNuQyxPQUFPLENBQUMsR0FBRyxDQUFDLFNBQVMsQ0FBQyxDQUFDO0lBQzNCLENBQUM7SUFDTCxtQkFBQztBQUFELENBUkEsQUFRQyxJQUFBO0FBUlksb0JBQVksZUFReEIsQ0FBQSIsImZpbGUiOiJlcnJvcnMvZXJyb3Iuc2VydmljZS5qcyIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7RXZlbnRFbWl0dGVyfSBmcm9tIFwiQGFuZ3VsYXIvY29yZVwiO1xyXG5pbXBvcnQge0Vycm9yfSBmcm9tIFwiLi9lcnJvclwiO1xyXG5leHBvcnQgY2xhc3MgRXJyb3JTZXJ2aWNle1xyXG4gICAgZXJyb3JPY2N1cnJlZCA9IG5ldyBFdmVudEVtaXR0ZXI8RXJyb3I+KCk7XHJcbiAgICBoYW5kbGVFcnJvcihlcnJvcjphbnkpe1xyXG4gICAgICAgIGNvbnNvbGUubG9nKGVycm9yKTtcclxuICAgICAgICBjb25zdCBlcnJvckRhdGEgPSBuZXcgRXJyb3IoZXJyb3IudGl0bGUsIGVycm9yLmVycm9yLm1lc3NhZ2UpO1xyXG4gICAgICAgIHRoaXMuZXJyb3JPY2N1cnJlZC5lbWl0KGVycm9yRGF0YSk7XHJcbiAgICAgICAgY29uc29sZS5sb2coZXJyb3JEYXRhKTtcclxuICAgIH1cclxufSJdLCJzb3VyY2VSb290IjoiL3NvdXJjZS8ifQ==
