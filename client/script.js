$("#form").submit(function (e) {
    e.preventDefault();

    var query = $("#search").val()
    let result = ''
    var API_KEY = '369c85ecb37501113ce70023b03d2b4a'
    var url = 'http://api.serpstack.com/search?access_key=' + API_KEY + '&type=web&query=' + query
    console.log(url)
    
    $.get(url, function (data) {
        $("#result").html('');
        console.log(data);
        data.organic_results.forEach(res => {
            
            result = `<h2>${res.title}</h2><br>
            <a target="_blank" href="${res.url}">${res.url}</a>
            <p>${res.snippet}</p>`;


            // This limits the amount of searches to 10 links
            let counter = 0;
            counter++;
            if(counter <= 10){
            $("#result").append(result);
            };
        });

        // This updates the list randomly, currently doesn't take you to a random website
        data.organic_results.push(res => {
            arr = [];
            arr = arr.push(`${res.url}`)
            console.log(arr)
            var randomSite = arr[Math.floor(Math.random() * arr.length)];
    
            $('#random').click(function() {
                    window.location.replace(randomSite);
                    return false;
                });
        })
        
    });
});

