'use strict';

angular.module('demo', ['angular-substance-editor'])

    .controller('demo', ['$scope', function ($scope) {

        $scope.text =
            '<p>My father’s family name being <a href="https://en.wikipedia.org/wiki/Pip_(Great_Expectations)"' +
            '>Pirrip</a>, and my Christian name Philip, my infant tongue could make of both names nothing long' +
            'er or more explicit than Pip. So, I called myself Pip, and came to be called Pip.</p>' +
            '<p>I give Pirrip as my father’s family name, on the authority of his tombstone and my sister,—Mrs' +
            '. Joe Gargery, who married the blacksmith. As I never saw my father or my mother, and never saw a' +
            'ny likeness of either of them (for their days were long before the days of photographs), my first' +
            'fancies regarding what they were like were unreasonably derived from their tombstones. The shape ' +
            'of the letters on my father’s, gave me an odd idea that he was a square, stout, dark man, with cu' +
            'rly black hair. From the character and turn of the inscription, “Also Georgiana Wife of the Above' +
            ',” I drew a childish conclusion that my mother was freckled and sickly. To five little stone loze' +
            'nges, each about a foot and a half long, which were arranged in a neat row beside their grave, an' +
            'd were sacred to the memory of five little brothers of mine,—who gave up trying to get a living, ' +
            'exceedingly early in that universal struggle,—I am indebted for a belief I religiously entertaine' +
            'd that they had all been born on their backs with their hands in their trousers-pockets, and had ' +
            'never taken them out in this state of existence.</p>' +
            '<p>Ours was the marsh country, down by the river, within, as the river wound, twenty miles of the' +
            ' sea. My first most vivid and broad impression of the identity of things seems to me to have been' +
            ' gained on a memorable raw afternoon towards evening. At such a time I found out for certain that' +
            ' this bleak place overgrown with nettles was the churchyard; and that Philip Pirrip, late of this' +
            ' parish, and also Georgiana wife of the above, were dead and buried; and that Alexander, Bartholo' +
            'mew, Abraham, Tobias, and Roger, infant children of the aforesaid, were also dead and buried; and' +
            ' that the dark flat wilderness beyond the churchyard, intersected with dikes and mounds and gates' +
            ', with scattered cattle feeding on it, was the marshes; and that the low leaden line beyond was t' +
            'he river; and that the distant savage lair from which the wind was rushing was the sea; and that ' +
            'the small bundle of shivers growing afraid of it all and beginning to cry, was Pip.</p>';

    }]);
