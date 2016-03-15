(function () {
    $dyn.controls.BasicUserEntryControl = function (control, element)
    {
        self = this;
        $dyn.ui.Control.apply(self, arguments)        
        $dyn.ui.applyDefaults(self, control);

        self.handleUserValue = function (event)
        {
            var userValue = $(event.target).val();

            $dyn.callFunction(self.SetValue, self, { _value: userValue });
        }
    };
    $dyn.controls.BasicUserEntryControl.prototype = $dyn.extendPrototype($dyn.ui.Control.prototype, {});
})();
