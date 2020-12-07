import { Model } from "./Model";
import { EMAIL_REGEXP } from "../common/regexp";
import { required, getCompareValidator, getLengthValidator, getMatchValidator } from "../common/validators";
import momemt from "moment";

/**
 * Класс отражающий сущьность пользователя
 * @extends Model
 **/
export class User extends Model {
  static LOGIN_SCENARIO = "login";
  static SIGNUP_SCENARIO = "signup";
  static UPDATE_SCENARIO = "update";

  static PHOTO_TYPES = ["image/jpeg", "image/gif", "image/png" ];
  static PHOTO_KB_SIZE = 50000000;

  /**
   * ID пользователя в базе данных
   * @type int
   **/
  id;
  /**
   * Имя пользователя
   * @type string
   **/
  name;

  /**
   * Фамилия пользователя
   * @type string
   **/
  surname;

  /**
   * Дата рождения пользователя
   * @type string
   **/
  birthday;

  /**
   * Пароль
   * @type string
   **/
  password;
  /**
   * Подверждение ввода пароля
   * @type string
   **/
  rePassword;
  /**
   * Почта
   * @type string
   **/
  email;
  /**
   * Роли пользователя
   * @type Array
   **/
  roles = [];

  /**
   * Ссылка на фото пользовтеля
   * @type String
   **/
  _photo;

  get photo() {
    return `/${ this._photo || "images/no-avatar.png" }`;
  }

  set photo( value ) {
    this._photo = value;
  }

  /**
   * Правила валидации модели, с учетом разных стратегий
   * @type Object
   **/
  _rules = {
    signup: [
      [ "name", [ required, getLengthValidator( 4 ) ] ],
      [ "password", [ required, getLengthValidator( 6, 60 ) ] ],
      [ "rePassword", [ getCompareValidator( "password") ] ],
      [ "email", [ required, getLengthValidator( 5 ), getMatchValidator( EMAIL_REGEXP ) ] ],
    ],
    login: [
      [ "email", [ required ] ],
      [ "password", [ required ] ],
    ],
    update: [
    ]
  };

  /**
   * Маппинг текстовых ошибок валидации бека, на наш перевод
   * @type Object
   **/
  _errorTranslates = {
    "The email has already been taken.": "Адресс электронной почты уже используется",
    "Wrong username or password": "Неверный email или пароль",
  }

  /**
   * Получить Label для атрибута модели
   * @override  Переопределение родительского метода
   *
   * @return { Object }
   **/
  attributeLabels() {
    return {
      name: "Имя",
      surname: "Фамилия",
      birthday: "Дата рождения",
      password: "Пароль",
      rePassword: "Повтор пароля",
      email: "E-mail",
      photo: "Фото"
    };
  }

  /**
   * Получить даные о пользователе в виде простого обьекта
   * @override  Переопределение родительского метода
   *
   * @return { Object }
   **/
  getData() {
    return {
      name: this.name,
      surname: this.surname,
      birthday: this.birthday,
      password: this.password,
      password_confirmation: this.rePassword,
      email: this.email,
      photo: this.photo
    };
  }

  /**
   * Получить количество лет, исходя из даты рождения
   * @return { String }
   **/
  getAge() {
    if ( !this.birthday ) {
      return null;
    }
    return momemt( this.birthday ).toNow(true);
  }
}
