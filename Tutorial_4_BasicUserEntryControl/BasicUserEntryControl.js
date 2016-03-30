(function () {
    "use strict";

    $dyn.controls.BasicUserEntryControl = function (control, element)
    {
        var control = this;
        $dyn.ui.Control.apply(control, arguments)        
        
        /*  Generally functions for a control should be defined in the prototype.
            Functions in the prototype are shared across all instances of the control.
            This improves memory and performance, since there does not need to be
            a separate but identical function in memory for every instance of the control.
            However, in this case we need to access the instance property SetValue, 
            and the "event" binding handler does not provide access to *this* (the control instance).
            Instead, *this* would be the Window if this function was defined in the prototype.
            So, we place the function in the constructor here to the detriment of performance, 
            and we reference the instance using *control*.
        */
        control.handleUserValue = function (event) {
            var userValue = event.target.value;

            $dyn.callFunction(control.SetValue, control, { _value: userValue });
        };

    };
    $dyn.controls.BasicUserEntryControl.prototype = $dyn.extendPrototype($dyn.ui.Control.prototype, {});
})();
