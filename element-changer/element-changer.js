/* @preserve
*  Created at 15 September 2022 by Anyx and modified by PlanetCloud.
*  Last modified at 19 September 2022 by PlanetCloud.
*  DO NOT REMOVE CREDITS!
*  Created for: Wybe Network.
*/
function indexPanelElements() {
    let panelElementsIndex = [],
        g = i = 0;
    PAGE.appGroups.forEach(group => {
        group.items.forEach(item => {
            if (typeof panelElementsIndex[item.itemdesc] == 'undefined') {
                panelElementsIndex[item.itemdesc] = [];
            }
            panelElementsIndex[item.itemdesc].push({
                group: g,
                item: i
            });
            i++;
        });
        g++;
        i = 0;
    });
    return panelElementsIndex;
}

(() => {
    if (typeof changeElements == "undefined") {
        return console.log("ElementChanger: changeElements variable is not defined. No elements changed.");
    }
    if (changeElements.length == 0) {
        return console.log('ElementChanger: Nothing to modify.');
    }

    // Index changeElements
    var toChange = {
        modify: [],
        remove: []
    };
    changeElements.forEach(e => {
        if (typeof e.action == 'undefined') {
            e.action = 'modify';
        }
        if (!['modify', 'remove'].includes(e.action)) {
            console.log(`ElementChanger: Illegal action ${e.action} specified for the following element:`, e);
            return;
        }
        toChange[e.action].push(e);
    });

    // Remove elements
    if (toChange.remove.length > 0) {
        panelElementsIndex = indexPanelElements();
        toChange.remove.forEach(r => {
            if (typeof panelElementsIndex[r.name] == 'undefined') {
                return console.log(`ElementChanger: Trying to remove element ${r.name} which does not exist.`)
            }
            panelElementsIndex[r.name].forEach(e => {
                PAGE.appGroups[e.group].items = PAGE.appGroups[e.group].items.filter(i => i.itemdesc != r.name);
            });
        });
    }

    // Modify elements
    panelElementsIndex = indexPanelElements();
    toChange.modify.forEach(c => {
        if (typeof panelElementsIndex[c.name] == 'undefined') {
            return console.log(`ElementChanger: Trying to change element ${c.name} which does not exist.`);
        }
        panelElementsIndex[c.name].forEach(e => {
            PAGE.appGroups[e.group].items[e.item][c.attr] = c.value;
        })
    });

    // Done!
    console.log('ElementChanger: All modifications have been made.');
})();