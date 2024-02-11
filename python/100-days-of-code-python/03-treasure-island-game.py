print("""
-----------------------------------------------------------
        _,-._
        ; ___ :           ,------------------------------.
    ,--' (. .) '--.__    |  Welcome to Treasure Island    |
  _;      |||        \   |   Dare you sail these seas     |
 '._,-----''';=.____,"   |    Yer plight be unknown       |
   /// < o>   |##|       |      Best o' luck to ye!       |
   (o        \`--'       //`-----------------------------'
  ///\ >>>>  _\ <<<<    //
 --._>>>>>>>><<<<<<<<  / 
 ___() >>>[||||]<<<<
 `--'>>>>>>>><<<<<<<
      >>>>>>><<<<<<
        >>>>><<<<<
         >>ctr<<
-----------------------------------------------------------
""")

turn1 = input("Do you turn left or right?  L or R ")

if turn1 == "R":
    print("You sail into shark-infested waters.  A giant hammerhead bites yer boat, and ye start to sink!  The last thing ye feel is the cold thrash of a shark's tail.")
    print("""
        ,
        .';
    .-'` .'
,`.-'-.`\
; /     '-'
| \       ,-,
\  '-.__   )_`'._
'.     ```      ``'--._
.-' ,                   `'-.
'-'`-._           ((   o   )
        `'--....(`- ,__..--'
                '-'`
          """)
    print("Game over...")

if turn1 == "L":
    print("You sail into a beautiful lagoon, but see that a reef keeps you from landing ashore.")
    turn2 = input("Do you swim or wait?  S or W")

    if turn2 == "S":
        print("A stingray pierces ye in yer old, black heart!  Ye die on the spot, bleeding out on the reef.")
        print("""
            (\.-./)
            /     \
          .'   :   '.
     _.-'`     '     `'-._
  .-'          :          '-.
,'_.._         .         _.._',
'`    `'-.     '     .-'`    `'
            '.   :   .'
            \_. ._/
      \       |^|
       |      | ;
       \'.___.' /
        '-....-'  
              """)
        print("Game over...")
    
    if turn2 == "W":
        print("A mermaid soon appears and shows ye a safe way to land yer boat without hangin' up on that thar reef.")
        turn3 = input("Do ye go towards the distant mountains in-land or walk down the beach?  M or B")

        if turn3 == "B":
            print("A giant sand crab unburies itself right before your eyes.  It grabs you in its pinchers and... CRUNCH!")
            print("""
/\
( /   @ @    ()
\  __| |__  /
-/   "   \-
/-|       |-\
/ /-\     /-\ \
/ /-`---'-\ \     
/         \
                  """)
            print("Game over...")

        if turn3 == "M":
            print("You proceed toward the mountains.  After walking all day through the jungle, you come upon the entrance to a cave.")
            print("""

 ********************************************************************************
*                    /   \              /'\       _                              *
*\_..           /'.,/     \_         .,'   \     / \_                            *
*    \         /            \      _/       \_  /    \     _                     *
*     \__,.   /              \    /           \/.,   _|  _/ \                    *
*          \_/                \  /',.,''\      \_ \_/  \/    \                   *
*                           _  \/   /    ',../',.\    _/      \                  *
*             /           _/m\  \  /    |         \  /.,/'\   _\                 *
*           _/           /MMmm\  \_     |          \/      \_/  \                *
*          /      \     |MMMMmm|   \__   \          \_       \   \_              *
*                  \   /MMMMMMm|      \   \           \       \    \             *
*                   \  |MMMMMMmm\      \___            \_      \_   \            *
*                    \|MMMMMMMMmm|____.'  /\_            \       \   \_          *
*                    /'.,___________...,,'   \            \   \        \         *
*                   /       \          |      \    |__     \   \_       \        *
*                 _/        |           \      \_     \     \    \       \_      *
*                /                               \     \     \_   \        \     *
*                                                 \     \      \   \__      \    *
*                                                  \     \_     \     \      \   *
*                                                   |      \     \     \      \  *
*                                                    \            |            \ *
 ********************************************************************************
                  """)
            print("The treasure awaits you inside!  Congratulations, you have beat Treasure Island.")