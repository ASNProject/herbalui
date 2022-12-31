import moment from "moment";
import "moment/locale/id";

const IMAGE_LOC = function (value) {
    let url = "https://staging.herbalinfo.site/" + value.replace("public", "storage")
    // console.log(url)
    return url
}

const PRODUCT_TITLE = function (value) {
    let limit = 29
    if (value.length > limit) {
        return value.substring(0, limit) + "..."
    }
    return value
}

const PRODUCT_PRICE = function (value) {
    return "Rp " + NUMBER_COMAS(value)
}

const NUMBER_COMAS = function (x) {
    return x.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ".");
}

const ARTICLE_TITLE = function (value) {
    let limit = 50
    if (value.length > limit) {
        return value.substring(0, limit) + "..."
    }
    return value
}

const LIMIT_STRING = function (value, max) {
    let limit = max
    if (value.length > limit) {
        return value.substring(0, limit) + "..."
    }
    return value
}

const DIPUBLIKASIKAN = function (value) {
    moment.locale("id");
    return moment(value).format('Do MMMM YYYY');
}

export {
    IMAGE_LOC,
    PRODUCT_TITLE,
    PRODUCT_PRICE,
    NUMBER_COMAS,
    ARTICLE_TITLE,
    DIPUBLIKASIKAN,
    LIMIT_STRING,
}