$(document).ready(function() {
    var max      = 4; //maximum input boxes allowed
    var container         = $(".dynamic-wrapper");  
    var add      = $(".add-btn"); //Plus sign id
   
    var x = 1; //input field count intially
    $(add).click(function(e){         
        e.preventDefault();
        if(x < max){ //maximum number of input field allowed
            x++; //input field increment
            $(container).append('<div><input type="email" name="add-people" id="add-people" class="form-control" required placeholder="example@email.com"/><a href="#" class="delete">delete</a></div>'); //adding new input field
        }
    });
   
    $(container).on("click",".delete", function(e){ //user click on remove text
        e.preventDefault(); $(this).parent('div').remove(); x--;
    })
});