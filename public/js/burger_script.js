$(document).ready(function() {
    $(".change-devour").on("click", function(event) {
      var id = $(this).data("id");
      var newDevour = $(this).data("newdevour");
  
      var newFoodStatus = {
        devoured: newDevour
      };
      var urlLink = "/burgers/" + id
      $.ajax(
        urlLink, 
        {
        type: "PUT",
        data: newFoodStatus
      }).then(
        function() {
          location.reload();
        }
      );
    });
  
    $(".create-form").on("submit", function(event) {
      event.preventDefault();
  
      var newBurger = {
        name: $("#input").val().trim(),
        devoured: false

      };

      $.ajax("/burgers/create", {
        type: "POST",
        data: newBurger
      }).then(
        function() {

          location.reload();
        }
      );
    });
  
  });