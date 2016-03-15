(function () {
    $dyn.controls.BasicActionControl = function (control, element)
    {
        self = this;
        $dyn.ui.Control.apply(self, arguments)
        $dyn.ui.applyDefaults(self, control);

        self.click = function (event) {
            alert("Hello");
            event.preventDefault();
            $dyn.callFunction(self.Clicked, self, { _text: "World!" })
        };

    };
    $dyn.controls.BasicActionControl.prototype = $dyn.extendPrototype($dyn.ui.Control.prototype, {});
})();
