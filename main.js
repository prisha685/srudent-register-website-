name_of_student_array=[];
function submit() {
    var display_student_array=[];
    for ( var j=1; j<=4; j++) {
        var name_of_student=document.getElementById("name_of_student_"+j).value;
        console.log(name_of_student);
        name_of_student_array.push(name_of_student);
    }
    console.log(name_of_student_array);
    var lenght=name_of_student_array.lenght;
    console.log(lenght);
    for ( var k=0; k<lenght; k++) {
        display_student_array.push("<h4>NAME-"+name_of_student_array[k]+"</h4>");
       console.log(display_student_array);

    }
    console.log(display_student_array);
    document.getElementById("display_name_with_commas").innerHTML=display_student_array;
    var remove=display_student_array.join("");
    console.log(remove);
    document.getElementById("display_name_with_commas").innerHTML=remove;
    document.getElementById("submit_button").style.display="none";
    document.getElementById("sort_button").style.display="inline-block";

}
function sorting() {
    name_of_student_array.sort();
    console.log(name_of_student_array);
    var display_sorty=[];
    for ( var k=0; k<lenght; k++) {
        display_sorty.push("<h4>NAME-"+name_of_student_array[k]+"</h4>");
       console.log(display_sorty);

    }
    var remove=display_sorty.join("");
    console.log(remove);
    document.getElementById("display_name_with_commas").innerHTML=remove;
    document.getElementById("submit_button").style.display="none";
    document.getElementById("sort_button").style.display="inline-block";

}
