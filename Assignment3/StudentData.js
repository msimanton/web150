/*
Assignment 3 - Student Data

This program takes a string of a name seperated by a pipe and the students delimited by a comma and a space
*/


//Assign string to variable grades
var grades = "jim|25, sue|32, mary|34, ann|22, ted|28, frank|15, lisa|19, mike|30, ahn|26, vishaya|27";

//Splits and sorts out the individual data (name and grade combo)
var individual = grades.split(", ");
individual.sort();


var total = 0;
var lowGrade = 100;
var highGrade = 0;
var tempArray = [];

//Parse through the individual data with a for loop
for (n in individual){
    
    
    dataPerson = individual[n].split("|");
    var studentName = dataPerson[0];
    var studentGrade = dataPerson[1];
    var temp = parseInt(studentGrade);
    total += temp;
    
    
    tempArray.push(temp);
    
    if (temp > highGrade) {
        highGrade = temp;
    } else if (temp < lowGrade) {
        lowGrade = temp;
    }
    
    document.write("<li>" + studentName[0].toUpperCase() + studentName.slice(1) + "  -  " + studentGrade);    
}


document.write("<br>" + "Average: " + total/individual.length + "<br>" + "Highest Grade: " + highGrade + "<br>" + "Lowest Grade: " + lowGrade);

