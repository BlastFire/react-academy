export const vRequired = value => (value ? undefined : 'Required')
export const vMaxLength = max => value => value && value.length > max ? `Must be ${max} characters or less` : undefined
export const vMinLength = min => value => value && value.length < min ? `Must be ${min} characters or more` : undefined
export const vEmail = value => value && !/^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,4}$/i.test(value) ? 'Invalid email address' : undefined
