/*!
* Project: Theme Switcher
* name: theme-switcher.js
* Version: 2.0.0
* Description: Allows you to add an option in your MyOwnFreeHost vPanel to allow users to switch to any theme that they want
* Author: Wybe Network
* Author URL: https://wybenetwork.com/
* Created at: October 14th, 2022
* Created by: AADev
* Docs: https://docs.wybenetwork.com/
*
* DO NOT REMOVE CREDITS
* */

class ThemeSwitcher {
    #position;
    #baseURL;
    #themeList;
    #curTheme = '';

    constructor(themeList, args={baseURL:'https://vpt.cdn.wybenetwork.com/', position:'bottom'}) {
        this.#position = (args.position) ? args.position : 'bottom';
        this.#themeList = themeList;
        this.#baseURL = (args.baseURL) ? args.baseURL : 'https://vpt.cdn.wybenetwork.com/';

        const cookie = document.cookie.match(new RegExp('(^| )wnCurTheme=([^;]+)'));

        if (cookie) {
            this.#curTheme = cookie[2];
            this.setActiveStyle(this.#curTheme);
        } else {
            if (args.default) {
                Object.entries(args.default).forEach(([key, val]) => {
                    this.#curTheme = `${key}___${val}`;
                    this.setActiveStyle(this.#curTheme);
                })
            }
            this.#curTheme = 'Default';
        }

        document.addEventListener('readystatechange', event => {
            if (event.target.readyState === "complete") {
                this.insertElement();
            }
        });
    }

    #insertBottom() {
        let el = `<form>` +
            `<select id="wn-theme-switcher" onchange="wnThemeSwitcher.setActiveStyle(value);" name="ext">`;

        if (this.#curTheme === 'Default') {
            el += `<option value="Default___Normal" disabled selected>Default</option>`;
        }

        Object.entries(this.#themeList).forEach(([key, val]) => {
            el += `<option value="${key}___${val.type}" ${((key + '___' + val.type) === this.#curTheme) ? 'selected' : ''}>${val.title}</option>`;
        });

        el += `</select>` +
            `</form>`;
        document.getElementById("content").insertAdjacentHTML('beforeend', el);
    }

    #insertUserNav() {
        const style = document.createElement('style');
        style.innerHTML = `
        #wnThemeSwitcher #lnkUserPrefChangePwd:before {
            content: "\\f1fc"!important;
        }
        `;
        document.head.appendChild(style);
        const el = document.getElementById('lnkUserPrefChangeLang').parentElement;
        const newEl = document.createElement('li');
        newEl.setAttribute('id', 'wnThemeSwitcher')
        const newSub = document.createElement('a');
        newSub.setAttribute('id', 'lnkUserPrefChangePwd');
        newSub.setAttribute('href', '#');
        newSub.setAttribute('onclick', `wnThemeSwitcher.themeOptions();`);
        newSub.innerHTML = 'Change Theme';
        newEl.appendChild(newSub);
        el.parentNode.insertBefore(newEl, el.nextSibling);
    }

    themeOptions() {
        const el = document.getElementById('lnkUserPrefChangeLang').parentElement.parentElement;
        const newEl = document.createElement('ul');
        newEl.setAttribute('id', 'wnThemeSwitcherOptions');
        newEl.setAttribute('class', 'dropdown-menu dropdown-menu-right');
        newEl.setAttribute('style', 'display: block;');
        let html = '';
        Object.entries(this.#themeList).forEach(([key, val]) => {
            html += `<li><a href="#" onclick="wnThemeSwitcher.setActiveStyle('${key}___${val.type}')">${val.title}</a></li>`;
        });
        newEl.innerHTML = html;
        el.parentNode.insertBefore(newEl, el.nextSibling);
    }

    insertElement() {
        (this.#position === 'bottom') ? this.#insertBottom() : (this.#position === 'usernav') ? this.#insertUserNav() : '';
    }

    setActiveStyle(value) {
        const dir = value.split('___')[0];
        const type = value.split('___')[1];
        const style = {
            url: this.#baseURL + dir + '/'
        };
        const cookie = document.cookie.match(new RegExp('(^| )wnCurTheme=([^;]+)'));
        if (cookie) {
            try {
                document.getElementById(cookie[2]).remove();
                document.getElementById(cookie[2] + '___icon').remove();
            } catch (e) {
                console.log(e);
            }
        }
        let theme;
        switch(type) {
            case 'Normal': style.url += 'styles.css';
                style.icon = this.#baseURL + dir + '/' + 'icon_spritemap.css';
                theme = `<link id="${value}" rel="stylesheet" type="text/css" href="${style.url}" />` +
                `<link id="${value}___icon" rel="stylesheet" type="text/css" href="${style.icon}" />`;
                break;
            case 'Special': style.url += 'panel.css';
                theme = `<link id="${value}" rel="stylesheet" type="text/css" href="${style.url}" />`;
                break;
            case 'Lite': style.url += 'styles.css';
                theme = `<link id="${value}" rel="stylesheet" type="text/css" href="${style.url}" />`;
                break;
            default: console.log('No Custom Theme Loaded!');
                break;
        }
        document.head.insertAdjacentHTML('beforeend', theme);

        const exp = new Date();
        exp.setTime(exp.getTime() + (3650*24*60*60*1000));
        document.cookie = `wnCurTheme=${value}; expires=${exp}; path=/`;

        if (this.#position === 'usernav') {
            try {
                document.getElementById('wnThemeSwitcherOptions').remove();
            } catch(e) {
                console.log(e);
            }
        }
    }
}

const wnThemeSwitcher = new ThemeSwitcher({
    'gradient-blue': {
        title: 'Gradient Blue',
        type: 'Normal'
    },
    'light': {
        title: 'Light Theme',
        type: 'Normal'
    },
    'lightspace-blue': {
        title: 'Lightspace Blue',
        type: 'Special'
    },
}, {
    default: {
        'dark-discord': 'Normal'
    }
})