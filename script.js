(function () {
    var countries = [
        "Afghanistan",
        "Albania",
        "Algeria",
        "Andorra",
        "Angola",
        "Antigua and Barbuda",
        "Argentina",
        "Armenia",
        "Australia",
        "Austria",
        "Azerbaijan",
        "Bahamas",
        "Bahrain",
        "Bangladesh",
        "Barbados",
        "Belarus",
        "Belgium",
        "Belize",
        "Benin",
        "Bhutan",
        "Bolivia",
        "Bosnia and Herzegovina",
        "Botswana",
        "Brazil",
        "Brunei Darussalam",
        "Bulgaria",
        "Burkina Faso",
        "Burundi",
        "Cabo Verde",
        "Cambodia",
        "Cameroon",
        "Canada",
        "Central African Republic",
        "Chad",
        "Chile",
        "China",
        "Colombia",
        "Comoros",
        "Congo",
        "Costa Rica",
        "Côte D'Ivoire",
        "Croatia",
        "Cuba",
        "Cyprus",
        "Czech Republic",
        "Democratic People's Republic of Korea",
        "Democratic Republic of the Congo",
        "Denmark",
        "Djibouti",
        "Dominica",
        "Dominican Republic",
        "Ecuador",
        "Egypt",
        "El Salvador",
        "Equatorial Guinea",
        "Eritrea",
        "Estonia",
        "Eswatini",
        "Ethiopia",
        "Fiji",
        "Finland",
        "France",
        "Gabon",
        "Gambia",
        "Georgia",
        "Germany",
        "Ghana",
        "Greece",
        "Grenada",
        "Guatemala",
        "Guinea",
        "Guinea Bissau",
        "Guyana",
        "Haiti",
        "Honduras",
        "Hungary",
        "Iceland",
        "India",
        "Indonesia",
        "Iran",
        "Iraq",
        "Ireland",
        "Israel",
        "Italy",
        "Jamaica",
        "Japan",
        "Jordan",
        "Kazakhstan",
        "Kenya",
        "Kiribati",
        "Kuwait",
        "Kyrgyzstan",
        "Lao People’s Democratic Republic",
        "Latvia",
        "Lebanon",
        "Lesotho",
        "Liberia",
        "Libya",
        "Liechtenstein",
        "Lithuania",
        "Luxembourg",
        "Madagascar",
        "Malawi",
        "Malaysia",
        "Maldives",
        "Mali",
        "Malta",
        "Marshall Islands",
        "Mauritania",
        "Mauritius",
        "Mexico",
        "Micronesia",
        "Monaco",
        "Mongolia",
        "Montenegro",
        "Morocco",
        "Mozambique",
        "Myanmar",
        "Namibia",
        "Nauru",
        "Nepal",
        "Netherlands",
        "New Zealand",
        "Nicaragua",
        "Niger",
        "Nigeria",
        "North Macedonia",
        "Norway",
        "Oman",
        "Pakistan",
        "Palau",
        "Panama",
        "Papua New Guinea",
        "Paraguay",
        "Peru",
        "Philippines",
        "Poland",
        "Portugal",
        "Qatar",
        "Republic of Korea",
        "Republic of Moldova",
        "Romania",
        "Russian Federation",
        "Rwanda",
        "Saint Kitts and Nevis",
        "Saint Lucia",
        "Saint Vincent and the Grenadines",
        "Samoa",
        "San Marino",
        "Sao Tome and Principe",
        "Saudi Arabia",
        "Senegal",
        "Serbia",
        "Seychelles",
        "Sierra Leone",
        "Singapore",
        "Slovakia",
        "Slovenia",
        "Solomon Islands",
        "Somalia",
        "South Africa",
        "South Sudan",
        "Spain",
        "Sri Lanka",
        "Sudan",
        "Suriname",
        "Sweden",
        "Switzerland",
        "Syrian Arab Republic",
        "Tajikistan",
        "Thailand",
        "Timor-Leste",
        "Togo",
        "Tonga",
        "Trinidad and Tobago",
        "Tunisia",
        "Turkey",
        "Turkmenistan",
        "Tuvalu",
        "Uganda",
        "Ukraine",
        "United Arab Emirates",
        "United Kingdom",
        "United Republic of Tanzania",
        "United States of America",
        "Uruguay",
        "Uzbekistan",
        "Vanuatu",
        "Venezuela",
        "Viet Nam",
        "Yemen",
        "Zambia",
        "Zimbabwe",
    ];

    var inp = $("input");
    var results = $("#results");
    inp.on("input", function () {
        var val = inp.val();
        //if the value is an empty string, end the function
        if (!val) {
            results.empty();
            return;
        }

        var matches = [];
        for (var i = 0; i < countries.length; i++) {
            if (countries[i].toLowerCase().indexOf(val) == 0) {
                matches.push(countries[i]);
                // if (matches.length === 4) {
                //     break;
                // }
            }
        }
        matches = matches.slice(0, 4); // <- could change "break" part

        var resultsHtml = "";
        for (i = 0; i < matches.length; i++) {
            resultsHtml += "<div class='result'>" + matches[i] + "</div>";
        }
        //better use .html than .append or .prepend
        results.html(resultsHtml || "<div>No results</div>");
    }).on("focus", function (e) {
        $("e.target").trigger();
    });

    //keydown (textfield)
    $(document).ready(function () {
        $("#results").on("mouseover", ".result", function (e) {
            $("#results").show();
            //removing the highlight from whatever result (by add and remove class)
            if ($(".result").hasClass("highlight")) {
                $(".result").removeClass("highlight");
                //adding the .highlight for individual result
                $(e.target).addClass("highlight");
            } else {
                $(e.target).addClass("highlight");
            }
            $("#results").on("mousedown", ".result", function () {
                //setting the value of the text field to be contained by the event target
                var value = $(".highlight").html();
                // console.log(value);
                $("#text").val(value);
                //hiding the results
                results.hide();
            });
        });

        window.addEventListener("keydown", function (e) {
            $("#results").show();
            if (e.keyCode === 40) {
                // no result item is hightlighted, adding .highlighted to the first one
                if ($(".result").hasClass("highlight") === false) {
                    $(".result").eq(0).addClass("highlight");
                } // if the last (index=3) is highlighted = doing nothing
                else if ($(".result").last().hasClass("highlight")) {
                    return;
                } // if other than the last one is highlighted, removing .highlight and add to the next one (index)
                else {
                    for (var i = 0; i < $(".result").length; i++) {
                        if ($(".result").eq(i).hasClass("highlight")) {
                            $(".result").eq(i).removeClass("highlight");
                            i++;
                            $(".result").eq(i).addClass("highlight");
                        }
                    }
                }
            } else if (e.keyCode === 38) {
                //if nothing is highlighted, adding to the last one
                if ($(".result").hasClass("highlight") === false) {
                    $(".result").last().addClass("highlight");
                }
                //if the first (index =0) highlighted = doing nothing
                else if ($(".result").eq(0).hasClass("highlight")) {
                    return;
                }
                //if other that the first highlightes, remove .highlight and add to the previous one (index)
                else {
                    for (i = 0; i < $(".result").length; i++) {
                        if ($(".result").eq(i).hasClass("highlight")) {
                            $(".result").eq(i).removeClass("highlight");
                            i--;
                            $(".result").eq(i).addClass("highlight");
                        }
                    }
                }
            } else if (e.keyCode === 13) {
                // setting the value of the textfield to be the one that has a .highlight
                var value = $(".highlight").html();

                if ($(".result").hasClass("highlight")) {
                    $("#text").val(value);
                    // blur; empty or highlight the results
                    $("#results").hide();
                }
            }
        });
    });
})();
