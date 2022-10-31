/*! @preserve
*  Created at 15 September 2022 by Anyx and modified by PlanetCloud.
*  Modified at 19 September 2022 by PlanetCloud.
*  Last modified at 25 September 2022 by PlanetCloud.
*  DO NOT REMOVE CREDITS!
*  Created for: Wybe Network.
*/
function indexAppGroups() {
    let elementsIndex = [],
        groupsIndex = [],
        g = i = 0;
    PAGE.appGroups.forEach(group => {
        group.items.forEach(item => {
            if (typeof elementsIndex[item.itemdesc] == 'undefined') {
                elementsIndex[item.itemdesc] = [];
            }
            elementsIndex[item.itemdesc].push({
                group: g,
                item: i
            });
            i++;
        });
        groupsIndex[group.group] = g;
        g++;
        i = 0;
    });
    return {
        panelElements: elementsIndex,
        groups: groupsIndex
    };
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
        // Remove first, then modify, then add
        remove: [],
        modify: [],
        add: []
    };
    changeElements.forEach(e => {
        if (typeof e.action == 'undefined') {
            e.action = 'modify';
        }
        if (!['modify', 'remove', 'add'].includes(e.action)) {
            console.log(`ElementChanger: Illegal action ${e.action} specified for the following element:`, e);
            return;
        }
        toChange[e.action].push(e);
    });

    // Remove elements
    if (toChange.remove.length > 0) {
        let elementsIndex = indexAppGroups().panelElements;
        toChange.remove.forEach(r => {
            if (typeof elementsIndex[r.name] == 'undefined') {
                return console.log(`ElementChanger: Trying to remove element "${r.name}" which does not exist.`)
            }
            elementsIndex[r.name].forEach(e => {
                PAGE.appGroups[e.group].items = PAGE.appGroups[e.group].items.filter(i => i.itemdesc != r.name);
            });
        });
    }

    // Modify elements
    let elementsIndex = indexAppGroups().panelElements;
    toChange.modify.forEach(c => {
        if (typeof elementsIndex[c.name] == 'undefined') {
            return console.log(`ElementChanger: Trying to change element "${c.name}" which does not exist.`);
        }
        elementsIndex[c.name].forEach(e => {
            PAGE.appGroups[e.group].items[e.item][c.attr] = c.value;
        })
    });

    // Add elements
    let groupsIndex = indexAppGroups().groups;
    var addedElementsIcon = [];
    toChange.add.forEach(a => {
        if (typeof groupsIndex[a.group] == 'undefined') {
            return console.log(`ElementChanger: Trying to add an element to "${a.group}" group which does not exist.`)
        }
        let file_id = `added_${a.name.replace(/\s+/g, '_')}${Math.floor(Math.random() * 100)}`;
        PAGE.appGroups[groupsIndex[a.group]].items.push({
            "file": file_id,
            "imgtype": "icon",
            "group": a.group,
            "itemdesc": a.name,
            "url": a.link,
            "type": "image",
            "height": "48",
            "width": "48",
            "searchtext": a.search_text ?? ""
        });
        addedElementsIcon.push({
            target: `icon-${file_id}`,
            icon: a.icon
        });
    });

    // Add icons to added elements
    function fixIcons() {
        if (document.getElementById('preferences-group') === null) {
            return setTimeout(() => {
                fixIcons();
            }, 100);
        }
        if (addedElementsIcon.length < 1) {
            return;
        }
        console.log('ElementChanger: Fixing icons');
        addedElementsIcon.forEach(e => {
            document.getElementById(e.target).innerHTML = `<img class="itemImageWrapper integrations_icon spriteicon_img" src="${e.icon}"/>`
        });
        return console.log('ElementChanger: All modifications have been made.');
    }
    document.addEventListener("DOMContentLoaded", () => {
        fixIcons();
    });

    // Done!
    if (addedElementsIcon.length < 1) {
        return console.log('ElementChanger: All modifications have been made.');
    }
})();