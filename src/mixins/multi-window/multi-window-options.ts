/**
 * Multi Window Options
 */
export interface MultiWindowOptions {
  /**
   * A DOMString specifying the name of the browsing context (window, <iframe> or tab) into which to load the specified resource;
   * if the name doesn't indicate an existing context, a new window is created and is given the name specified by windowName.
   */
  windowTarget?: string

  /**
   * Whether delay closing opened window for 300 ms. Default: true
   */
  delayClosingWindow?: boolean

  /**
   * Vue instance of opener callback function name
   */
  callback?: string

  /**
   * Other data
   */
  [key: string]: any
}
