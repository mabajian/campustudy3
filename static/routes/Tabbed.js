var data = require("../common/json/data.json");
var course = require("../common/json/course.json");

exports.view = function(req, res)
{ 
	// console.log(course);
	res.render('Tabbed', data);
	//console.log(data);
	//var tCourse = req.params.course;
	//var listing[];
	for(var i = 0; i < data.owner.length; i++)
	{
	console.log("--------Tab------: " + data.owner[i].course);
	var tab = 
	{
		"tablist": data.owner[i].course

	};
	console.log("Tab List: ");
	console.log(tab);
	  for(var j = 0; j<data.sessions.length; j++)
	  {	//add matching session to owner's couse
		if( data.sessions[j].course == data.owner[i].course)
		{

		 console.log("-------sessionMatch---------");

		 tabmatch = 
		 {	
		 "course": data.sessions[j].course,
		 "name" : data.sessions[j].name,
		 "location": data.sessions[j].location,
		 "timeleft": data.sessions[j].timeleft,
		 "professor":data.sessions[j].professor
    	  };
    		console.log(tabmatch);
    		//data['newcourselist'].push(sessionMatch);
	 	}
      }
	console.log("------ end ------");
	console.log();
	}

}




		 //console.log("Session course: "+ data.sessions[j].course);
		 //console.log("Match to owner course: " + data.owner[i].course);
		 //console.log("Name: " +data.sessions[j].name);
		 /*console.log("Location: " +data.sessions[j].location);
		 console.log("Timeleft: " +data.sessions[j].timeleft);
		 console.log("professor: " +data.sessions[j].professor);
		 courselist1.push(data.sessions[j].name);
		 console.log("courselist1: " + courselist1);*/


/*function sessionList(tcourse, tid, tname, tlocation, ttime, tprof)
{
	if (courselist1[0]== undefined || )
	{
		console.log("undefined 1, add " + tcourse);
		courselist1[0]= tcourse;
	}
	else if(courselist2[0] == undefined)
		console.log("undefined 2, add " + tcourse);
		courselist2[0] = tcourse;
	console.log("tcourse: " + tcourse);
	console.log("courselist 1: " + courselist1);
	console.log("courselist 2: " + courselist2);
	console.log("courselist1 size: " + courselist1[0]);

	/*res.render('Tabb=ed',
	{
	'dName': data.sessions[i].name

	});

}


/*function initializePage() 
{
  console.log("Javascript connected!");
  console.log("friend name", $(this).text());
}


function findCourse(sessions)
{
	if(course == "cse12")
	{
		return course;
	}
	else {
		console.log(course+ " not known for anagramming.");
	}

}*/