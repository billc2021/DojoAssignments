def draw_stars(list):
    for num in list:
        if type(num) == int:
            print "*" * num
        else:
            print num[0].lower() * len(num)

x = [4, 6, 1, 3, 5, 7, 25]
x = [4, "Tom", 1, "Michael", 5, 7, "Jimmy Smith"]
draw_stars(x)