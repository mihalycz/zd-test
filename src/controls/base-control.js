/** Base Control */
class BaseControl {
    constructor () {
        this.dispatcher = SimpleDispatcher;
    }

    /**
     * adds control to the parent element or to the document body
     * @param {JQuery|undefined} $parentElement - parent element to add to.
     */
    render ($parentElement) {
        if (this.$element) {
            $parentElement = $parentElement || $('body');
            $parentElement.append(this.$element);
        }
    }

    /**
     * adds control to the parent element or to the document body
     * @param {Boolean} isVisible - is element visible
     */
    setVisibility (isVisible) {
        if (this.$element) {
            this.$element[isVisible ? 'show' : 'hide']();
        }
    }

    /**
     * sets element events handlers
     * @param {Object} eventHandlers - object contains event handlers
     * where prop name is jQuery event name and value is handler
     */
    setHandlers (eventHandlers) {
        _.forOwn(eventHandlers, (handler, event) => {
            this.$element.on(event, handler)
        });
    }

    /**
     * appends control or component as children of this control
     * @param {Array} children - controls or components to add
     */
    append(...children) {
        _.each(children, (child => {
            if (child && this.$element) {
                if (_.isFunction(child.render)) {
                    child.render(this.$element);
                } else {
                    this.$element.append(child);
                }
            }
        }));
    }
}