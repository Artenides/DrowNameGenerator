

function updateMenuLanguage(){
	
	if(language == undefined || language < 0 || language >= menu_lang.length) language = 0;
	$("#messages").empty();
	
	console.log("updating menu lang");
	$("#title").text(menu_lang[language]["title"]);
	$("#lang_select").text(menu_lang[language]["lang_select"]);
	$("#menu_generate").text(menu_lang[language]["menu_generate"]);
	$("#num_of_names").text(menu_lang[language]["num_of_names"]);
	$(".gender").text(menu_lang[language]["gender"]);
	$(".gender1").text(menu_lang[language]["gender1"]);
	$(".gender2").text(menu_lang[language]["gender2"]);
	$("#names_by_class").text(menu_lang[language]["names_by_class"]);
	$("#class1").text(menu_lang[language]["class1"]);
	$("#class2").text(menu_lang[language]["class2"]);
	$("#class3").text(menu_lang[language]["class3"]);
	$("#class4").text(menu_lang[language]["class4"]);
	$("#class5").text(menu_lang[language]["class5"]);
	$("#num_of_suffix").text(menu_lang[language]["num_of_suffix"]);
	$("#button_generate").attr("value", menu_lang[language]["button_generate"]);
	$("#menu_manual").text(menu_lang[language]["menu_manual"]);
	$("#menu_results").text(menu_lang[language]["menu_results"]);
	$(".bynameormeaning").text(menu_lang[language]["bynameormeaning"]);
	$(".byname").text(menu_lang[language]["byname"]);
	$(".bymeaning").text(menu_lang[language]["bymeaning"]);
	$("#button_show").attr("value", menu_lang[language]["button_show"]);
}



function generateNames(){
	

	var num_names = jQuery('#num_of_names_select').val();
	var gender = jQuery('input[name=genderOption1]:checked').val();
	var char_class = jQuery('input[name=classOption]:checked').val();
	var num_suffix =  jQuery('#num_of_suffix_select').val();
	
	var generated_names = [];
	
	var filtered_prefixes = filterNamesByRole(prefixes, char_class);
	var filtered_suffixes = filterNamesByRole(suffixes, char_class);
	
	var i;
	for(i=0; i<num_names; i++){
		
		generated_names.push(createName(gender, prefixes, suffixes, num_suffix));	
	}
	
	updateNames(generated_names);
	
	
}



function createName(gender, filtered_prefixes, filtered_suffixes, num_suffix){
	
	var prefix_num = getRandomInt(filtered_prefixes.length-1);
	
	var prefix = filtered_prefixes[prefix_num][gender];
	var prefix_meaning = filtered_prefixes[prefix_num][menu_lang[language]["lang_code"]];
	
	var name = prefix;
	var name_meaning = prefix_meaning;
	

	var rand = getRandomInt(100);
	//there is a 30 percent chance to add an apostrophe
	if(rand < 30) name +="'";
		
	var suffix_num1 = getRandomInt(filtered_suffixes.length-1);
	var suffix = filtered_suffixes[suffix_num1][gender];
	var suffix_meaning = filtered_suffixes[suffix_num1][menu_lang[language]["lang_code"]];
		
	name += suffix;
	name_meaning += " + "+suffix_meaning;
	
	var suffix_num2 = undefined;
	var suffix_num3 = undefined;
	
	//1-2 suffixes
	if(num_suffix == 2){
		
		//50 percent chance not to add a second suffix
		rand = getRandomInt(100);
		if(rand > 50){
			
			while(suffix_num2 == undefined || suffix_num2 == suffix_num1){
				
				suffix_num2 = getRandomInt(filtered_suffixes.length-1);
			}
			
			
			
			suffix = filtered_suffixes[suffix_num2][gender];
			suffix_meaning = filtered_suffixes[suffix_num2][menu_lang[language]["lang_code"]];
				
			name += suffix;
			name_meaning += " + "+suffix_meaning;
		}	
	}
	//2-3 suffixes
	else if(num_suffix == 3){
		
		rand = getRandomInt(100);
		//there is a 30 percent chance to add an apostrophe
		if(rand < 30) name +="'";
		
		while(suffix_num2 == undefined || suffix_num2 == suffix_num1){
			suffix_num2 = getRandomInt(filtered_suffixes.length-1);
		}
		
		suffix = filtered_suffixes[suffix_num2][gender];
		suffix_meaning = filtered_suffixes[suffix_num2][menu_lang[language]["lang_code"]];
			
		name += suffix;
		name_meaning += " + "+suffix_meaning;
		
		//50 percent chance not to add a third suffix
		rand = getRandomInt(100);
		if(rand > 50){
			
			rand = getRandomInt(100);
			//there is a 30 percent chance to add an apostrophe
			if(rand < 30) name +="'";
			
			while(suffix_num3 == undefined || suffix_num3 == suffix_num2 || suffix_num3 == suffix_num1){
				suffix_num3 = getRandomInt(filtered_suffixes.length-1);
			}
			
			suffix = filtered_suffixes[suffix_num3][gender];
			suffix_meaning = filtered_suffixes[suffix_num3][menu_lang[language]["lang_code"]];
				
			name += suffix;
			name_meaning += " + "+suffix_meaning;
		}
	}
	
	return {"name":name, "meaning":name_meaning};
}

