/*!
* Project: Theme Switcher
* Version: 2.0.0
* Description: Allows you to add an option in your MyOwnFreeHost vPanel to allow users to switch to any theme that they want
* Author: Wybe Network (https://wybenetwork.com/)
* Created at: October 14th, 2022
* Created by: AADev
* Thanks to PlanetCloud for Code Optimization tips
* Docs: https://docs.wybenetwork.com/
*
* DO NOT REMOVE CREDITS
* */

class ThemeSwitcher {
    #position;
    #baseURL;
    #themeList;
    curTheme = '';

    constructor(themeList, args) {
        this.#themeList = themeList;
        this.#position = args.position || 'bottom';
        this.#baseURL = args.baseURL || 'https://vpt.cdn.wybenetwork.com/';

        const cookie = document.cookie.match(new RegExp('(^| )wnCurTheme=([^;]+)'));

        this.curTheme = (cookie) ? cookie[2] : 'Default';
        if (cookie || args.default) this.setActiveStyle((args.default) ? `${args.default.dir}___${args.default.type}` : this.curTheme);

        document.addEventListener('readystatechange', event => {
            if (event.target.readyState === "complete") this.insertElement();
        });
    }

    #insertBottom() {
        let el = `<form>` +
            `<select id="wn-theme-switcher" onchange="wnThemeSwitcher.curTheme = value; wnThemeSwitcher.setActiveStyle(value);" name="ext">`;

        el += (this.curTheme === 'Default') ? `<option value="Default___normal" disabled selected>Default</option>` : '';

        this.#themeList.forEach((val) => {
            el += `<option value="${val.dir}___${val.type}" ${((val.dir + '___' + val.type) === this.curTheme) ? 'selected' : ''}>${val.title}</option>`;
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
        this.#themeList.forEach((val) => {
            html += `<li><a href="#" onclick="wnThemeSwitcher.curTheme = ${val.dir}; wnThemeSwitcher.setActiveStyle('${val.dir}___${val.type}');">${val.title}</a></li>`;
        });
        newEl.innerHTML = html;
        el.parentNode.insertBefore(newEl, el.nextSibling);
    }

    insertElement() {
        (this.#position === 'bottom') ? this.#insertBottom() : (this.#position === 'usernav') ? this.#insertUserNav() : '';
    }

    setActiveStyle(value) {
        const val = value.split('___');
        const dir = val[0];
        const type = val[1];
        const cookie = document.cookie.match(new RegExp('(^| )wnCurTheme=([^;]+)'));

        if (cookie) {
            try {
                document.getElementById(cookie[2]).remove();
                document.getElementById(cookie[2] + '___icon').remove();
            } catch (e) {
                console.log(e);
            }
        }

        const theme = `<link id="${value}" rel="stylesheet" type="text/css" href="${this.#baseURL + dir}/${(type === 'special') ? 'panel.css' : 'styles.css'}" />`
            + `${(type === 'normal') ? `<link id="${value}___icon" rel="stylesheet" type="text/css" href="${this.#baseURL + dir}/icon_spritemap.css" />` : ''}`
        document.head.insertAdjacentHTML('beforeend', theme);

        const exp = new Date();
        exp.setTime(exp.getTime() + (3650*24*60*60*1000));
        if (this.curTheme !== 'Default') document.cookie = `wnCurTheme=${value}; expires=${exp}; path=/`;

        if (this.#position === 'usernav') {
            try {
                document.getElementById('wnThemeSwitcherOptions').remove();
            } catch(e) {
                console.log(e);
            }
        }
    }
}