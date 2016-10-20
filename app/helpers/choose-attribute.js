import Ember from 'ember';

export function chooseAttribute(params, namedArgs) {
    var [value, store] = params;
    switch (value) {
        case "TRUE":
            if (namedArgs.number === "1") {
                if (namedArgs.usage === "1") {return 1;}
                return store.peekRecord('attribute', 1).get('Image_Path');
            }
            else if (namedArgs.number === "3") {
                if (namedArgs.usage === "1") {return 2;}
                return store.peekRecord('attribute', 2).get('Image_Path');
            }
            break;
        case "Medicine":
            if (namedArgs.usage === "1") {return 3;}
            return store.peekRecord('attribute', 3).get('Image_Path');
        case "Landscaping":
            if (namedArgs.usage === "1") {return 4;}
            return store.peekRecord('attribute', 4).get('Image_Path');
        case "Furniture":
            if (namedArgs.usage === "1") {return 5;}
            return store.peekRecord('attribute', 5).get('Image_Path');
        case "Construction":
            if (namedArgs.usage === "1") {return 6;}
            return store.peekRecord('attribute', 6).get('Image_Path');
        case "Transportation":
            if (namedArgs.usage === "1") {return 7;}
            return store.peekRecord('attribute', 7).get('Image_Path');
        case "Barrels":
            if (namedArgs.usage === "1") {return 8;}
            return store.peekRecord('attribute', 8).get('Image_Path');
        case "Music":
            if (namedArgs.usage === "1") {return 9;}
            return store.peekRecord('attribute', 9).get('Image_Path');
        case "Tools":
            if (namedArgs.usage === "1") {return 10;}
            return store.peekRecord('attribute', 10).get('Image_Path');
        case "Sports":
            if (namedArgs.usage === "1") {return 11;}
            return store.peekRecord('attribute', 11).get('Image_Path');
        case "Food":
            if (namedArgs.usage === "1") {return 12;}
            return store.peekRecord('attribute', 12).get('Image_Path');
        case "Red":
            if (namedArgs.number === "4") {
                if (namedArgs.usage === "1") {return 13;}
                return store.peekRecord('attribute', 13).get('Image_Path');
            } else if (namedArgs.number === "8") {
                if (namedArgs.usage === "1") {return 35;}
                return store.peekRecord('attribute', 35).get('Image_Path');
            } break;
        case "Orange":
            if (namedArgs.usage === "1") {return 14;}
            return store.peekRecord('attribute', 14).get('Image_Path');
        case "Yellow":
            if (namedArgs.number === "4") {
                if (namedArgs.usage === "1") {return 15;}
                return store.peekRecord('attribute', 15).get('Image_Path');
            } else if (namedArgs.number === "8") {
                if (namedArgs.usage === "1") {return 37;}
                return store.peekRecord('attribute', 37).get('Image_Path');
            } break;
        case "Copper":
            if (namedArgs.usage === "1") {return 16;}
            return store.peekRecord('attribute', 16).get('Image_Path');
        case "Green":
            if (namedArgs.number === "4") {
                if (namedArgs.usage === "1") {return 17;}
                return store.peekRecord('attribute', 17).get('Image_Path'); 
            } else if (namedArgs.number === "8") {
                if (namedArgs.usage === "1") {return 36;}
                return store.peekRecord('attribute', 36).get('Image_Path');
            } break;
        case "Needle Leaf Conifers":
			if (namedArgs.usage === "1") {return 18;}
			return store.peekRecord('attribute', 18).get('Image_Path');
        case "Scale Leaf Conifers":
			if (namedArgs.usage === "1") {return 19;}
			return store.peekRecord('attribute', 19).get('Image_Path');
        case "Untoothed Simple":
			if (namedArgs.usage === "1") {return 20;}
			return store.peekRecord('attribute', 20).get('Image_Path');
        case "Toothed Simple":
			if (namedArgs.usage === "1") {return 21;}
			return store.peekRecord('attribute', 21).get('Image_Path');
        case "Lobed Simple":
			if (namedArgs.usage === "1") {return 22;}
			return store.peekRecord('attribute', 22).get('Image_Path');
        case "Compound":
			if (namedArgs.usage === "1") {return 23;}
			return store.peekRecord('attribute', 23).get('Image_Path');
        case "Yuccas and Palmettos":
			if (namedArgs.usage === "1") {return 24;}
			return store.peekRecord('attribute', 24).get('Image_Path');
        case "Alternate":
			if (namedArgs.usage === "1") {return 25;}
			return store.peekRecord('attribute', 25).get('Image_Path');
        case "Opposite":
			if (namedArgs.usage === "1") {return 26;}
			return store.peekRecord('attribute', 26).get('Image_Path');
        case "Whorled":
			if (namedArgs.usage === "1") {return 27;}
			return store.peekRecord('attribute', 27).get('Image_Path');
        case "Pyramidal":
			if (namedArgs.usage === "1") {return 28;}
			return store.peekRecord('attribute', 28).get('Image_Path');
        case "Conical":
			if (namedArgs.usage === "1") {return 29;}
			return store.peekRecord('attribute', 29).get('Image_Path');
        case "Columnar":
			if (namedArgs.usage === "1") {return 30;}
			return store.peekRecord('attribute', 30).get('Image_Path');
        case "Spreading":
			if (namedArgs.usage === "1") {return 31;}
			return store.peekRecord('attribute', 31).get('Image_Path');
        case "Vase Shaped":
			if (namedArgs.usage === "1") {return 32;}
			return store.peekRecord('attribute', 32).get('Image_Path');
        case "Broad":
			if (namedArgs.usage === "1") {return 33;}
			return store.peekRecord('attribute', 33).get('Image_Path');
        case "Rounded":
			if (namedArgs.usage === "1") {return 34;}
			return store.peekRecord('attribute', 34).get('Image_Path');
        case "Cream":
			if (namedArgs.usage === "1") {return 38;}
			return store.peekRecord('attribute', 38).get('Image_Path');
        case "White":
			if (namedArgs.usage === "1") {return 39;}
			return store.peekRecord('attribute', 39).get('Image_Path');
        case "Pink":
			if (namedArgs.usage === "1") {return 40;}
			return store.peekRecord('attribute', 40).get('Image_Path');
        case "Purple":
			if (namedArgs.usage === "1") {return 41;}
			return store.peekRecord('attribute', 41).get('Image_Path');
        case "Brown":
			if (namedArgs.usage === "1") {return 42;}
			return store.peekRecord('attribute', 42).get('Image_Path');
        case "Pods":
			if (namedArgs.usage === "1") {return 43;}
			return store.peekRecord('attribute', 43).get('Image_Path');
        case "Balls, Capsules, Tufted Fruit":
			if (namedArgs.usage === "1") {return 44;}
			return store.peekRecord('attribute', 44).get('Image_Path');
        case "Acorns":
			if (namedArgs.usage === "1") {return 45;}
			return store.peekRecord('attribute', 45).get('Image_Path');
        case "Nuts":
			if (namedArgs.usage === "1") {return 46;}
			return store.peekRecord('attribute', 46).get('Image_Path');
        case "Berrylike fruit":
			if (namedArgs.usage === "1") {return 47;}
			return store.peekRecord('attribute', 47).get('Image_Path');
        case "Fleshy Fruit":
			if (namedArgs.usage === "1") {return 48;}
			return store.peekRecord('attribute', 48).get('Image_Path');
        case "Capsules":
			if (namedArgs.usage === "1") {return 49;}
			return store.peekRecord('attribute', 49).get('Image_Path');
        case "Conelike":
			if (namedArgs.usage === "1") {return 50;}
			return store.peekRecord('attribute', 50).get('Image_Path');
        case "Drupes":
			if (namedArgs.usage === "1") {return 51;}
			return store.peekRecord('attribute', 51).get('Image_Path');
        case "Plum":
			if (namedArgs.usage === "1") {return 52;}
			return store.peekRecord('attribute', 52).get('Image_Path');
        case "Berries":
			if (namedArgs.usage === "1") {return 53;}
			return store.peekRecord('attribute', 53).get('Image_Path');
    }
}

export default Ember.Helper.helper(chooseAttribute);
