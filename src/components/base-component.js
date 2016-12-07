/** Base Component */
class BaseComponent {
    constructor () {
        this.children = [];
        this.dispatcher = SimpleDispatcher;
    }

    /**
     * adds component to the parent element or to the document body
     * @param {JQuery|undefined} $parentElement - parent element to add to.
     */
    render ($parentElement) {
        $parentElement = $parentElement || $('body');
        this.applyForEachControl (this.renderChild.bind(this, $parentElement));
    }

    /**
     * set component visibility
     * @param {Boolean} isVisible - is component visible
     */
    setVisibility (isVisible) {
        this.applyForEachControl (this.setChildVisibility.bind(this, isVisible));
    }

    /**
     * set child component visibility
     * @param {Boolean} isVisible - is component visible
     * @param {BaseComponent} child - component to set visibility
     */
    setChildVisibility (isVisible, child) {
        if (_.isFunction (child.setVisibility)) {
            child.setVisibility(isVisible);
        }
    }

    /**
     * render component
     * @param {JQuery|undefined} $parentElement - parent element
     * @param {BaseComponent} child - component to render
     */
    renderChild ($parentElement, child) {
        if (_.isFunction (child.render)) {
            child.render($parentElement);
        }
    }

    /**
     * apply some command to each control
     * @param {Array} child - daughter component
     */
    applyForEachControl (applyFunction) {
        if (this.children.length) {
            _.each(this.children, applyFunction);
        }
    }

    /**
     * appends child component
     * @param {Array} child - daughter component
     */
    append(child) {
        this.children.push(child);
    }
}