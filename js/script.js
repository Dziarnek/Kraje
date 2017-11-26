var url = 'https://restcountries.eu/rest/v1/name/',
    countries = $('#countries');

$('#search').on("click", searchCountries);

function searchCountries() {
    var countryName = $('#country-name').val();

    if(!countryName.length) countryName = 'Poland';

    $.ajax({
        url: url + countryName,
        method: 'GET',
        success: showCountriesList
    });
};

function showCountriesList(resp) {
    countries.empty();
    resp.forEach(function(item) {                
        var countryContainer = $('<section>').addClass("country-container").appendTo(countries),
            country = $('<div>').addClass("country").appendTo(countryContainer),
            countryOptions = $('<div>').appendTo(country),
            countryData = $('<div>').appendTo(country);

        $('<h2>').text(item.name).appendTo(countryContainer);

        $('<li>').text("Native name").appendTo(countryOptions);
        $('<li>').text("Capital").appendTo(countryOptions);
        $('<li>').text("Currencies").appendTo(countryOptions);
        $('<li>').text("Languages").appendTo(countryOptions);
        $('<li>').text("Population").appendTo(countryOptions);
        $('<li>').text("Area").appendTo(countryOptions);

        $('<li>').text(item.nativeName).appendTo(countryData);
        $('<li>').text(item.capital).appendTo(countryData);
        $('<li>').text(item.currencies).appendTo(countryData);
        $('<li>').text(item.languages).appendTo(countryData);
        $('<li>').text(item.population/1000 + ' thousands').appendTo(countryData);
        $('<li>').text(item.area + ' km^2').appendTo(countryData);


    });
};