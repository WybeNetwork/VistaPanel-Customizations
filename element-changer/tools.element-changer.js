/** @preserve
 *  Created at 1st May 2023 by PlanetTheCloud (PlanetCloud).
 *  DO NOT REMOVE CREDITS!
 *  Created for: Wybe Network.
 */

/**
 * Generates an array list of PAGE.appGroups
 * Items along with it's file and group.
 * Handy for updating the documentation when changes were made 
 * @return object
 */
function associateFileDesc() {
    let result = {
            group: [],
            file: [],
            desc: []
        };
    PAGE.appGroups.forEach(group => {
        group.items.forEach(item => {
            result.group.push(group.group);
            result.file.push(item.file);
            result.desc.push(item.itemdesc);
        });
    });
    return result;
}