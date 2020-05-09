import { BaseEnumeration } from '@/enumerations/base'

class Status extends BaseEnumeration {
  /**
   * The HTTP status code.
   */
  private readonly _code: number
  /**
   * The message that explains what the HTTP status code is.
   */
  private readonly _message: string

  constructor (code: number, message: string) {
    super()
    this._code = code
    this._message = message
    Object.freeze(this)
  }

  get code (): number {
    return this._code
  }

  get message (): string {
    return this._message
  }
}

// noinspection JSUnusedGlobalSymbols
/**
 * <h1>HttpStatus</h1>
 * <p>Hypertext Transfer Protocol (HTTP) Status Code</p>
 * @author Johnny Miller (鍾俊), e-mail: johnnysviva@outlook.com
 * @date 2019-03-30
 * @time 12:15
 * @see <a href="https://www.iana.org/assignments/http-status-codes">HTTP Status Code Registry</a>
 * @see <a href="https://en.wikipedia.org/wiki/List_of_HTTP_status_codes">List of HTTP status codes</a>
 */
export const HttpStatus = {
  /*
    Value            Description                             Reference
     100   Continue                        [RFC7231, Section 6.2.1]
     101   Switching Protocols             [RFC7231, Section 6.2.2]
     102   Processing                      [RFC2518]
     103   Early Hints                     [RFC8297]
   104-199 Unassigned
     200   OK                              [RFC7231, Section 6.3.1]
     201   Created                         [RFC7231, Section 6.3.2]
     202   Accepted                        [RFC7231, Section 6.3.3]
     203   Non-Authoritative Information   [RFC7231, Section 6.3.4]
     204   No Content                      [RFC7231, Section 6.3.5]
     205   Reset Content                   [RFC7231, Section 6.3.6]
     206   Partial Content                 [RFC7233, Section 4.1]
     207   Multi-Status                    [RFC4918]
     208   Already Reported                [RFC5842]
   209-225 Unassigned
     226   IM Used                         [RFC3229]
   227-299 Unassigned
     300   Multiple Choices                [RFC7231, Section 6.4.1]
     301   Moved Permanently               [RFC7231, Section 6.4.2]
     302   Found                           [RFC7231, Section 6.4.3]
     303   See Other                       [RFC7231, Section 6.4.4]
     304   Not Modified                    [RFC7232, Section 4.1]
     305   Use Proxy                       [RFC7231, Section 6.4.5]
     306   (Unused)                        [RFC7231, Section 6.4.6]
     307   Temporary Redirect              [RFC7231, Section 6.4.7]
     308   Permanent Redirect              [RFC7538]
   309-399 Unassigned
     400   Bad Request                     [RFC7231, Section 6.5.1]
     401   Unauthorized                    [RFC7235, Section 3.1]
     402   Payment Required                [RFC7231, Section 6.5.2]
     403   Forbidden                       [RFC7231, Section 6.5.3]
     404   Not Found                       [RFC7231, Section 6.5.4]
     405   Method Not Allowed              [RFC7231, Section 6.5.5]
     406   Not Acceptable                  [RFC7231, Section 6.5.6]
     407   Proxy Authentication Required   [RFC7235, Section 3.2]
     408   Request Timeout                 [RFC7231, Section 6.5.7]
     409   Conflict                        [RFC7231, Section 6.5.8]
     410   Gone                            [RFC7231, Section 6.5.9]
     411   Length Required                 [RFC7231, Section 6.5.10]
     412   Precondition Failed             [RFC7232, Section 4.2][RFC8144, Section 3.2]
     413   Payload Too Large               [RFC7231, Section 6.5.11]
     414   URI Too Long                    [RFC7231, Section 6.5.12]
     415   Unsupported Media Type          [RFC7231, Section 6.5.13][RFC7694, Section 3]
     416   Range Not Satisfiable           [RFC7233, Section 4.4]
     417   Expectation Failed              [RFC7231, Section 6.5.14]
   418-420 Unassigned
     421   Misdirected Request             [RFC7540, Section 9.1.2]
     422   Unprocessable Entity            [RFC4918]
     423   Locked                          [RFC4918]
     424   Failed Dependency               [RFC4918]
     425   Too Early                       [RFC8470]
     426   Upgrade Required                [RFC7231, Section 6.5.15]
     427   Unassigned
     428   Precondition Required           [RFC6585]
     429   Too Many Requests               [RFC6585]
     430   Unassigned
     431   Request Header Fields Too Large [RFC6585]
   432-450 Unassigned
     451   Unavailable For Legal Reasons   [RFC7725]
   452-499 Unassigned
     500   Internal Server Error           [RFC7231, Section 6.6.1]
     501   Not Implemented                 [RFC7231, Section 6.6.2]
     502   Bad Gateway                     [RFC7231, Section 6.6.3]
     503   Service Unavailable             [RFC7231, Section 6.6.4]
     504   Gateway Timeout                 [RFC7231, Section 6.6.5]
     505   HTTP Version Not Supported      [RFC7231, Section 6.6.6]
     506   Variant Also Negotiates         [RFC2295]
     507   Insufficient Storage            [RFC4918]
     508   Loop Detected                   [RFC5842]
     509   Unassigned
     510   Not Extended                    [RFC2774]
     511   Network Authentication Required [RFC6585]
   512-599 Unassigned
     */

  // --- 2xx Success ---
  /**
   * OK
   */
  OK: new Status(200, 'OK. The standard response for successful HTTP requests.'),

  // --- 4xx Client Error ---
  /**
   * Bad request
   */
  BAD_REQUEST: new Status(400, 'Bad request. The server cannot or will not process the request due to an apparent client error.'),
  /**
   * Unauthorized
   */
  UNAUTHORIZED: new Status(401, 'Unauthorized. The requester is not authorized to access the resource.'),
  /**
   * Forbidden
   */
  FORBIDDEN: new Status(403, 'Forbidden. The request was formatted correctly but the server is refusing to supply the requested resource.'),
  /**
   * Not found
   */
  NOT_FOUND: new Status(404, 'Not found. The resource could not be found.'),
  /**
   * Method not allowed
   */
  METHOD_NOT_ALLOWED: new Status(405, 'The resource was requested using a method that is not allowed.'),
  /**
   * Not acceptable
   */
  NOT_ACCEPTABLE: new Status(406, 'Not acceptable. The requested resource is capable of generating only content not acceptable according to the Accept headers sent in the request.'),
  /**
   * Param not matched
   */
  PARAM_NOT_MATCH: new Status(460, 'Param not matched. The request could not be fulfilled due to the incorrect syntax of the request.'),
  /**
   * Param not null
   */
  PARAM_NOT_NULL: new Status(461, 'Param not null.'),
  /**
   * Invalid param
   */
  INVALID_PARAM: new Status(462, 'Invalid param'),
  /**
   * User disabled
   */
  USER_DISABLED: new Status(463, 'User disabled.'),
  /**
   * Failure
   */
  FAILURE: new Status(464, 'Failure. Business failure or operation failure.'),
  /**
   * Warning
   */
  WARNING: new Status(465, 'Warning. Operation may by possible danger or trouble.'),

  // --- 5xx Server Error ---
  /**
   * Error or failure
   */
  ERROR: new Status(500, 'Internal server error. A generic status for an error in the server itself.'),
  /**
   * Not implemented
   */
  NOT_IMPLEMENTED: new Status(501, 'Not implemented. The server either does not recognize the request method, or it lacks the ability to fulfil the request.'),
  /**
   * Bad gateway
   */
  BAD_GATEWAY: new Status(502, 'Bad gateway. The server was acting as a gateway or proxy and received an invalid response from the upstream server.'),
  /**
   * Service unavailable
   */
  SERVICE_UNAVAILABLE: new Status(503, 'Service unavailable. The server cannot handle the request (because it is overloaded or down for maintenance). Generally, this is a temporary state.'),
  /**
   * Gateway timeout
   */
  GATEWAY_TIMEOUT: new Status(504, 'Gateway timeout. The server was acting as a gateway or proxy and did not receive a timely response from the upstream server.'),
  /**
   * Role not found
   */
  ROLE_NOT_FOUND: new Status(552, 'Role not found.'),
  /**
   * Username or password is not correct or account error
   */
  BAD_CREDENTIALS: new Status(553, 'Username or password is not correct or account error.'),
  /**
   * Token expired
   */
  TOKEN_EXPIRED: new Status(554, 'Token expired.'),
  /**
   * Token parse error
   */
  TOKEN_PARSE_ERROR: new Status(555, 'Token parse error.'),
  /**
   * Token out of control
   */
  TOKEN_OUT_OF_CONTROL: new Status(556, 'Token out of control. Current user has logged in before. Please try to reset current password or sign in again.'),
  /**
   * Kick out self warning. Cannot kick self out.
   */
  KICK_OUT_SELF: new Status(557, 'Cannot kick self out. Please try to sign in again.'),

  /**
   * Get status by code.
   * @param code {Number} Code that server responded.
   * @throws Status not found error if the argument code is not defined.
   */
  getStatusByCode: (code?: number): Status => {
    if (!code) {
      throw new Error(`Invalid code: ${code}.`)
    }
    let status: Status = new Status(0, '')
    Object.keys(HttpStatus).forEach(statusKey => {
      // @ts-ignore
      if (typeof HttpStatus[statusKey] !== 'function' && HttpStatus[statusKey].code === code) {
        // @ts-ignore
        status = HttpStatus[statusKey]
      }
    })
    if (status.code === 0) {
      throw new Error(`Status not found! Given code: ${code}.`)
    }
    return status
  }
}

Object.freeze(HttpStatus)
