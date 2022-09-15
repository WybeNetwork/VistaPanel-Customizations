/* @preserve
*  Created at 15 September 2022 by Anyx.
*  DO NOT REMOVE CREDITS!
*  Created for: Wybe Network.
*/
function updatePanelElements(group, item, attr, value) {
    PAGE.appGroups[group].items[item][attr] = value;
}

changeElements.forEach(function(index) {
    Object.entries(index).forEach(function(element) {
            element[1].forEach(function(key) {
                updatePanelElements((Object.keys(index)[0] - 1), (key.item - 1), key.attr, key.value)
            });
    });
});