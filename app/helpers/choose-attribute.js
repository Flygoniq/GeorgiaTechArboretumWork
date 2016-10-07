import Ember from 'ember';

export function chooseAttribute(params, namedArgs) {
    var [value, store] = params;
    switch (value) {
        case "TRUE":
            if (namedArgs.number === "1") {
                return store.peekRecord('attribute', 1).get('Image_Path');
            }
            else if (namedArgs.number === "3") {
                return store.peekRecord('attribute', 2).get('Image_Path');
            }
            break;
        case "Medicine": return store.peekRecord('attribute', 3).get('Image_Path');
        case "Landscaping": return store.peekRecord('attribute', 4).get('Image_Path');
        case "Furniture": return store.peekRecord('attribute', 5).get('Image_Path');
        case "Construction": return store.peekRecord('attribute', 6).get('Image_Path');
        case "Transportation": return store.peekRecord('attribute', 7).get('Image_Path');
        case "Barrels": return store.peekRecord('attribute', 8).get('Image_Path');
        case "Music": return store.peekRecord('attribute', 9).get('Image_Path');
        case "Tools": return store.peekRecord('attribute', 10).get('Image_Path');
        case "Sports": return store.peekRecord('attribute', 11).get('Image_Path');
        case "Food": return store.peekRecord('attribute', 12).get('Image_Path');
        case "Red":
            if (namedArgs.number === "4") {
                return store.peekRecord('attribute', 13).get('Image_Path');
            } else if (namedArgs.number === "8") {
                return store.peekRecord('attribute', 35).get('Image_Path');
            } break;
        case "Orange": return store.peekRecord('attribute', 14).get('Image_Path');
        case "Yellow":
            if (namedArgs.number === "4") {
               return store.peekRecord('attribute', 15).get('Image_Path');
            } else if (namedArgs.number === "8") {
                return store.peekRecord('attribute', 37).get('Image_Path');
            } break;
        case "Copper": return store.peekRecord('attribute', 16).get('Image_Path');
        case "Green":
            if (namedArgs.number === "4") {
               return store.peekRecord('attribute', 17).get('Image_Path'); 
            } else if (namedArgs.number === "8") {
                return store.peekRecord('attribute', 36).get('Image_Path');
            } break;
        case "Needle Leaf Conifers": return store.peekRecord('attribute', 18).get('Image_Path');
        case "Scale Leaf Conifers": return store.peekRecord('attribute', 19).get('Image_Path');
        case "Untoothed Simple": return store.peekRecord('attribute', 20).get('Image_Path');
        case "Toothed Simple": return store.peekRecord('attribute', 21).get('Image_Path');
        case "Lobed Simple": return store.peekRecord('attribute', 22).get('Image_Path');
        case "Compound": return store.peekRecord('attribute', 23).get('Image_Path');
        case "Yuccas and Palmettos": return store.peekRecord('attribute', 24).get('Image_Path');
        case "Alternate": return store.peekRecord('attribute', 25).get('Image_Path');
        case "Opposite": return store.peekRecord('attribute', 26).get('Image_Path');
        case "Whorled": return store.peekRecord('attribute', 27).get('Image_Path');
        case "Pyramidal": return store.peekRecord('attribute', 28).get('Image_Path');
        case "Conical": return store.peekRecord('attribute', 29).get('Image_Path');
        case "Columnar": return store.peekRecord('attribute', 30).get('Image_Path');
        case "Spreading": return store.peekRecord('attribute', 31).get('Image_Path');
        case "Vase Shaped": return store.peekRecord('attribute', 32).get('Image_Path');
        case "Broad": return store.peekRecord('attribute', 33).get('Image_Path');
        case "Rounded": return store.peekRecord('attribute', 34).get('Image_Path');
        case "Cream": return store.peekRecord('attribute', 38).get('Image_Path');
        case "White": return store.peekRecord('attribute', 39).get('Image_Path');
        case "Pink": return store.peekRecord('attribute', 40).get('Image_Path');
        case "Purple": return store.peekRecord('attribute', 41).get('Image_Path');
        case "Brown": return store.peekRecord('attribute', 42).get('Image_Path');
        case "Pods": return store.peekRecord('attribute', 43).get('Image_Path');
        case "Balls, Capsules, Tufted Fruit": return store.peekRecord('attribute', 44).get('Image_Path');
        case "Acorns": return store.peekRecord('attribute', 45).get('Image_Path');
        case "Nuts": return store.peekRecord('attribute', 46).get('Image_Path');
        case "Berrylike fruit": return store.peekRecord('attribute', 47).get('Image_Path');
        case "Fleshy Fruit": return store.peekRecord('attribute', 48).get('Image_Path');
        case "Capsules": return store.peekRecord('attribute', 49).get('Image_Path');
        case "Conelike": return store.peekRecord('attribute', 50).get('Image_Path');
        case "Drupes": return store.peekRecord('attribute', 51).get('Image_Path');
        case "Plum": return store.peekRecord('attribute', 52).get('Image_Path');
        case "Berries": return store.peekRecord('attribute', 53).get('Image_Path');
    }
}

export default Ember.Helper.helper(chooseAttribute);
