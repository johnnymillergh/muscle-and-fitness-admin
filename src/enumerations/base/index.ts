/**
 * Customizable base enumeration
 * @author Johnny Miller (鍾俊), e-mail: johnnysviva@outlook.com
 * @date 5/9/20 11:28 AM
 */
export class BaseEnumeration {
}

/**
 * Extendable enumeration base class
 * @author Johnny Miller (鍾俊), e-mail: johnnysviva@outlook.com
 * @date 5/9/20 11:29 AM
 */
export class BaseExtendableEnumeration {
  /**
   * The value.
   */
  private readonly _value: number
  /**
   * The description.
   */
  private readonly _description: string

  constructor (value: number, description: string) {
    this._value = value
    this._description = description
  }

  get value (): number {
    return this._value
  }

  get description (): string {
    return this._description
  }
}

/**
 * Non-extendable enumeration base class
 * @author Johnny Miller (鍾俊), e-mail: johnnysviva@outlook.com
 * @date 5/9/20 11:30 AM
 */
export class BaseNonExtendableEnumeration {
  /**
   * The value.
   */
  private readonly _value: number
  /**
   * The description.
   */
  private readonly _description: string

  constructor (value: number, description: string) {
    this._value = value
    this._description = description
    Object.freeze(this)
  }

  get value (): number {
    return this._value
  }

  get description (): string {
    return this._description
  }
}
