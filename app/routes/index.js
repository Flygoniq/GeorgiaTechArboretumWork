import Ember from 'ember';

//this version is file i/o
//Always change tree model when modifying what attributes trees have.

/** Order of operations:
 **  push tour and badge info together
 **  push tree info; include relationships to tours and badges by using store.peekRecord
  */

export default Ember.Route.extend({
    afterModel: function() {
        this.store.push({
            data: [
                {id: 1, type: 'tour', attributes: {Name: 'Hill Tour', Description: 'See the trees on the hill'}},
                {id: 1, type: 'badge', attributes: {Name: 'Ichiban', Summary: 'Visit the About Page'}},
                {id: 2, type: 'badge', attributes: {Name: 'Segundo', Summary: 'View all the trees'}},
                {id: 3, type: 'badge', attributes: {Name: 'Third', Summary: 'View the White Oak'}}
                
            ]
        });
        
        this.store.push({
            data: [
                {id: 1, type: 'tree', attributes: {Common_Name: 'White Oak', Scientific_Name: 'Quercus alba', Image: '\\assets\\images\\trees\\01470_Quercus_alba.jpg', Description: 'This is an oak tree', Tree_Number: 1470}, relationships: {Tour: {id: 1, type: 'tour'}, Badges: {data: [{id: 2, type: 'badge'}, {id: 3, type: 'badge'}]} }},
                {id: 2, type: 'tree', attributes: {Common_Name: 'Japanese Maple', Scientific_Name: 'Acer palmatum', Image: '\\assets\\images\\trees\\01336_Acer_palmatum.jpg', Description: 'this is a maple tReeEEe', Tree_Number: 1336}, relationships: {Tour: {id: 1, type: 'tour'}, Badges: {id: 2, type: 'badge'}}}
            ]

        });
        //this.store.createRecord('tree', {Common_Name: 'White Oak', Scientific_Name: 'Quercus alba', Image: '\\assets\\images\\trees\\01470_Quercus_alba.jpg', Description: 'This tree has tyloses that give the wood a closed cellular structure, making it water- and rot-resistant, thus it is used for wine and whiskey barrels and the USS Constitution ship structure.  The fruit is an acorn, a valuable food for turkeys, wood ducks, pheasants, grackles, jays, nuthatches, thrushes, woodpeckers, rabbits, squirrels, and deer.', Tree_Number: 1470});
        
        this.transitionTo('home');
    }
});