function filterNamesByRole(names, role){
	
	//if the role is any, return all names
	if(role == "A") return names;
	
	
	var filteredNames = [];
	
	for(var i=0; i<names.length; i++){
		
		if(names[i]["role"].includes(role) || names[i]["role"] == "A"){
			
			filteredNames.push(names[i]);
		}
	}
	
	
	return filteredNames;
	
}


function updateNames(names){
	
	var div = jQuery("#messages");
	div.empty();
	
	
	var table = jQuery('<table>');
	
	var i;
	for(i=0; i<names.length; i++){
		
		var tr = jQuery('<tr><td><b>'+names[i]["name"]+"</b>: </td><td>"+names[i]["meaning"]+"</td></tr>");
		table.append(tr);
	}
	
	div.append(table);
	
	
}


function getRandomInt(max) {
	  return Math.floor(Math.random() * Math.floor(max));
}


function updatePrefixAndSuffixOptions(gender, by, prefixes_filtered, suffixes_filtered){
	
	console.log("gender:"+gender+" by:"+by);
	var prefix = jQuery("#prefix_select");
	var suffix = jQuery("#suffix_select");
	var suffix2 = jQuery("#suffix_select2");
	
	prefix.empty();
	suffix.empty();
	suffix2.empty();
	
	var i;
	
	if(by == "byname"){
		
		for(var i=0; i<prefixes_filtered.length; i++){
			
			var option = jQuery('<option>'+ prefixes_filtered[i][gender]+'</option>');
			prefix.append(option);
		}
		
		

		var option = jQuery('<option>--</option>');
		suffix.append(option);
		for(var i=0; i<suffixes_filtered.length; i++){
			
			option = jQuery('<option>'+ suffixes_filtered[i][gender]+'</option>');
			suffix.append(option);
		}
		
		var option = jQuery('<option>--</option>');
		suffix2.append(option);
		for(var i=0; i<suffixes_filtered.length; i++){
			
			option = jQuery('<option>'+ suffixes_filtered[i][gender]+'</option>');
			suffix2.append(option);
		}

	}
	else{
		
		
		for(var i=0; i<prefixes_filtered.length; i++){
			
			var option = jQuery('<option>'+ prefixes_filtered[i][menu_lang[language]["lang_code"]]+'</option>');
			prefix.append(option);
		}
		

		suffix.append(jQuery('<option>--</option>'));
		for(var i=0; i<suffixes_filtered.length; i++){
			
			var option = jQuery('<option>'+ suffixes_filtered[i][menu_lang[language]["lang_code"]]+'</option>');
			suffix.append(option);
		}
		

		suffix2.append(jQuery('<option>--</option>'));
		for(var i=0; i<suffixes_filtered.length; i++){
			
			var option = jQuery('<option>'+ suffixes_filtered[i][menu_lang[language]["lang_code"]]+'</option>');
			suffix2.append(option);
		}

	}
}

function combineName(){
	
	var prefix = jQuery('#prefix_select').val();
	var suffix = jQuery('#suffix_select').val();
	var suffix2 = jQuery('#suffix_select2').val();
	
	var name = "";
	var meaning = "";
	
	var bynameormeaning = jQuery('input[name=nameormeaning]:checked').val();
	var gender = jQuery('input[name=genderOption2]:checked').val();
	
	if(bynameormeaning == "byname"){
		
		var i;
		for(i = 0; i<prefixes.length; i++){
			
			if(prefixes[i][gender] == prefix){
				
				name+= prefix;
				meaning += prefixes[i][menu_lang[language]["lang_code"]];
				break;
			}
		}
		
		
		if(suffix != "--"){
			
			for(i = 0; i<suffixes.length; i++){
				
				if(suffixes[i][gender] == suffix){
					
					name+= " "+suffix;
					meaning += " + "+suffixes[i][menu_lang[language]["lang_code"]];
					break;
				}
			}	
		}
		
	
		if(suffix2 != "--"){
			
			for(i = 0; i<suffixes.length; i++){
				
				if(suffixes[i][gender] == suffix2){
					
					name+= " "+suffix2;
					meaning += " + "+suffixes[i][menu_lang[language]["lang_code"]];
					break;
				}
			}	
		}
		
		
	}
	//by meaning
	else{
		
		
		
		var i;
		for(i = 0; i<prefixes.length; i++){
			
			if(prefixes[i][menu_lang[language]["lang_code"]] == prefix){
				
				meaning += prefix;
				name += prefixes[i][gender];
				break;
			}
		}
		
		
		if(suffix != "--"){
			
			for(i = 0; i<suffixes.length; i++){
				
				if(suffixes[i][menu_lang[language]["lang_code"]] == suffix){
					
					meaning+= " "+suffix;
					name += " "+suffixes[i][gender];
					break;
				}
			}	
		}
		
	
		if(suffix2 != "--"){
			
			for(i = 0; i<suffixes.length; i++){
				
				if(suffixes[i][menu_lang[language]["lang_code"]] == suffix2){
					
					meaning += " "+suffix2;
					name += " + "+suffixes[i][gender];
					break;
				}
			}	
		}

		
		
	}
	
	var name_arr = [];
	name_arr.push({"name":name, "meaning":meaning});
	
	updateNames(name_arr);
	
	
}
