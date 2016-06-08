import DS from 'ember-data';
import attr from 'ember-data/attr';
//import { belongsTo } from 'ember-data/relationships';

export default DS.Model.extend({
    
    Common_Name:        attr('string'),
    Scientific_Name:    attr('string'),
    Image:              attr('string'),
    Description:        attr('string'),
    Tree_Number:        attr('number')
  
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