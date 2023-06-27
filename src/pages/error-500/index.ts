import img from '../../../static/img/cat_err.png'
import Img from "../../components/img";
import Block from "../../utils/Block";
import template from "./error-500.hbs"

export class Error500 extends Block {
    constructor() {
        const content = {
            logo: 'MONOCHROME',
            code: 'Сервис временно недоступен',
            text: 'Уже чиним',
            link: 'Вернуться к чатам'
        }
        super(content);
    }

    init() {
        this.children.errImage = new Img({
            src: img,
            alt: 'ERROR_IMAGE',
        });
    }

    render() {
        return this.compile(
            template, {...this.props})
    }
}

export default Error500;


