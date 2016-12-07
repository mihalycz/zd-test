/** Group Input Component */
class GroupInputComponent extends BaseComponent {
    constructor() {
        super();
        let groupInput = new InputControl();
        groupInput.setHandlers({
            keyup: this.onKeyUp.bind(this)
        });
        this.append(groupInput);
    }

    /**
     * input keyup handler
     * @param {Object} event - event object
     */
    onKeyUp (event) {
        let value = _.get(event, 'target.value');
        this.dispatcher.notify(DispatcherCodes.GROUP_CHANGE, value ? GroupDetectionService.getGroupName(value) : '');
    }
}
