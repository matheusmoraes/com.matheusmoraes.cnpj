function random(n) {
    return Math.round(Math.random()*n);
}

function digit(dividend, divider) {
	return Math.round(dividend - (Math.floor(dividend / divider) * divider));
}

var CNPJ = function() {
	this.evaluate = function() {
		var n = 9,
			n1  = random(n),
			n2  = random(n),
			n3  = random(n),
			n4  = random(n),
			n5  = random(n),
			n6  = random(n),
			n7  = random(n),
			n8  = random(n),
			n9  = 0,
			n10 = 0,
			n11 = 0,
			n12 = 1
		var d1 = n12*2+n11*3+n10*4+n9*5+n8*6+n7*7+n6*8+n5*9+n4*2+n3*3+n2*4+n1*5;
		d1 = 11 - digit(d1, 11);
		if (d1 >= 10) d1 = 0;
		var d2 = d1*2+n12*3+n11*4+n10*5+n9*6+n8*7+n7*8+n6*9+n5*2+n4*3+n3*4+n2*5+n1*6;
		d2 = 11 - digit(d2,11) ;
		if (d2 >= 10) d2 = 0;
	  var result = ''+n1+n2+'.'+n3+n4+n5+'.'+n6+n7+n8+'/'+n9+n10+n11+n12+'-'+d1+d2;
		return this.dotted ?
			result :
			result.replace(/([-.\/])/g, '');
	}	 
}

CNPJ.identifier = "com.matheusmoraes.cnpj";
CNPJ.title = "CNPJ Randomizer";
CNPJ.inputs = [
	DynamicValueInput('dotted', 'Punctuation', 'Checkbox', {
		"choices": { "yes":"" }
	})
];
registerDynamicValueClass(CNPJ);










