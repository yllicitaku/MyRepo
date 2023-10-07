// Listen for form submit
document.getElementById('myForm').addEventListener('submit',saveBookmark );

// Save Bookmark
function saveBookmark(e){
    // Get form values
    var siteName = document.getElementById('siteName').value;
    var siteUrl = document.getElementById('siteUrl').value;

    if(!validateForm(siteName, siteUrl)){
        return false;
    }
    var bookmark = {
        name: siteName, 
        url: siteUrl
    }

    // Test if bookmarks is null
    if(localStorage.getItem('bookmarks') === null){

    // Init array
    var bookmarks = [];
    //Add to array
    bookmarks.push(bookmark);
    //Set to localStorage
    localStorage.setItem('bookmarks', JSON.stringify(bookmarks));
    } else{
        // Get bookmarks from localStorage
        var bookmarks = JSON.parse(localStorage.getItem('bookmarks'));
        // Add bookmark to array
        bookmarks.push(bookmark);
        // Re-set back to localStorage
        localStorage.setItem('bookmarks', JSON.stringify(bookmarks));
    }

    // Clear fields after submit
    document.getElementById('siteName').value = '';
    document.getElementById('siteUrl').value = '';
    // Re-fetch bookmarks

    fetchBookmarks();
    e.preventDefault();

}

// Delete bookmark
function deletebookmark(url){

    // Get bookmarks from local storage
    var bookmarks = JSON.parse(localStorage.getItem('bookmarks'));
    // loop through bookmarks
    for(var i=0; i<bookmarks.length; i++){
        if(bookmarks[i].url == url ){
            // remove from array
            bookmarks.splice(i,1);
        }
    }
    localStorage.setItem('bookmarks', JSON.stringify(bookmarks));

    // Re-fetch bookmarks again
    fetchBookmarks();
}

// Fetch bookmarks

function fetchBookmarks(){
    // Get bookmarks from localStorage
    var bookmarks = JSON.parse(localStorage.getItem('bookmarks'));

    // Get output id
    var bookmarksResults = document.getElementById('bookmarksResults');

    // Build Output
    bookmarksResults.innerHTML = '';
    for(var i = 0; i < bookmarks.length; i++){
        var name = bookmarks[i].name;
        var url = bookmarks[i].url;

        bookmarksResults.innerHTML += '<div class="well">' + 
                                        '<h3>'+name+ 
                                        ' <a class="btn btn-info" target="_blank" href="'+url+'">Visit</a> ' +
                                        ' <a onclick="deletebookmark(\'' + url + '\') "class="btn btn-danger" href="#">Delete</a> '  
                                        '</h3>'+
                                        '</div>'
                                        ;

        ;
    }
}


// Validate form
function validateForm(siteName, siteUrl){
    if(!siteName || !siteUrl){
        alert('Please fill the form');
        return false;
    }

    var expression = /[-a-zA-Z0-9@:%._\+~#=]{1,256}\.[a-zA-Z0-9()]{1,6}\b([-a-zA-Z0-9()@:%_\+.~#?&//=]*)?/gi;
    var regex = new RegExp(expression);

    if(!siteUrl.match(regex)){
        alert('Please use a valid URL');
        return false;
    }

    return true;

}