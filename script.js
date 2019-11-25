// Javascript 

// TODOS: 
    // CREATE a function that builds a list of 


var _times = ['9AM','10AM','11AM','12PM','1PM','2PM','3PM','4PM','5PM'];
var save = $(".save");

var schedule = [];
//create an object that stores plan and time
//check if any schedule is stored in localStorage



$(document).ready(function()
    {


        if(localStorage.getItem("schedule")!=null)
        {
            schedule = JSON.parse(localStorage.getItem("schedule"));
        }
        else
        {
            for (var j = 0; j < _times.length; j++)
                {
                    schedule[j]= {
                                    time: _times[j],
                                    plan: ""       
                                };
                }
        }
    // for all the times after 9 
        // create a div container with attributes class: schedule-hour row AND attribute id: times[i]
        // create a div with the time 
        // create a text area with attribute class: col-sm-6 scheduleplan rows=3 cols=100
        // create a div containing an <i> with attribute class: icon-save col-sm-3 and an <i> 

        for(var i = 0; i < _times.length; i++ )
            {
                var scheduleHour = $("<div>").attr({class:"schedule-hour row", id:_times[i]});

                var timeOfDay = $("<div>").attr({class:"col-sm-3 time-of-day"}).html(_times[i]);

                var textbox = $("<textarea>").attr({class:"col-sm-6 schedule-plan rows='3' cols='100' ",id:"text-"+_times[i]});
                // if the text box does have a previously stored value, 
                    // set box to that value
                textbox.html(schedule[i].plan);   
                


                var save = $("<div>").attr({class:"col-sm-3 save"});

                var icon = $("<i>").attr({class:"icon-save icon-3x ",id:"save-"+_times[i]});
                icon.appendTo(save);

                timeOfDay.appendTo(scheduleHour);
                textbox.appendTo(scheduleHour);
                save.appendTo(scheduleHour);
                scheduleHour.appendTo("#schedule");
            }
    });
  

// on click of the save box
    // the textbox corresponding to the time will be pushed to an object with t


document.addEventListener("click",function(event){
    event.preventDefault();
   
    event.stopPropagation();
    for(var i = 0; i< _times.length; i++)
        {
            if(event.target.matches("#save-"+_times[i]))
                {
                   var Plan = $("#text-"+_times[i]).val();  // Get the value of the string that correlates to the save
                   // store the plan in the schedule
                    schedule[i].plan = Plan;
                }
        }
        
        localStorage.setItem("schedule",JSON.stringify(schedule));
});



