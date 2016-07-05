"use strict";
var core_1 = require('@angular/core');
var http_1 = require('@angular/http');
var testing_1 = require('@angular/http/testing');
var top_menu_service_1 = require('./top-menu.service');
describe('top-menu-service', function () {
    var service;
    var backend;
    beforeEach(function () {
        var injector = core_1.ReflectiveInjector.resolveAndCreate([
            top_menu_service_1.TopMenuService,
            http_1.BaseRequestOptions,
            testing_1.MockBackend,
            core_1.provide(http_1.Http, {
                useFactory: function (mockBackend, defaultOptions) { return new http_1.Http(mockBackend, defaultOptions); },
                deps: [testing_1.MockBackend, http_1.BaseRequestOptions]
            })
        ]);
        service = injector.get(top_menu_service_1.TopMenuService);
        backend = injector.get(testing_1.MockBackend);
    });
    afterEach(function () { return backend.verifyNoPendingRequests(); });
    it('should get status', function () {
        backend.connections.subscribe(function (c) {
            expect(c.request.url).toEqual('./app/top-menu/data/top-menu-data.json');
            c.mockRespond(new http_1.Response(new http_1.ResponseOptions({ body: '{"data":[{"title":"test title","linkUrl":"#"}]}' })));
        });
        service.getMenuItems().subscribe(function (status) {
            expect(status).not.toBe(null);
        });
    });
});
//# sourceMappingURL=top-menu.service.spec.js.map