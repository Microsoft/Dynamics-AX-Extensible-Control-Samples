(function () {
    $dyn.controls.BasicTaskRecorderControl = function (control, element) {
        self = this;
        $dyn.ui.Control.apply(self, arguments)
        $dyn.ui.applyDefaults(self, control);

        var counter = 0;

        self.handleUserValue = function (event) {
            var userValue = $(event.target).val();
            self.Value(userValue);            
        }

        self.click = function (event) {
            event.preventDefault();
            counter++;
            $dyn.callFunction(self.Clicked, self, { _arg1: counter.toString() });
        }
    };
    $dyn.controls.BasicTaskRecorderControl.prototype = $dyn.extendPrototype($dyn.ui.Control.prototype, {
        
        // Implement this method in the prototype to add Task guide support
        getTaskGuideParams: function (options) {
            // Must inherit behavior from the base control
            options = $dyn.ui.Control.prototype.getTaskGuideParams.apply(this, [options]);

            // Fallback to pointing to the control's element
            var target = $(this.element);

            var actionName = options.action;

            if (actionName.indexOf("Value") !== -1) {
                // The Task guide is prompting the user to change the value
                // Set the target to the input field
                target = $(this.element).find("input");
            }

            if (actionName.indexOf("Clicked") !== -1) {
                // The Task guide is prompting the user to click the link
                // Set the target to the anchor tag
                target = $(this.element).find("a");
            }

            options.target = target;
            return options;
        }
    });
})();
