# This is a comment

global hero_health
global hero_power
global goblin_health
global goblin_power

hero_health = 10
hero_power = 6
goblin_health = 8
goblin_power = 4

print "The game is initializing"

def printHero():
    print "%s has %d health and %d power." % (hero_name, hero_health, hero_power)

def heroAttack():
    global goblin_health, hero_power
    print "%s makes a daring attack!" % hero_name
    goblin_health = goblin_health - hero_power

def heroStands():
    global hero_health, goblin_power
    print "%s stands like a fool, looking for an early grave." % hero_name
    hero_health = hero_health - goblin_power

def heroFlees():
    global hero_health
    print "%s flees, living to fight another day." % hero_name
    hero_health = 0

def printGoblin():
    print "Goblin has %d health and %d power." % (goblin_health, goblin_power)

def requestAction():
    print "What action will you take?"
    print "1 - Attack the goblin"
    print "2 - Stand there and get hit"
    print "3 - Run like a coward"
    print "> "

hero_name = raw_input("What is your name, brave adventurer?")
print "Are you ready for the pain, %s?" % hero_name

while (hero_health > 0 and goblin_health > 0):
    printHero()
    printGoblin()
    user_input = raw_input(requestAction())

    if user_input == "1":
        heroAttack()
    elif user_input == "2":
        heroStands()
    elif user_input == "3":
        heroFlees()
    else:
        print "Invalid input %s" % user_input

    #goblin_health = 0;

print "The game has ended"
