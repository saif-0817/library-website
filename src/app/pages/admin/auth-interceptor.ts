import { HttpInterceptorFn } from '@angular/common/http';

export const authInterceptor: HttpInterceptorFn = (req, next) => {

  const loggedUser = JSON.parse(localStorage.getItem('user') || 'null');


  if (!loggedUser) {
    return next(req);
  }

  const modifiedToken = req.clone({
    setHeaders: {
      Authorization: `Bearer ${loggedUser.idToken}`
    }
  })
  return next(modifiedToken);
};
