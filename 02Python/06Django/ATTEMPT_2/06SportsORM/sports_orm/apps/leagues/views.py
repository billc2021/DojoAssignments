from django.shortcuts import render, redirect
from .models import League, Team, Player
from django.db.models import Count, Sum


from . import team_maker

def index(request):
	
	context = {
		# "leagues": League.objects.all(),
		# "teams": Team.objects.all(),
		# "players": Player.objects.all(),

		# secrets = Secret.objects.all().annotate(like_count=Count('secret_liked__id')).order_by('-created_at')
		'players': Player.objects.all().annotate(total_teams=Count('all_teams')).order_by('total_teams')
	}
	return render(request, "leagues/index.html", context)

def make_data(request):
	team_maker.gen_leagues(10)
	team_maker.gen_teams(50)
	team_maker.gen_players(200)

	return redirect("index")