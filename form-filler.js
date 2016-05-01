/**
 * Invokes the main logic on DOM ready.
 *
 * @param {object} document The DOM object.
 */
$( document ).ready(function() {
    fill(document);
});

/**
 * Invokes the form filling logic and populates the form fields in the passed document instance.
 *
 * @param {object} document The DOM object.
 */
function fill(document){
	/** 
	* The following logic collects all the forms available in the DOM, travers through all the elements and fill the data
	*/
	var allForms = document.forms;
	//For loop for all the forms available in DOM
	for (var i = 0; i < allForms.length; i++) {
		var currentForm = allForms[i];
		var data = getMapping(currentForm.id);
		//For loop for all the elements for each form
		//Assuming that, each element has a name attribute
		//TO ODO handle for id if name is not present
		for (var j = 0; j <= currentForm.elements.length; j++) {
			var element = currentForm.elements[j];
			if(element && element.type){
				if(element.type =="text" || element.type=="select-one" || element.type=="select-multiple" || element.type=="textarea"){
					if(data[element.name])
					element.value = data[element.name];
				    if(element.type=="select-multiple")
						setMatchingOptions(element,data[element.name]);
						
				}else if(element.type =="radio" || element.type =="checkbox"){
					element.checked = (element.value == data[element.name]);
				}
			}
		}
	}
}

/**
 * Returns master data - values to use in all forms.
 *
 * Assumptions
 * Data will be in JSON format. KEY will be NAME of the DOM element. VALUE will be required format
 */
function getPersonalData(){
	// Instead of hard coding the data, can get data from any service call / any file.
	var masterData = {
		"form1":{
			"firstName":"Alice",
			"lastName":"Bob",
			"email":"alicebob@gmail.com",
			"address":"170 High St.",
			"suburb":"Ashburton",
			"state":"VIC",
			"postcode":"2345",
			"phoneNumber":"+61298899600",
			"gender":"female",
			"vehicle":"Bike",
			"cars":"audi",
			"fruits":["apple","orange"]
		},
		"form2":{
			"firstName":"George",
			"lastName":"Rob",
			"email":"Georgerob@gmail.com",
			"address":"222 Pitt St.",
			"suburb":"Sydney",
			"state":"NSW",
			"postcode":"2000",
			"phoneNumber":"+61258899601",
			"gender":"Male",
			"vehicle":"Bike",
			"cars":"audi",
			"fruits":["apple","orange"]
		}
	};
	return masterData;
}

/**
 * Returns master data - values to use in all forms.
 *
 * @param {String} currentForm id.
 * Data will be in JSON format. KEY will be NAME of the DOM element. VALUE will be required format
 */
 
function getMapping(currentForm){
	var masterData = getPersonalData();
	return masterData[currentForm];
}

function setMatchingOptions(element,OptionsData){
	//todo
}
