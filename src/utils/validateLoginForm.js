export const validateLoginForm = (field, value) => {
    const isEmailValid = /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/.test(value), isPasswordValid = /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*[@$!%*?&])[A-Za-z\d@$!%*?&]{8,}$/.test(value), isNameValid = /([a-zA-Z0-9_\s]+)/.test(value);
    switch(field) {
        case 'Email': if(!value) return "Email is required"
        else if(!isEmailValid) return "Email is invalid"
        else return
        case 'Password': if(!value) return "Password is required"
        else if(!isPasswordValid) return "Password is invalid"
        else return
        case 'Name': if(!value) return "Name is required"
        else if(!isNameValid) return "Name is Invalid"
        else return
        default: return "";
    }
}