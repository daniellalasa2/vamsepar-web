$(function() {
  // Get the form.
  var form = $("#ajax-contact");

  // Get the messages div.
  var formMessages = $("#form-messages");

  // Set up an event listener for the contact form.
  $(form).submit(function(e) {
    // Stop the browser from submitting the form.
    e.preventDefault();

    // Serialize the form data.
    var formData = $(form).serialize();
    var dt = {
      name: $("#name").val(),
      phoneNumber: $("#phone").val(),
      message: $("#message").val()
    };
    debugger;
    // Submit the form using AJAX.
    $.ajax({
      type: "POST",
      url: "https://app-ipanel.herokuapp.com/contents/add",
      data: JSON.stringify({
        contentType: "5d5accbb002656001743cdec",
        fields: dt
      }),
      dataType: "json",
      contentType: "application/json",
      headers: {
        authorization:
          "Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJjbGllbnRJZCI6IjY1OTEyNWQzLTJlNTMtNDVlMy1hMDU1LTYyYTBhNmM4ZTJjNSIsInNjb3BlIjoidmVyaWZ5IiwiYXV0aGVudGljYXRlZCI6ZmFsc2UsImlhdCI6MTU2NjIyODc4NSwiZXhwIjoxNTk3NzY0Nzg1fQ.qQp5yWzq6tGo4PH2PZn7MEmFjKTqn90sqkitt5-M8jI",
        spaceid: "5d26e793375e9b001745e84d"
      }
    })
      .done(function(response) {
        // Make sure that the formMessages div has the 'success' class.
        $(formMessages).removeClass("error");
        $(formMessages).addClass("success");

        // Set the message text.
        $(formMessages).text("پیغام شما با موفقیت ارسال شد");

        // Clear the form.
        $("#name").val("");
        $("#phone").val("");
        $("#message").val("");
      })
      .fail(function(data) {
        // Make sure that the formMessages div has the 'error' class.
        $(formMessages).removeClass("success");
        $(formMessages).addClass("error");

        // Set the message text.
        if (data.responseText !== "") {
          console.log(data.responseText);
          $(formMessages).text("خطا در ارسال پیغام .لطفا دوباره سعی کنید");
        } else {
          $(formMessages).text("خطا در ارسال پیغام .لطفا دوباره سعی کنید");
        }
      });
  });
});
