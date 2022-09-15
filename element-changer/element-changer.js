/* @preserve
*  Created at 15 September 2022 by Anyx and modified by PlanetCloud.
*  DO NOT REMOVE CREDITS!
*  Created for: Wybe Network.
*/
if (typeof changeElements !== "undefined") {
    ((changeElements) => {
        if (changeElements.length == 0) {
            return console.log('ElementChanger: Nothing to modify.');
        }
        var panelElementsIndex = [],
            groupIndex = 0;
        PAGE.appGroups.forEach(group => {
            var itemIndex = 0;
            group.items.forEach(item => {
                if (typeof panelElementsIndex[item.itemdesc] == 'undefined') {
                    panelElementsIndex[item.itemdesc] = [];
                }
                panelElementsIndex[item.itemdesc].push({
                    group: groupIndex,
                    item: itemIndex
                });
                itemIndex++;
            });
            groupIndex++;
        });
        changeElements.forEach(element => {
            if (typeof panelElementsIndex[element.name] !== 'undefined') {
                panelElementsIndex[element.name].forEach(e => {
                    PAGE.appGroups[e.group].items[e.item][element.attr] = element.value;
                })
            } else {
                console.log(`ElementChanger: Trying to change element ${element.name} which does not exist.`);
            }
        });
        console.log('ElementChanger: All modifications have been made.');
    })(changeElements);
} else {
    console.log("ElementChanger: changeElements variable is not defined. No elements changed.");
}