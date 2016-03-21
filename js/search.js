$(document).ready(function () {

	var tag = window.location.hash;

	if (tag == "#html-css") {
		tag = "HTML & CSS";
	} else if (tag == "#html-game-development") {
		tag = "HTML5 game development";
	} else if (tag == "#js") {
		tag = "JavaScript";
	} else if (tag == "#jq") {
		tag = "JQuery";
	} else if (tag == "#nodejs") {
		tag = "NodeJS";
	} else if (tag == "#gulp") {
		tag = "Gulp";
	} else if (tag == "#bs3") {
		tag = "Bootstrap";
	} else if (tag == "#bower") {
		tag = "Bower";
	} else if (tag == "#sass") {
		tag = "SASS";
	} else if (tag == "#less") {
		tag = "LESS";
	} else {

	}

	var posts = $("#posts"),
		helper = $("#search-by");


	$.ajax({
		url: "db/articles.json"
	}).done(function(data) {
		console.log("Looking by articles with \"" + tag + "\" tag.");
		var found = 0;
		for (var i = 0; i < data.articles.length; i++) {
			for (var j = 0; j < data.articles[i].tags.length; j++) {
				if (data.articles[i].tags[j]['tag-name'] == tag) {
		    		var source = '<div class="block post"><img src="{{img-link}}" alt="" class="img-responsive"><h1>{{title}}</h1><p>{{description}}</p><p class="tags">Теги: {{#each tags}} {{tag-name}} {{/each}} .</p><a href="{{article-link}}">Читать полностью</a></div>';
					var template = Handlebars.compile(source);
					var html = template(data.articles[i]);
					posts.append(html);
					found++;
			    }
			}
		}
		if (found == 0) {
			helper.html("Ваш запрос не дал результатов. Возможно по этой теме ещё нет статей.");
		} else {
			helper.html("По тегу \"" + tag + "\" найдены совпадения.");
		}
	})
});