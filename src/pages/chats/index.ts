import Block from "../../utils/Block";
import template from './chats.hbs'
import Input from "../../components/input";
import Button from "../../components/button";
import {validate} from "../../utils/validation";

export class Chats extends Block {
    constructor() {
        const content = {
            logo: "MONOCHROME"
        }
        super(content);
    }

    init() {
        this.children.loginInput = new Input({
            type: "text",
            name: "login",
            placeholder: "логин",
            add_class: "page__input-big",
            events: {
                blur: (e) => {
                    const loginValue = e.target.value.trim();
                    const loginValidate = validate(loginValue,
                        ['req', 'minLen:3', 'maxLen:20', 'noSpaces', 'noSpecChar'])
                    if (!loginValidate.isValid) {
                        console.log(loginValidate.message)
                    } else {
                        console.log(`Логин - ${e.target.value}`)
                    }
                }
            }
        });

        this.children.passwordInput = new Input({
            type: "password",
            name: "password",
            placeholder: "пароль",
            add_class: "page__input-big",
            events: {
                blur: (e) => {
                    const passwordValue = e.target.value.trim();
                    const passwordValidate = validate(passwordValue,
                        ['req', 'oneUpperReq', 'oneDigitReq'])
                    console.log(`Пароль - ${e.target.value}`)
                    // if (!passwordValidate.isValid) {
                    //     console.log(passwordValidate.message)
                    // } else {
                    //     console.log(`Пароль - ${e.target.value}`)
                    // }
                }
            }
        });

        this.children.loginBtn = new Button({
            text: "ВОЙТИ",
            add_class: "btn-big",
            type: "submit",
            events: {
                click: (e) => {
                    e.preventDefault()
                }
            }
        })

        this.children.regBtn = new Button({
            text: "зарегистрироваться",
            add_class: "btn-medium",
            type: "submit",
            events: {
                click: (e) => {
                    e.preventDefault()
                }
            }
        })

    }
    render() {
        return this.compile(
            template, {...this.props})
    }
}

export default Chats;
