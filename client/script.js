$("#form").submit(function (e) {
    e.preventDefault()

    var query = $("#search").val()

    let result = ''

    var API_KEY = '369c85ecb37501113ce70023b03d2b4a'

    var url = 'http://api.serpstack.com/search?access_key=' + API_KEY + '&type=web&query=' + query
    console.log(url)


    $.get(url, function (data) {
        $("#result").html('')
        console.log(data)

        data.organic_results.forEach(res => {
            
            result = `<h2>${res.title}</h2><br>
            <a target="_blank" href="${res.url}">${res.url}</a>
            <p>${res.snippet}</p>`

            let counter = 0;
            counter++
            if(counter <= 10){
            $("#result").append(result)
            };

            $('#show').click(function() {
                window.location.href =`${res.url}`;
                return false;
            });
        });
    })
})