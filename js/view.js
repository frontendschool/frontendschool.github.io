$(document).ready(function () {

	var id = window.location.hash;
	id = id.substring(1);
	// alert(id);

	var posts = $("#posts");

	window.addEventListener('hashchange', hashchange);

	function hashchange(){ 
		var id = location.hash;
		id = id.substring(1);
		window.location.reload();
	}

	$.ajax({
		url: "db/articles.json"
	}).done(function(data) {
		console.log("Looking by articles with \"" + id + "\" id.");
		var found = 0;
		for (var i = 0; i < data.articles.length; i++) {
			if (data.articles[i].id == id) {
	    		var source = '<div class="block post"><img src="{{img-link}}" alt="" class="img-responsive"><h1>{{title}}</h1><p>{{full}}</p><p class="tags">Теги: {{#each tags}} {{tag-name}} {{/each}} .</p></div>';
				var template = Handlebars.compile(source);
				var html = template(data.articles[i]);
				posts.append(html);
				found++;
		    }
		}
		if (found == 0) {
			window.location = "index.html";
		}
	})
});