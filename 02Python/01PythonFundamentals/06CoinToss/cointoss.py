from random import randint

def coin_toss():
    # Heads will == 0 and Tails will == 1
    heads_count = 0
    tails_count = 0
    flip_count = 0
    face = ""
    message = ""

    for num in range(1, 5001):
        coin = randint(0,1)
        if coin == 0:
            face = "heads"
            heads_count += 1
            flip_count += 1
            message = "Attempt #{}: Throwing a coin... It's a {}! ... Got {} head(s) so far and {} tail(s) so far".format(flip_count, face, heads_count, tails_count)
            print message
        else:
            face = "tails"
            tails_count += 1
            flip_count += 1
            message = "Attempt #{}: Throwing a coin... It's a {}! ... Got {} head(s) so far and {} tail(s) so far".format(flip_count, face, heads_count, tails_count)
            print message
    
    print "Ending the program, thank you!"
    
coin_toss()