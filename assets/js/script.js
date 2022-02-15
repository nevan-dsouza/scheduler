$(document).ready(function(){
    // Variable Declarations
    const m = moment();
    let currentDayEl = $("#currentDay");
    let timings = [];
    let rootEl = $("#hero");
    let current = moment().format('LLLL')
    console.log(current);
    
    let currentTime = moment().format('HH');
    console.log(currentTime);
    
    // Functions
    // Time Display
    function Time(){
        currentDayEl.text(m.format('dddd[,] MMMM Do'));
    }
    
    $('input').each(function(){
        let color = parseInt($(this).attr('time'));
        console.log(color);
        if(currentTime==color){
            $(this).addClass('Present');
        } else if(currentTime<color){
            $(this).addClass('Future');
        } else{
            $(this).addClass('Past');
        }
        saveData();
    })
    
    // Row Timings
    function rowStatus(){
        let currentTime = m.format('hh');
        // console.log(currentTime);

        for(let i = 9; i<18; i++){
            timings.push(i);
            // console.log(timings);
        }
        // console.log(timings);
    }

    // Local Storage
    function saveData(){
        localStorage.setItem('input',JSON.stringify($('input').val()))
    }

    function loadData(){
        localStorage.getItem('input')
    }

    // Calling functions
    Time();
    rowStatus();
    loadData();
})
