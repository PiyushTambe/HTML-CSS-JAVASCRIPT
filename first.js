/* A Simple way to know student details
according to Roll Number in javascript */

var rollNumber;
rollNumber = prompt("enter roll number");
switch(rollNumber){
        case "1" :
           document.write("Joseph BE IT 2017 PASSOUT"); //you can add any details of your choice in this
           break;
        case "2" :
           document.write("Logan BE CS 2015 PASSOUT");
           break;
        case "3" :
           document.write("Daniel SE ETRX 2 BACKLOGS");
           break;
        case "4" :
           document.write("Matthew FE EXTC ALL CLEAR");
           break;
        case "5" :
           document.write("Jackson DANCE/POP SINGER/ARTIST ");
           break;
        case "6" :
           document.write("John WRESTLING/ WWE/ BODYBUILDER");
           break;
        case "7" :
           document.write("Christopher / MOVIE MAKER/ AWARD WINNER/ US");
           break;
        default:
           document.write("other student");
           break;
}
