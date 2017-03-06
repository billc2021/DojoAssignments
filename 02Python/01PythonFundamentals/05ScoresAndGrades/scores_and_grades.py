from random import randint

def scoreGrades():
    for num in range(1, 11):
        score = randint(60, 100)
        if score > 89:
            print "Score: {}; Your grade is an A".format(score)
        elif score > 79:
            print "Score: {}; Your grade is an B".format(score)
        elif score > 69:
            print "Score: {}; Your grade is an C".format(score)
        else:
            print "Score: {}; Your grade is an D".format(score)
    
    print "End of program. Bye"

scoreGrades()