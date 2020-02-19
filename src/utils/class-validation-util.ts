// eslint-disable-next-line no-unused-vars
import { ValidationError } from 'class-validator/validation/ValidationError'

export class ClassValidationUtil {
  /**
   * Get first validation error
   * @param {ValidationError[]} validationErrors validation error array
   * @return {string} error message
   * @author Johnny Miller (鍾俊), e-mail: johnnysviva@outlook.com
   * @date 1/2/20 11:39 AM
   */
  static getFirstValidationError = (validationErrors: ValidationError[]): string => {
    let firstErrorMessage = ''
    for (const property in validationErrors[0].constraints) {
      firstErrorMessage += `Field: ${validationErrors[0].property}, type: ${property}, error message: ${validationErrors[0].constraints[property]}`
    }
    return firstErrorMessage
  }

  /**
   * Get all validation error
   * @param {ValidationError[]} validationErrors validation error array
   * @return {string} error message
   * @author Johnny Miller (鍾俊), e-mail: johnnysviva@outlook.com
   * @date 1/2/20 12:58 PM
   */
  static getAllValidationError = (validationErrors: ValidationError[]): string => {
    let errorMessage = ''
    validationErrors.forEach(validationError => {
      for (const property in validationError.constraints) {
        errorMessage += `Field: ${validationError.property}, type: ${property}, error message: ${validationError.constraints[property]}; `
      }
    })
    return errorMessage.substr(0, errorMessage.length - 2)
  }
}
