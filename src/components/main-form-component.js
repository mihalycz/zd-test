/** Main Form Component */
class MainFormComponent extends BaseComponent {
    constructor() {
        super();
        let mainFormControl = new FormControl();
        mainFormControl.append(new CanavasFlagComponent(), new GroupInputComponent(), new GroupNotificationComponent());
        this.append(mainFormControl);
    }
}