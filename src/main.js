/** Main module. */
class ZdTestModule {
    /**
     * runs the module
     * @param {String|undefined} containerSelector - module container selector.
     */
    static run(containerSelector) {
        let container;
        let mainFormComponent;

        container = $(containerSelector);

        if (!container.length) {
            container = $('body');
        }

        mainFormComponent = new  MainFormComponent();
        mainFormComponent.render(container);
    }
}