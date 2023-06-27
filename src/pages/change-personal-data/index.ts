import Block from "../../utils/Block";
import template from './change-personal-data.hbs';
import Button from "../../components/button";
import Img from "../../components/img";
import img from "../../../static/img/cat_err.png";
import Input from "../../components/input";

export class ChangeData extends Block {
    constructor() {
        super({});
    }

    init() {

        this.children.avatar = new Img({
            src: img,
            alt: 'Avatar',
            add_class: 'setting_avatar'
        })

        this.children.mailInput = new Input({
            type: "email",
            name: "email",
            placeholder: "email",
            add_class: "page__input-small"
        });

        this.children.loginInput = new Input({
            type: "text",
            name: "login",
            placeholder: "логин",
            add_class: "page__input-small"
        });

        this.children.firstName = new Input({
            type: "text",
            name: "first_name",
            placeholder: "имя",
            add_class: "page__input-small"
        });

        this.children.secondName = new Input({
            type: "text",
            name: "first_name",
            placeholder: "фамилия",
            add_class: "page__input-small"
        });

        this.children.phoneInput = new Input({
            type: "text",
            name: "phone",
            placeholder: "телефон",
            add_class: "page__input-small"
        });

        this.children.saveBtn = new Button({
            text: "СОХРАНИТЬ",
            add_class: "btn-big",
            type: "submit",
            events: {
                click: (e) => {
                    e.preventDefault()
                }
            }
        })

        this.children.backBtn = new Button({
            text: "назад",
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

export default ChangeData;
