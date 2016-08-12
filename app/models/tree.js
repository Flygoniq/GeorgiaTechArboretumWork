import DS from 'ember-data';
import attr from 'ember-data/attr';
import { hasMany } from 'ember-data/relationships';
import { belongsTo } from 'ember-data/relationships';

//each tree belongs to many badges
//each tree belongs to one tour

export default DS.Model.extend({
    
    Common_Name:        attr('string'),
    Scientific_Name:    attr('string'),
    Image:              attr('string'),
    Description:        attr('string'),
    Tree_Number:        attr('number'),
    
    Tour:               belongsTo('tour'),
    Badges:             hasMany('badge')
  
});

/*var Tree = DS.Model.extend({
    
    species:        attr('string'),
    information:    attr('string')
  
});

Tree.reopenClass({
    FIXTURES: [
        { id: 1, species: 'Pine', information: 'Wow! This is a pine tree!' },
        { id: 2, species: 'Oak', information: 'Wow! This is an oak tree!' }
    ]   
});

export default Tree;*/