

function load() {
	getSocial();
	//loadJSON("feed.json",sortData);
}

var arr = [];
var arrFinal = [];

function getSocial(){
    var urlArray = ["1", "2", "3", "4", "5", "6", "7", "8", "9", "10"];
	var i;
	var idArr = ['5902c16ce4b0a2233dc1c463','5902c1bfe4b0a2233dc1c4ca', '5902c212e4b0a2233dc1c533', '5902c2bbe4b0a2233dc1c664', '5902c357e4b0a2233dc1c6cb', 
	'5902c731e4b0a2233dc1c836','5902c632e4b0a2233dc1c73c','5902f715e4b0a2233dc1cb7b', '5902c7e2e4b0a2233dc1c903', '5902f5ede4b0a2233dc1cb10'];
	var keyArr = ['561d304a7444da4c04aa5a04db0bdf37', '561d304a7444da4c04aa5a04db0bdf37', '561d304a7444da4c04aa5a04db0bdf37', '561d304a7444da4c04aa5a04db0bdf37',
	'76ed03046f3dc705ba746f3ed451b8b9', '76ed03046f3dc705ba746f3ed451b8b9','e1ff1076fdfb233e209104e30c492441','e1ff1076fdfb233e209104e30c492441',
	'e1ff1076fdfb233e209104e30c492441','e1ff1076fdfb233e209104e30c492441'];


//["5", "1", "8", "9", "4", "10", "3", "2", "7", "6"]

//5 7836 
//1 2891 
//8 1503
//9 935
//3
//7 45
//10 165
//6 24
//3 568
//2 94
//4 146
//


	for(i = 0; i < idArr.length; i ++){
	var url = "./pullData?searchId=" + idArr[i] + "&key=" + keyArr[i];
	
    loadFile(url, function(d){
		var club;
		var total = 0;
		/*
		if(d == '5902f5ede4b0a2233dc1cb10'){
			total = 0;
			club = d;
		}
		else{
			*/
			var data = JSON.parse(d);
			//console.log(data);
			club = data.meta.searchid;
		

		
        //console.log(d);



	   for(var x = 0; x < idArr.length; x++){
		   if(club == idArr[x]){
			   //console.log(urlArray[x]);
			   //console.log(x);
		   }
	   }
	   
	   
        //console.log(data);
       

        for(var j = 0; j < data.posts.length; j++)
        {
            //console.log(data.posts[i].popularity[0].count);
            //total += data.posts[i].popularity[0].count;
           /* 
            else
                total+= 0;
*/          

			if(data.posts[j].sentiment == "positive"){
                total += 1;
            }
            
            if(data.posts[j].popularity){
                total += data.posts[j].popularity[0].count;
            }
           
        }

	
		console.log(total);
	var newArr = window.arr;
	var a = newArr
	
        Array.prototype.insert = function ( index, item ) {
    this.splice( index, 0, item );
    };
	/*
	if(club == idArr[0]){newArr.insert(0, total);}
	if(club == idArr[1]){newArr.insert(1, total);}
	if(club == idArr[2]){newArr.insert(2, total);}
	if(club == idArr[3]){newArr.insert(3, total);}
	if(club == idArr[4]){newArr.insert(4, total);}
	if(club == idArr[5]){newArr.insert(5, total);}
	if(club == idArr[6]){newArr.insert(6, total);}
	if(club == idArr[7]){newArr.insert(7, total);}
	if(club == idArr[8]){newArr.insert(8, total);}
	if(club == idArr[9]){newArr.insert(9, total);}
*/
	for(var x = 0; x < 10; x++){
		   if(club == idArr[x]){
			   newArr[x] = total;
			   //console.log(urlArray[x]);
			   //console.log(x);
		   }

	   }

		//console.log(club);
        //console.log(newArr);
		
        
	window.arr = newArr;
	var count = 0;
	for(var s = 0; s < 10; s++){
		
		if(arr[s] >=0){
			count++;
			//console.log(count);

		}
		if(count >= 10){
			console.log(arr);
			//console.log(count);
			sort();
		}
	}
});

    }
	//setTimeout(sort,40000);

    
}
//["5", "1", "8", "9", "3", "10", "4", "2", "7", "6"]



var sorting = ['3', '1', '2', '4', '6', '8', '9', '10', '7', '5'];
function sort(){
    
    var list = ['1','2','3','4','5','6','7','8','9','10'];
    var hshs = [];
    for(var i = 0; i < 10; i++){
    arrFinal.push([list[i],arr[i]]);
    }
	 console.log(arrFinal);
     arrFinal = arrFinal.sort(Comparator);
	 //console.log(arrFinal);
     var arrrrr = [[1,2]];
     for(var j = 0; j < 10; j++){
         var near = arrFinal[(j)];
         var almost = near[0];
         hshs.push(almost);
		 window.sorting = hshs;
     }
     var urlArray2 = ["1 cake", "2 maya", "3 elhefe", "4 mint", "5 international", "6 livewire", "7 wasted", "8 whiskey", "9 blonde", "10 dakota"];
    console.log(hshs);


	loadJSON("feed.json",sortData);
}

 function Comparator(a, b) {
   if (a[1] < b[1]) return 1;
   if (a[1] > b[1]) return -1;
   return 0;
 }




