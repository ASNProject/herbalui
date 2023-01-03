import moment from "moment";
import "moment/locale/id";
import { useCallback } from "react";
import { Linking } from "react-native";

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

const OPEN_LINK = async (url) => {
    // Checking if the link is supported for links with custom URL scheme.
    const supported = await Linking.canOpenURL(url);
    if (supported) {
        // Opening the link with some app, if the URL scheme is "http" the web link should be opened
        // by some browser in the mobile
        await Linking.openURL(url);
    } else {
        Alert.alert(`Gagal membuka link`);
    }
}

export {
    IMAGE_LOC,
    PRODUCT_TITLE,
    PRODUCT_PRICE,
    NUMBER_COMAS,
    ARTICLE_TITLE,
    DIPUBLIKASIKAN,
    LIMIT_STRING,
    OPEN_LINK,
}