$(document).ready(function() {
    $(".dev-burger").on("click", function(event) {
      var id = $(this).data("devourburger");
      // console.log($(".dev-burger"))
      var newDevour = $(this).data("newdevour");
  
      var newFoodStatus = {
        devoured: newDevour
      };

      $.ajax("/burgers" + id, {
        type: "PUT",
        data: newFoodStatus
      }).then(
        function() {
          console.log("changed food status to", newDevour);
          location.reload();
        }
      );
    });
  
    $(".create-form").on("submit", function(event) {
      event.preventDefault();
  
      var newBurger = {
        name: $("#input").val().trim(),
        devoured: false
        // devoured: $("[name=devoured]:checked").val().trim()
      };

      $.ajax("/burgers/create", {
        type: "POST",
        data: newBurger
      }).then(
        function() {
          console.log("added a new burger");
          location.reload();
        }
      );
    });
  
    // $(".delete-burger").on("click", function(event) {
    //   var id = $(this).data("id");

    //   $.ajax("/" + id, {
    //     type: "DELETE"
    //   }).then(
    //     function() {
    //       console.log("deleted burger", id);
    //       location.reload();
    //     }
    //   );
    // });
  });