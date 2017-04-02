def test_function(**kwargs):
    for key in kwargs:
        print '=\t', key
        print '--\t', kwargs[key]
        print '\n'


test_function(key1='hellop', k2='somethig')