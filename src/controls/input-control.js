/** Input Control */
class InputControl extends BaseControl {
    constructor(eventHandlers) {
        super();
        this.$element = $('<input type="text" />');
        if (eventHandlers) {

        }
    }

    /**
     * sets input value
     * @param {String} value - to set.
     *
     */
    setValue (value) {
        if (value) {
            this.$element.val(value);
        }
    }
}