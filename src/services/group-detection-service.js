/** Group detection service */
class GroupDetectionService {
    /**
     * returns the group name depending on value
     * @param {String} value - value to calculate group name.
     * @returns {String}
     */
    static getGroupName(value) {
        let result = null;
        _.each(GroupsMap, (group) => {
            let regEx = new RegExp(group.condition);
            if (regEx.test(value)) {
                result = group.name;
                return false;
            }
        });
        return result;
    }
}