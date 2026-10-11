import { HttpInterceptorFn } from '@angular/common/http';
import { inject } from '@angular/core';
import { timeout } from 'rxjs';

import { AuthStateService } from './auth-state.service';

const API_TIMEOUT_MS = 8000;

export const authInterceptor: HttpInterceptorFn = (req, next) => {

  const authState = inject(AuthStateService);

  const accessToken =
    authState.session()?.accessToken;

  const isAuthRequest = req.url.includes('/api/auth/');

  const request = accessToken && !isAuthRequest
    ? req.clone({
        setHeaders: {
          Authorization: `Bearer ${accessToken}`
        }
      })
    : req;

  return next(request).pipe(
    timeout(API_TIMEOUT_MS)
  );
};