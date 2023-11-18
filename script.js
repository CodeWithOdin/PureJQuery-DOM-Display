$(document).ready(function(){

    //variables
    const list=$("#task-list")
    const ip=$("#task-input")
    let isedit=true;
    let fromedit=false
    //when enter is clicked, create task
    ip.on("keyup",function(e){
        if(e.keyCode==13 && !fromedit){
            console.log("enterred");
            // to check if input is not empty
            if(ip.val()!==""){
                list_maker()
            }           
        }
    })

   //add function
    const list_maker = function(){
        const li = $("<li/>")
            .addClass("each-task")
        const span=$("<span/>")
            .addClass("task-text")
            .text(ip.val())
        //1st way
        const completebtn=$('<button class="complete">complete</button>')
        // 2nd way: both do same thing
        const deletebtn=$('<button/>')
            .addClass("delete")
            .text("delete")
        const editbtn=$('<button/>')
            .addClass("edit")
            .text("Edit")
        li.append(span, completebtn, deletebtn ,editbtn)
        // Append the new task to the ul
        list.append(li);
        ip.val('') 
    }
    
    //original delete
//    dynamic handling for newly added dynamic element + static element
    list.on('click', '.delete', function(){
        console.log("Delete button clicked");
        $(this).parent().remove();
    }); 

    // trying edit on delete button
    list.on('click', '.edit', function(){
        //to get text area of my selected task
        const span=$(this).parent().find(".task-text")
        //to get delete element of my selected task
        const  edit=$(this).parent().find(".edit")
        //to check if its edit
        if(isedit){           
            ip.focus()
            ip.val(span.text())
            edit.text("save")
            isedit=false;
            fromedit=true// to prevent entering the text from input after enter is clicked      
        }
        //to check if its save
        else if(!isedit){
            console.log("save");
            ip.blur()
            span.text(ip.val())
            edit.text("edit")           
            ip.val("")
            isedit=true
            fromedit=false     
        }  
    });     
   // if completed..
    list.on("click",".complete",function(){
        $(this).parent().find(".task-text").toggleClass("completed")
    })   

});
