/** Simple events dispatcher */
class SimpleDispatcher {
    /**
     * subscribe on event
     * @param {String} eventCode - event code.
     * @param {Function} eventHandler - event handler.
     *
     */
    static attach (eventCode, eventHandler) {
        let eventHandlers = SimpleDispatcher.getEventHandlers(eventCode);
        if (_.isFunction(eventHandler)) {
            eventHandlers.push(eventHandler);
        }
    }

    /**
     * notify subscribers
     * @param {String} eventCode - event code.
     * @param {*} parameters - parameters to pass into handler.
     *
     */
    static notify (eventCode, parameters) {
        let eventHandlers = SimpleDispatcher.getEventHandlers(eventCode);
        _.each(eventHandlers, (eventHandler) => {
            eventHandler(parameters);
        })
    }

    /**
     * get all event handlers
     * @param {String} eventCode - event code.
     * @returns {Array}
     */
    static getEventHandlers (eventCode) {
        var eventHandlers = _.get(this, 'events.' + eventCode);
        if (!eventHandlers) {
            eventHandlers = [];
            _.set(this, 'events.' + eventCode, eventHandlers);
        }
        return eventHandlers;
    }
}