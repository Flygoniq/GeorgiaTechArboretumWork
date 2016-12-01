import Ember from 'ember';
//class names come from app.css
export function chooseAttribute(params, namedArgs) {
    var [value, store] = params;
    var answer = "attribute";
    switch (value) {
        case "TRUE":
            if (namedArgs.number === "1") {
                if (namedArgs.usage === "1") {return 1;}
                return answer + " ga";
                //return store.peekRecord('attribute', 1).get('Image_Path');
            }
            else if (namedArgs.number === "3") {
                if (namedArgs.usage === "1") {return 2;}
                return answer + " bee";
            }
            break;
        case "Medicine":
            if (namedArgs.usage === "1") {return 45;}
            return answer + " medicinal";
        case "Landscaping":
            if (namedArgs.usage === "1") {return 48;}
            return answer + " landscaping";
        case "Furniture":
            if (namedArgs.usage === "1") {return 52;}
            return answer + " furniture";
        case "Construction":
            if (namedArgs.usage === "1") {return 51;}
            return answer + " construction";
        case "Transportation":
            if (namedArgs.usage === "1") {return 49;}
            return answer + " transportation";
        case "Barrels":
            if (namedArgs.usage === "1") {return 50;}
            return answer + " barrel";
        case "Music":
            if (namedArgs.usage === "1") {return 46;}
            return answer + " music";
        case "Tools":
            if (namedArgs.usage === "1") {return 47;}
            return answer + " tools";
        case "Sports":
            if (namedArgs.usage === "1") {return 53;}
            return answer + " sports";
        case "Food":
            if (namedArgs.usage === "1") {return 58;}
            return answer + " food";
        case "Red":
            if (namedArgs.number === "4") {
                if (namedArgs.usage === "1") {return 39;}
                return answer + " fallred";
            } else if (namedArgs.number === "8") {
                if (namedArgs.usage === "1") {return 22;}
                return answer + " flowerred";
            } break;
        case "Orange":
            if (namedArgs.usage === "1") {return 40;}
            return answer + " fallorange";
        case "Yellow":
            if (namedArgs.number === "4") {
                if (namedArgs.usage === "1") {return 41;}
                return answer + " fallyellow";
            } else if (namedArgs.number === "8") {
                if (namedArgs.usage === "1") {return 25;}
                return answer + " floweryellow";
            } break;
        case "Copper":
            if (namedArgs.usage === "1") {return 44;}
            return answer + " fallcopper";
        case "Green":
            if (namedArgs.number === "4") {
                if (namedArgs.usage === "1") {return 43;}
                return answer + " fallgreen";
            } else if (namedArgs.number === "8") {
                if (namedArgs.usage === "1") {return 30;}
                return answer + " flowergreen";
            } break;
        case "Needle Leaf Conifers":
			if (namedArgs.usage === "1") {return 15;}
            return answer + " needle";
        case "Scale Leaf Conifers":
			if (namedArgs.usage === "1") {return 16;}
            return answer + " scale";
        case "Untoothed Simple":
			if (namedArgs.usage === "1") {return 17;}
            return answer + " untoothed";
        case "Toothed Simple":
			if (namedArgs.usage === "1") {return 18;}
            return answer + " toothed";
        case "Lobed Simple":
			if (namedArgs.usage === "1") {return 21;}
            return answer + " lobed";
        case "Compound":
			if (namedArgs.usage === "1") {return 20;}
            return answer + " compound";
        case "Yuccas and Palmettos":
			if (namedArgs.usage === "1") {return 19;}
            return answer + " yucca";
        case "Alternate":
			if (namedArgs.usage === "1") {return 12;}
            return answer + " alternate";
        case "Opposite":
			if (namedArgs.usage === "1") {return 13;}
            return answer + " opposite";
        case "Whorled":
			if (namedArgs.usage === "1") {return 14;}
            return answer + " whorled";
        case "Pyramidal":
			if (namedArgs.usage === "1") {return 5;}
            return answer + " pyramidal";
        case "Conical":
			if (namedArgs.usage === "1") {return 6;}
            return answer + " conical";
        case "Columnar":
			if (namedArgs.usage === "1") {return 7;}
            return answer + " columnar";
        case "Spreading":
			if (namedArgs.usage === "1") {return 8;}
            return answer + " spreading";
        case "Vase Shaped":
			if (namedArgs.usage === "1") {return 9;}
            return answer + " vase";
        case "Broad":
			if (namedArgs.usage === "1") {return 10;}
            return answer + " broad";
        case "Rounded":
			if (namedArgs.usage === "1") {return 11;}
            return answer + " rounded";
        case "Cream":
			if (namedArgs.usage === "1") {return 26;}
            return answer + " flowercream";
        case "White":
			if (namedArgs.usage === "1") {return 27;}
            return answer + " flowerwhite";
        case "Pink":
			if (namedArgs.usage === "1") {return 28;}
            return answer + " flowerpink";
        case "Purple":
			if (namedArgs.usage === "1") {return 29;}
            return answer + " flowerpurple";
        case "Brown":
			if (namedArgs.usage === "1") {return 24;}
            return answer + " flowerbrown";
        case "Pods":
			if (namedArgs.usage === "1") {return 33;}
            return answer + " pod";
        case "Balls, Capsules, Tufted Fruit":
			if (namedArgs.usage === "1") {return 34;}
            return answer + " ball";
        case "Acorns":
			if (namedArgs.usage === "1") {return 35;}
            return answer + " acorn";
        case "Nuts":
			if (namedArgs.usage === "1") {return 36;}
            return answer + " nut";
        case "Berrylike fruit":
			if (namedArgs.usage === "1") {return 37;}
            return answer + " berry";
        case "Fleshy Fruit":
			if (namedArgs.usage === "1") {return 38;}
            return answer + " fruit";
        case "Capsules":
			if (namedArgs.usage === "1") {return 34;}
            return answer + " ball";
        case "Conelike":
			if (namedArgs.usage === "1") {return 31;}
            return answer + " cone";
        case "Drupes":
			if (namedArgs.usage === "1") {return 38;}
            return answer + " fruit";
        case "Plum":
			if (namedArgs.usage === "1") {return 38;}
            return answer + " fruit";
        case "Berries":
			if (namedArgs.usage === "1") {return 37;}
            return answer + " berry";
    }
}

export default Ember.Helper.helper(chooseAttribute);
