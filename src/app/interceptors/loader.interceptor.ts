import { Injectable } from '@angular/core';
import {
  HttpRequest,
  HttpHandler,
  HttpEvent,
  HttpInterceptor
} from '@angular/common/http';
import { Observable, delay, delayWhen, finalize, timer } from 'rxjs';
import { LoaderService } from '../services/loader.service';

@Injectable()
export class LoaderInterceptor implements HttpInterceptor {

  constructor(private loaderService: LoaderService) { }

  intercept(request: HttpRequest<unknown>, next: HttpHandler): Observable<HttpEvent<unknown>> {
    this.loaderService.show()
    return next.handle(request).pipe(
      // delayWhen(() => timer(100)), //delaying the request, just to make the ploader visible
      finalize(() => {
        this.loaderService.hide();
      })
    );
  }
}
