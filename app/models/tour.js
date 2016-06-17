import DS from 'ember-data';
import attr from 'ember-data/attr';
import { hasMany } from 'ember-data/relationships';

//each tour contains many trees.

export default DS.Model.extend({
    
    Name:               attr('string'),
    Description:        attr('string'),
    //Full_Image_Path:    attr('string'),
    //Medium_Image_Path:  attr('string'),
    //Status:             attr('string'),
    
    Trees:              hasMany('tree')
    
});
