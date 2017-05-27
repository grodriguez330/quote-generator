$(document).ready(function() {

  var quote; // Global variable to store new quote
  var author; // Global variable to store new author of quote



  function getNewQuote() {
    $.ajax({
      url: 'http://api.forismatic.com/api/1.0',
      jsonp: 'jsonp',
      dataType: 'jsonp',
      data: {
        method: 'getQuote',
        lang: 'en',
        format: 'jsonp'
      },
      success: function(response) {
        quote = response.quoteText;
        author = response.quoteAuthor;
        if(author) {
          $('#author').text('- ' + author);
        } else {
          $('#author').text('- unknown');
        }
      }
    });
  }
  getNewQuote();

  $('.get-quote').on('click', function(event) {
    event.preventDefault();
    getNewQuote();
  });
});
