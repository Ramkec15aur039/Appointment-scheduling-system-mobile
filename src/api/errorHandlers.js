/******************************** Response Handler ************************************/
export const responseStatusHandler = response => {
  switch (response.status) {
    case 400:
      return response;
    case 401:
      return {error: 'Unauthorized'};
    case 402:
      return {error: 'Payment Required'};
    case 403:
      return {error: 'Forbidden'};
    case 404:
      return {error: 'Not Found'};
    case 405:
      return {error: 'Method Not Allowed'};
    case 406:
      return {error: 'Not Acceptable'};
    case 408:
      return {error: 'Request Timeout'};
    case 409:
      return {error: 'Request Already Exist'}; // Conflict
    case 410:
      return {error: 'permanently deleted from server'};
    case 500:
      return {error: 'Internal Server Error'};
    case 501:
      return {error: 'Not Implemented'};
    case 502:
      return {error: 'Bad Gateway'};
    case 503:
      return {error: 'Service Unavailable'};
    case 504:
      return {error: ' Gateway Timeout'};
    case 511:
      return {error: ' Network Authentication Required'};
    case 200:
    case 201:
      return response;
    default:
      return false;
  }
};

/******************************** Error Handler ************************************/
export const errorHandler = error => {
  return false;
};
