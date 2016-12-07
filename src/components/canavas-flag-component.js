/** Canvas Flag Component */
class CanavasFlagComponent extends BaseComponent {
    constructor() {
        super();
        let canvasFlagInput = new InputControl();
        canvasFlagInput.setValue(Html5FeaturesDetectionService.isCanvas() ? 1 : 0);
        canvasFlagInput.setVisibility(false);
        this.append(canvasFlagInput);
    }
}