import { ReflectiveInjector, provide } from '@angular/core';

import { BaseRequestOptions, Response, ResponseOptions, Http } from '@angular/http';
import { MockBackend, MockConnection } from '@angular/http/testing';

import { TopMenuService } from './top-menu.service';
import { TopMenuItem } from './top-menu.model';

describe('top-menu-service', () => {
  
  let service: TopMenuService;
  let backend: MockBackend;
  
  beforeEach(() => {
   var injector = ReflectiveInjector.resolveAndCreate(<any> [
        TopMenuService,
        BaseRequestOptions,
        MockBackend,
        provide(Http, {
            useFactory: (mockBackend:any , defaultOptions:any) => new Http(mockBackend, defaultOptions),
            deps: [MockBackend, BaseRequestOptions]
        })
    ]);

    service = <TopMenuService> injector.get(TopMenuService);
    backend = <MockBackend> injector.get(MockBackend);
  });
  
  afterEach(() => backend.verifyNoPendingRequests());

   it('should get status', () => {

    backend.connections.subscribe((c: MockConnection) => {
      expect(c.request.url).toEqual('./app/top-menu/data/top-menu-data.json');
      c.mockRespond(new Response(new ResponseOptions({ body: '{"data":[{"title":"test title","linkUrl":"#"}]}' })));
    });
    
    service.getMenuItems().subscribe((status) => {
      expect(status).not.toBe(null);
    });
  });
});

