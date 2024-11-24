console.log('Pobierz-dane-po-kliknieciu-przycisku-jquery');

$(document).ready(function() {
   
        //  $('#get-data').click(function() {
        
        //  wariant 1
//         $.get('https://akademia108.pl/api/ajax/get-post.php')
//         .done(function(data) {

//             let pId = $('<p></p>').text(`Post ID: ${data.id}`);
//             let pUserId = $('<p></p>').text(`User ID: ${data.userId}`);
//             let pTitel = $('<p></p>').text(`Titel: ${data.titel}`);
//             let pBody = $('<p></p>').text(`Body: ${data.body}`);
//             let hr = $('<hr/>');
//             let jqBody = $('body');

//             jqBody.append(pId);
//             jqBody.append(pUserId);
//             jqBody.append(pTitel);
//             jqBody.append(pBody);
//             jqBody.append(hr);



//             // console.log(data);
//         })
//         .fail(function(error) {
//             console.error(error);
//         });
//     });
// });

$('#get-data').click(function() {
        
    //  wariant 2
    $.getJSON('https://akademia108.pl/api/ajax/get-post.php')
    .done(function(data) {

        let pId = $('<p></p>').text(`Post ID: ${data.id}`);
        let pUserId = $('<p></p>').text(`User ID: ${data.userId}`);
        let pTitel = $('<p></p>').text(`Titel: ${data.titel}`);
        let pBody = $('<p></p>').text(`Body: ${data.body}`);
        let hr = $('<hr/>');
        let jqBody = $('body');

        jqBody.append(pId);
        jqBody.append(pUserId);
        jqBody.append(pTitel);
        jqBody.append(pBody);
        jqBody.append(hr);



        // console.log(data);
    })
    .fail(function(error) {
        console.error(error);
    });
});
});