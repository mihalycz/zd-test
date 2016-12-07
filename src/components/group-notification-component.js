/** Group Name Notifier Component */
class GroupNotificationComponent extends BaseComponent {
    constructor() {
        super();
        this.notificationSpan = new SpanControl();
        this.dispatcher.attach(DispatcherCodes.GROUP_CHANGE, this.groupChangeHandler.bind(this));
        this.append(this.notificationSpan);
        this.setVisibility(false);
    }

    /**
     * group value change handler
     * @param {String|undefined} value - group name
     */
    groupChangeHandler (value) {
        if (value) {
            this.notificationSpan.setValue(value);
            this.setVisibility(true);
        } else {
            this.setVisibility(false);
        }
    }
}
