/** Html5 features detection service */
class Html5FeaturesDetectionService {
    /**
     * is canvas supported by browser
     * @returns {Boolean}
     */
    static isCanvas() {
        let canvasElement = document.createElement('canvas');
        return _.isFunction(canvasElement.getContext);
    }
}





