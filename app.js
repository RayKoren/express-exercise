      //
      // $.get( "http://localhost:3000/some-animal", function(data) {
      //   console.log(data);
      // });

      $.ajax ({
        url: "http://localhost:3000/some-animal",
        method: "GET"
      }).done(function(data){
        console.log(data);
      });
