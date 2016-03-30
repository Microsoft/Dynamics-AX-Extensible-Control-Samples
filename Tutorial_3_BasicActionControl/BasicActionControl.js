(function () {
    "use strict";

    $dyn.controls.BasicActionControl = function (control, element)
    {
        var control = this;
        $dyn.ui.Control.apply(control, arguments)

    };
    $dyn.controls.BasicActionControl.prototype = $dyn.extendPrototype($dyn.ui.Control.prototype, {
        click : function (event) {
            alert("Hello");
            event.preventDefault();
            $dyn.callFunction(this.Clicked, this, { _text: "World!" })
        }
    });
})();
