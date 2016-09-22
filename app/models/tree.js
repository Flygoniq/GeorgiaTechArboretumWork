import DS from 'ember-data';
import attr from 'ember-data/attr';
import { hasMany } from 'ember-data/relationships';
import { belongsTo } from 'ember-data/relationships';

//each tree belongs to many badges
//each tree belongs to one tour

export default DS.Model.extend({
    //the ones shifted left atm used to have parentheses that triggered ember
    CommonName:                     attr('string'),
    ScientificName:                 attr('string'),
    TreeImage:                      attr('string'),
    Description:                    attr('string'),
    TreeNumber:                     attr('string'),//attr('number'),
    ID:                             attr('string'),//attr('number'),
    TagID:                          attr('string'),
    TreeCondition:                  attr('string'),
    DBH_inches:                   attr('string'),//attr('number'),
    TotalHeight_feet:             attr('string'),//attr('number'),
    CrownNS_feet:                 attr('string'),//attr('number'),
    CrownEW_feet:                 attr('string'),//attr('number'),
    LeafArea_Feet_Squared:        attr('string'),//attr('number'),
    LeafBiomass_Pounds:           attr('string'),//attr('number'),
    CarbonStorage_Pounds:         attr('string'),//attr('number'),
    GrossCarbonSequestration_Pounds_per_Year:     attr('string'),//attr('number'),
    StruturalTreeValue_Dollars:   attr('string'),//attr('number'),
    AvoidedWaterRunnoff_Feet_Cubed_per_Year:      attr('string'),//attr('number'),
    GPSLat:                         attr('string'),//attr('number'),
    GPSLong:                        attr('string'),//attr('number'),
    GPSAlt:                         attr('string'),//attr('number'),
    Tree_Tour_Index:                attr('string'),//attr('number'),
    TreeOnTour:                     attr('string'),
    NumberOnTour:                   attr('string'),//attr('number'),
    Becon_ID:                       attr('string'),//attr('number'),
    GeorgiaNative:                  attr('boolean'),
    BeeTree:                        attr('boolean'),
    Type_of_Tree_tempation:       attr('string'),
    Shape_Primary:                  attr('string'),
    Shape:                          attr('string'),
    Leaf_Attachment:                attr('string'),
    Leaf_Type:                      attr('string'),
    Flowering:                      attr('boolean'),
    FlowerColor_Primary:            attr('string'),
    Flower_Color:                   attr('string'),
    ConeFruit_Type:                attr('string'),
    Country_of_Origin:              attr('string'),
    Habitat:                        attr('string'),
    Range:                          attr('string'),
    Fall_Primary:                   attr('string'),
    Fall_Color:                     attr('string'),
    PF_Primary:                     attr('string'),
    Proformance_Feature:            attr('string'),
    wood_hardness:                  attr('string'),
    book_pages:                     attr('string'),
    
    
    Tour:               belongsTo('tour'),
    Badges:             hasMany('badge'),
    Attributes:         hasMany('attribute')
  
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