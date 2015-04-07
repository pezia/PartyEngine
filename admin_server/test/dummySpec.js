
var expect = require('expect.js'),
        when = require('when'),
        defer = when.defer,
        config = require('./config.test');

describe('Dummy 1', function () {
    describe('Dummy 1.1', function () {
        it('should pass', function () {
            expect(true).to.be.ok();
        });

        it('should pass too', function () {
            var dfd = defer();
            expect(when.isPromiseLike(dfd.promise)).to.be.ok();
        });
    });
});
