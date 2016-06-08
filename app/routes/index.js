import Ember from 'ember';

//this version is file i/o
//Always change tree model when modifying what attributes trees have.

export default Ember.Route.extend({
    afterModel: function() {
        this.store.push({
            data: [
                {id: 1, type: 'tree', attributes: {Common_Name: 'White Oak', Scientific_Name: 'Quercus alba', Image: '\\assets\\images\\trees\\01470_Quercus_alba.jpg', Description: 'This tree has tyloses that give the wood a closed cellular structure, making it water- and rot-resistant, thus it is used for wine and whiskey barrels and the USS Constitution ship structure.  The fruit is an acorn, a valuable food for turkeys, wood ducks, pheasants, grackles, jays, nuthatches, thrushes, woodpeckers, rabbits, squirrels, and deer.', Tree_Number: 1470}, relationships: {}},
                {id: 2, type: 'tree', attributes: {Common_Name: 'Japanese Maple', Scientific_Name: 'Acer palmatum', Image: '\\assets\\images\\trees\\01336_Acer_palmatum.jpg',  Tree_Number: 1336}, relationships: {}}
            ]

        });
        this.transitionTo('home');
    }
});