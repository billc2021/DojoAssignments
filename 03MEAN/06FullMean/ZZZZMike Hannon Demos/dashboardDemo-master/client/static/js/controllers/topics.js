myApp.controller('TopicsController', function($routeParams, UserFactory, CategoryFactory, TopicFactory){
	var _this = this;
	var getUser = function(){
		UserFactory.getCurrentUser(function(data){
			_this.user = data;
		});
	}
	this.show = function(data){
		TopicFactory.show(data,function(return_data){
			_this.topic = return_data;
		});
	}
	console.log($routeParams);
	if ($routeParams['id']){
		this.show($routeParams['id']);
	}
	this.createTopic = function(){
		console.log(_this.newTopic);
		_this.newTopic._user = _this.user;
		TopicFactory.create(_this.newTopic, UserFactory.update);
	}
	this.createPost = function(){
		var info = _this.newPost;
		_this.newPost._user = _this.user;
		_this.newPost._topic = _this.topic
		// PostFactory.create(info,function...)
	}
	this.index = function(){
		TopicFactory.index(function(data){
			_this.topics = data;
		});
	}
	this.index();
	getUser();
	var getCategories = function(){
		CategoryFactory.index(function(data){
			_this.categories = data;
			console.log(_this);
		})
	}
	getCategories();

})
