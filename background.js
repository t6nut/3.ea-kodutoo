console.log("loaded extension!");

    google.load('search', '1');
    google.setOnLoadCallback(OnLoad);
    var search;
    var keyword = "cats";

    function OnLoad()
    {
        search = new google.search.ImageSearch();

        search.setSearchCompleteCallback(this, searchComplete, null);

        search.execute(keyword);
    }

    function searchComplete()
    {
        if (search.results && search.results.length > 0)
        {
            var rnd = Math.floor(Math.random() * search.results.length);

            document.body.style.backgroundImage = "url('" + search.results[rnd]['url'] + "')";
        }
    }
