// Variable Declarations
$(document).ready(function(){
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

    function saveData(){
        localStorage.setItem('input',JSON.stringify($('input').val()))
    }

    function loadData(){
        localStorage.getItem('input')
    }

    // Calling functions
    Time();
    // Hour();
    rowStatus();
    loadData();
})
// console.log(rootEl);
// Starting from the root element, `<main id="root">`, select all the boxes and change the background color to white.
// rootEl.children('div').children().css('background-color', 'white');

// Select the last `<ul>` or the third row.
// Long traverals can be segmented to provide better readability.
// var rowThree = rootEl.children('ul').eq(2);

// Select the children of the `<ul>`, then select the first box and add the 'O'.
// rowThree.children().eq(0).text('O');




// Hour Display
// function Hour(){
    
//     for(let i = 9; i<18; i++){
//         let element = rootEl.children('div').eq(i-9);
//         console.log(element);
//         if(i < 12){
//             timings.push(i);
//             element.children('div').children('div').eq(0).text(i+'AM');
//         } else if(i==12){
//             timings.push(i);
//             // element.children().children().eq(0).text(i+'PM');
//         } else{
//             timings.push(i-12);
//             // element.children().children().eq(0).text(i+'PM');
//         }
//     }
//     console.log(timings);
//     // var rowThree = rootEl.children('ul').eq(2);

// }
