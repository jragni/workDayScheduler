// Javascript 

// TODOS: 
    // CREATE a function that builds a list of 


var _times = ['9AM','10AM','11AM','12PM','1PM','2PM','3PM','4PM','5PM'];
/*<div class="row schedule-hour">          
    <div class="col-sm-3 time-of-day">
        9 AM
    </div>
    <textarea class="col-sm-6 schedule-plan"rows="3" cols="100"> </textarea>
    <div class="col-sm-3 save"> 
        <i class="icon-save icon-2.5"></i>
    </div>
</div>
*/
$(document).ready(function()
    {
    // for all the times after 9 
        // create a div container with attributes class: schedule-hour row AND attribute id: times[i]
        // create a div with the time 
        // create a text area with attribute class: col-sm-6 scheduleplan rows=3 cols=100
        // create a div containing an <i> with attribute class: icon-save col-sm-3 and an <i> 

        for(var i = 1; i < _times.length-1; i++ )
            {
                var scheduleHour = $("<div>").attr({class:"schedule-hour row", id:_times[i]});

                var timeOfDay = $("<div>").attr({class:"col-sm-3 time-of-day"}).html(_times[i]);

                var textbox = $("<textarea>").attr({class:"col-sm-6 schedule-plan rows='3' cols='100' "});

                var save = $("<div>").attr({class:"col-sm-3 save"});

                var icon = $("<i>").attr({class:"icon-save icon-3x"});

                icon.appendTo(save);
                

                timeOfDay.appendTo(scheduleHour);
                textbox.appendTo(scheduleHour);
                save.appendTo(scheduleHour);
                scheduleHour.appendTo("#schedule");
            


            }
    });
  


