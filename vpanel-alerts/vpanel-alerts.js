/*!
* Project: vPanel Alerts (Previously vPanel Notifications)
* Version: 1.0.1
* Description: Allows you to show alert to logged in user
* Author: Wybe Network (https://wybenetwork.com/)
* Created: AADev (October 16th, 2022)
* Updated: AADev (October 28th, 2022)
* Thanks to PlanetCloud for Suggestions & code for storing multiple ids in one localstorage item
* Docs: https://docs.wybenetwork.com/
*
* DO NOT REMOVE CREDITS
* */

class vPanelAlerts {
    #alert;

    constructor(args=[]) {
        this.#alert = args;
        this.#addStyle();
        this.#showAlert();
    }

    #addStyle() {
        const style = document.createElement('style');
        style.innerHTML = `
                #wnAlerts {
                    z-index: 99999;
                    position: fixed;
                    top: 64px;
                    right: 16px;
                }
                .wnAlert .panel {
                    width: 250px;
                    padding: 15px;
                    box-shadow: 2px 5px 5px #00000017;
                    border-radius: 0;
                    transform: translateX(200%);
                    transition: .5s ease-in-out;
                }
                .wnAlert .wnContainer {
                    display: flex;
                }
                .wnAlert h3 {
                    margin-top: 0;
                }
                .wnAlert p {
                    margin-bottom: 0;
                }
                .wnAlert .wnContent {
                    margin-left: 10px;
                }
                .wnAlert .wnIcon {
                    align-self: center;
                    margin-right: 3px;
                }
                .wnAlert .wnIcon img {
                    height: 35px;
                    width: 35px;
                }
                .wnAlert .wnClose {
                    position: absolute;
                    right: 15px;
                    cursor: pointer;
                }
        `;
        document.head.appendChild(style);
    }

    #autoRemoveAlert() {
        this.#alert.forEach((v) => {
            if (v.interval) {
                setTimeout(() => {
                    this.removeAlert(`wnalert_${v.id}`);
                }, v.interval);
            }
        });
    }

    #showAlert() {
        const el = document.createElement('div');
        el.id = 'wnAlerts';
        document.body.insertAdjacentElement('beforeend', el);
        const al = document.getElementById('wnAlerts');
        let alID = localStorage.getItem('wnAlerts') ?? '';
        const al_id = (alID) ? alID.split('|') : '';
        this.#alert.forEach((v) => {
            if (((al_id) ? !al_id.includes(v.id) : 1)) {
                const html = `
                <div id="wnalert_${v.id}" class="wnAlert">
                    <div class="panel" style="transform: translateX(0); ${v.url ? 'cursor: pointer;' : ''}" ${(v.url) ? `onclick="window.open('${v.url}', '_blank')"` : ''}>
                        <div class="wnContainer">
                            <div class="wnIcon">
                                <img src="${v.icon}" alt="${v.title}"/>
                            </div>
                            <div class="wnContent">
                                <h3>${v.title}</h3>
                                <p>${v.desc}</p>
                            </div>
                            <div class="wnClose" onclick="wnAlerts.removeAlert('wnalert_${v.id}')">
                                <i class="fa fa-close"></i>
                            </div>
                        </div>
                    </div>
                </div>
                `;
                alID += `${v.id}|`;
                setTimeout(() => {
                    al.insertAdjacentHTML('afterbegin', html);
                }, (v.delay) ?? 0);
                localStorage.setItem('wnAlerts', alID);
            }
        });
        this.#autoRemoveAlert();
    }
    removeAlert(id) {
        const el = document.getElementById(id).childNodes[1];
        el.removeAttribute('style');
        setTimeout(() => {
          el.remove();
        }, 500);
    }
}