
export const createCardValidScheme = {
    mail: {
        isEmail: true
    },
    username: {
        notEmpty: true
    },
    message: {
        notEmpty: true,
        escape: true
    }
}

export const getCardValidScheme= {

}

export const updateCardValidScheme = {
    id: {
        notEmpty: true
    },
    message: {
        notEmpty: true,
        escape: true
    }
}