var jsonFeed = [];

function sortData(data) {
		
	var items = [];
	items = JSON.parse(data).feed; 
	
	/*items = [ 
		['Cake', '1'],
		['Maya', '2'],
		['El Hefe', '3'],
		['Mint', '4'],
		['International', '5'],
		['Livewire', '6'],
		['Wasted Grain', '7'],
		['Whiskey Row', '8'],
		['Bottled Blonde', '9'],
		['Dakota', '10'],
	];*/

	
	var result = []

	sorting.forEach(function(key) {
		var found = false;
		items = items.filter(function(item) {
			if(!found && item.id == key) {
				result.push(item);
				found = true;
				return false;
			} else 
				return true;
		})
	});

	console.log(result);
	
	/*/result.forEach(function(item) {
		//document.writeln(item[0])
		console.log(item["name"].label)
	});*/
	
	formatJSON(result);

}

function formatJSON(data) {
	jsonFeed = data; 
	var output = "";
	for(var i = 0; i < jsonFeed.length; i++) {
		output = output + "<div class='list-item' id='item-" + i + "'>"; // Accent Image on Container
		output = output + "<div class='accent-image' style='background-image:url(" + jsonFeed[i].accent + ")'></div>"; // Accent Image on Container
		output = output + "<div class='top-triangle'></div>";
		output = output + "<div class='bottom-triangle'></div>";
		output = output + "<div class='content'>";
		output = output + "<div class='show-more' id='item" + i + "' onclick='javascript:itemSelected(" + i + ")'><i class='material-icons'>add</i></div>"; // Show extra info
		output = output + "<div class='title'>" + jsonFeed[i].name + "</div>"; // Bar Name
		output = output + "<div class='desc'>" + jsonFeed[i].summary + "</div>"; // Bar summary/description
		output = output + "<div class='logo'><img src=" + jsonFeed[i].logo + "></div>"; // Bar Logo		
		output = output + "<div class='rank'>" + (i+1) + "</div>"; // Bar Rank		
		output = output + "</div>";
		output = output + "</div>";
				
		//console.log("this works");
	}
	document.getElementById('loading').innerHTML = "";
	document.getElementById('list').innerHTML = output;
	scrolling()
}

function itemSelected(i) {
	$("#list div").removeClass("selected");
	$("#item-" + i).addClass("selected");
	$("#details").addClass("active");
	
	var listItem = jsonFeed[i];
	var output = "";
	
	output = output + "<div class='background-triangle'></div>";
	output = output + "<div id='close-details' onclick='javascript:closeDetails()'><i class='material-icons'>close</i></div>";
	output = output + "<div class='content'>";

	output = output + "<div class='hours'><h3>Hours</h3>" + jsonFeed[i].hours + "</div>"; // Bar summary/description
	
	output = output + "<div class='type'><h3>Type</h3>" + jsonFeed[i].type + "</div>"; // Bar summary/description
	output = output + "<div class='crowd'><h3>Crowd</h3>" + jsonFeed[i].crowd + "</div>"; // Bar summary/description

	output = output + "<div class='logo'><img src=" + jsonFeed[i].logo + "></div>"; // Bar Logo		
	output = output +  jsonFeed[i].map;
	
	output = output + "<div class='social'>";
	output = output + "<a href='" + jsonFeed[i]["social"].facebook + "'><i class='fa fa-facebook-official'></i></a>"; 
	output = output + "<a href='" + jsonFeed[i]["social"].twitter + "'><i class='fa fa-twitter'></i></a>"; 
	
	if(jsonFeed[i]["social"].snapchat !== "") {
		output = output + "<a href='" + jsonFeed[i]["social"].snapchat + "'><i class='fa fa-snapchat-ghost'></i></a>"; 
	} 

	output = output + "<a href='" + jsonFeed[i]["social"].instagram + "'><i class='fa fa-instagram''</i></a>";
	output = output + "</div>";

	output = output + "</div>";
	

	var contents = document.getElementById("details").innerHTML = output; // places output into vew variable
	var replace = contents.replace(/\n/gi, "<br>"); // replaces \n in json file with line breaks
	document.getElementById("details").innerHTML = replace; // puts new output into container div
	
	
	$("#details").stop().slideDown("fast");
	$("#list div.content").stop().hide("fast");
	
	window.addEventListener('scroll', noscroll);
}


function closeDetails() {
	
	$("#details").slideUp("fast");
	$("#list div").removeClass("selected");
	$("#details").removeClass("active");
	$("#list div.content").stop().show("slow");
	
	window.removeEventListener('scroll', noscroll);
	
}



function scrolling() {
	$.scrollify({
		section : ".list-item",
		//sectionName : "section-name",
		interstitialSection : "",
		easing: "easeOutExpo",
		scrollSpeed: 1100,
		offset : 0,
		scrollbars: true,
		standardScrollElements: "",
		setHeights: false,
		overflowScroll: true,
		updateHash: true,
		touchScroll:true,
		before:function() {},
		after:function() {},
		afterResize:function() {},
		afterRender:function() {}
	});
};