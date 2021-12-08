$("#form").submit(function (e) {
    e.preventDefault()

    var query = $("#search").val()

    let result = ''

    var API_KEY = 'ce23085fe384d4efec94547d0bb4a8e5'

    var url = 'http://api.serpstack.com/search?access_key=' + API_KEY + '&type=web&query=' + query
    console.log(url)


    $.get(url, function (data) {
        $("#result").html('')
        console.log(data)

        data.organic_results.forEach(res => {
            
            result = `

            <h2>${res.title}</h2><br>
            <a target="_blank" href="${res.url}">${res.url}</a>
            <p>${res.snippet}</p>
           
            `

            $("#result").append(result)
        });
    })
})