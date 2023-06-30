import Block from '../../utils/block';
import template from './register.hbs';
import Input from '../../components/input';
import Button from '../../components/button';
import {validate} from '../../utils/validation';

export class Register extends Block {
    constructor() {
        const content = {
            logo: 'MONOCHROME',
        };
        super(content);
    }

    init() {
        this.children.mailInput = new Input({
            type: 'email',
            name: 'email',
            placeholder: 'email',
            add_class: 'page__input-small',
            events: {
                blur: (e) => {
                    const emailValue = e.target.value.trim();
                    const emailValidate = validate(emailValue, ['emailForm']);
                    if (!emailValidate.isValid) {
                        console.log(emailValidate.message);
                    } else {
                        console.log(`Email - ${e.target.value}`);
                    }
                },
            },
        });

        this.children.loginInput = new Input({
            type: 'text',
            name: 'login',
            placeholder: 'логин',
            add_class: 'page__input-small',
            events: {
                blur: (e) => {
                    const loginValue = e.target.value.trim();
                    const loginValidate = validate(loginValue, ['loginForm']);
                    if (!loginValidate.isValid) {
                        console.log(loginValidate.message);
                    } else {
                        console.log(`Логин - ${e.target.value}`);
                    }
                },
            },
        });

        this.children.firstName = new Input({
            type: 'text',
            name: 'first_name',
            placeholder: 'имя',
            add_class: 'page__input-small',
            events: {
                blur: (e) => {
                    const firstName = e.target.value.trim();
                    const firstNameValid = validate(firstName, ['nameForm']);
                    if (!firstNameValid.isValid) {
                        console.log(firstNameValid.message);
                    } else {
                        console.log(`Имя - ${e.target.value}`);
                    }
                },
            },
        });

        this.children.secondName = new Input({
            type: 'text',
            name: 'first_name',
            placeholder: 'фамилия',
            add_class: 'page__input-small',
            events: {
                blur: (e) => {
                    const secondName = e.target.value.trim();
                    const secondNameValid = validate(secondName, ['nameForm']);
                    if (!secondNameValid.isValid) {
                        console.log(secondNameValid.message);
                    } else {
                        console.log(`Фамилия - ${e.target.value}`);
                    }
                },
            },
        });

        this.children.phoneInput = new Input({
            type: 'text',
            name: 'phone',
            placeholder: 'телефон',
            add_class: 'page__input-small',
            events: {
                blur: (e) => {
                    const phone = e.target.value.trim();
                    const phoneValid = validate(phone, ['phoneForm']);
                    if (!phoneValid.isValid) {
                        console.log(phoneValid.message);
                    } else {
                        console.log(`Телефон - ${e.target.value}`);
                    }
                },
            },
        });

        this.children.passwordInput = new Input({
            type: 'password',
            name: 'password',
            placeholder: 'пароль',
            add_class: 'page__input-small',
            events: {
                blur: (e) => {
                    const password = e.target.value.trim();
                    const passwordValidate = validate(password, [
                        'passwordForm',
                    ]);
                    if (!passwordValidate.isValid) {
                        console.log(passwordValidate.message);
                    } else {
                        console.log(`Пароль - ${e.target.value}`);
                    }
                },
            },
        });

        this.children.passwordAgain = new Input({
            type: 'password',
            name: 'password',
            placeholder: 'пароль (ещё раз)',
            add_class: 'page__input-small',
        });

        this.children.loginBtn = new Button({
            text: 'ЗАРЕГЕСТРИРОВАТЬСЯ',
            add_class: 'btn-big',
            type: 'submit',
            events: {
                click: (e) => {
                    e.preventDefault();
                    const formData = {
                        email: this.children.mailInput.element.value.trim(),
                        login: this.children.loginInput.element.value.trim(),
                        firstName: this.children.firstName.element.value.trim(),
                        secondName:
                            this.children.secondName.element.value.trim(),
                        phone: this.children.phoneInput.element.value.trim(),
                        password:
                            this.children.passwordInput.element.value.trim(),
                        passwordAgain:
                            this.children.passwordAgain.element.value.trim(),
                    };
                    console.log(formData);
                },
            },
        });

        this.children.regBtn = new Button({
            text: 'войти',
            add_class: 'btn-medium',
            type: 'submit',
            events: {
                click: (e) => {
                    e.preventDefault();
                },
            },
        });
    }

    render() {
        return this.compile(template, {...this.props});
    }
}

export default Register;
