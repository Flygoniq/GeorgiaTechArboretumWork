import DS from 'ember-data';
import attr from 'ember-data/attr';
import { hasMany } from 'ember-data/relationships';

//Each badge contains many trees.

export default DS.Model.extend({
    
    Name:               attr('string'),
    Summary:            attr('string'),
    //Description:        attr('string'),
    //Full_Image_Path:    attr('string'),
    
    Trees:              hasMany('tree')
    
});
