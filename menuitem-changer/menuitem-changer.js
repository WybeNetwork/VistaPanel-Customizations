/*!
* Project: Menu Item Changer
* Version: 1.0.0
* Description: Enable you to add, modify or remove menu items
* Author: Wybe Network (https://wybenetwork.com/)
* Created: AADev (October 19th, 2022)
* Docs: https://docs.wybenetwork.com/
*
* DO NOT REMOVE CREDITS
* */

class MenuitemChanger {
    #items;
    #defaultItems = ['Change Password', 'Change Language', 'Update Contact Email', 'Reset Page Settings'];

    constructor(args) {
        this.#items = args;

        document.addEventListener('readystatechange', event => {
            if (event.target.readyState === "complete") {
                if (this.#items.length === 0) throw "Nothing to add, remove or modify!";

                Object.entries(this.#items).forEach(([k, val]) => {
                    if (!val.name) throw "Error: Name value must be specified";

                    const el = document.getElementById('btnUserPref').nextElementSibling;

                    if (val.action === 'remove') {
                        this.#removeItem(val, el);
                    } else if (val.action === 'add') {
                        this.#addItem(val, el);
                    } else if (val.action === 'modify') {
                        this.#modifyItem(val, el);
                    }
                });
            }
        });
    }

    #modifyItem(val, el) {
        // text, link, order
        const index = this.#defaultItems.findIndex(v => {
            return v === val.name;
        });

        if (index === -1) throw "Invalid element name to modify";
        if (!val.url && !val.newName) throw "Options to modify doesn't specified";

        if (val.url) el.children.item(index).children.item(0).setAttribute('href', val.url);
        if (val.newName) el.children.item(index).children.item(0).innerHTML = val.newName;
    }

    #addItem(val, el) {
        if (!val.icon || !val.url || !val.order) throw "Arguments for adding element are not sufficient";

        const id = `wn_${val.name.toLowerCase().replace(/ /g,"_")}`;

        const style = document.createElement('style');

        style.innerHTML = `#${id} #lnkUserPrefChangePwd:before {
            content: "\\${val.icon}"!important;
        }`;

        document.head.appendChild(style);

        const html = `<li id="${id}">
                        <a id="lnkUserPrefChangePwd" href="${val.url}">${val.name}</a>
                      </li>`;

        (el.children.item(val.order)) ? el.children.item(val.order).insertAdjacentHTML('beforebegin', html) : el.insertAdjacentHTML('beforeend', html);
    }

    #removeItem(val, el) {
        const index = this.#defaultItems.findIndex(v => {
            return v === val.name;
        });

        if (index === -1) throw "Invalid name specified";

        this.#defaultItems.splice(index, 1);
        el.children.item(index).remove();
    }
}