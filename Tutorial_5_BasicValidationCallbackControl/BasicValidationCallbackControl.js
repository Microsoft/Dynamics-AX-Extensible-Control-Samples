(function () {
    "use strict";

    $dyn.controls.BasicValidationCallbackControl = function (control, element)
    {
        var control = this;
        $dyn.ui.Control.apply(control, arguments);

        control.validationError = $dyn.observable(false);

        control.handleUserValue = function (event) {
            var userValue = event.target.value;

            $dyn.callFunction(control.SetValue, control, { _value: userValue },
                function commandCallback(value)
                {
                    var success = JSON.parse(value); // Must deserialize the X++ command's return value
                    control.validationError(!success);                    
                }
            );
        }
    };
    $dyn.controls.BasicValidationCallbackControl.prototype = $dyn.extendPrototype($dyn.ui.Control.prototype, {});
})();
