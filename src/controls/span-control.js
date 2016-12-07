/** Span Control */
class SpanControl extends BaseControl {
    constructor() {
        super();
        this.$element = $('<span></span>');
    }

    /**
     * sets span inner text value
     * @param {String} value - to set.
     *
     */
    setValue (value) {
        if (_.isString(value)) {
            this.$element.text(value);
        }
    }
}