describe('substanceEditor directive:', function () {

    var $compile;
    var $rootScope;

    beforeEach(module('angular-substance-editor'));

    beforeEach(inject(function (_$compile_, _$rootScope_) {
        $compile = _$compile_;
        $rootScope = _$rootScope_;
    }));


    /*    describe('Function: myProcedure', function () {
     it('should word', function () {
     var e = angular.element('<div><br /></div>');

     $compile(e)($rootScope);
     expect(true).toBe(true);

     });
     });*/

    it('should call the given save method on an on-click-save-event', function () {
        var directiveElem = $compile('<htm<><div substance></div>')($rootScope);
        $rootScope.$digest();
        var editor = directiveElem.find('div[class="sc-prose-editor"]');

        console.log(directiveElem);
        expect(editor).toBeDefined();

        expect(directiveElem.text()).toEqual('This span is appended from directive.');
    });

});
