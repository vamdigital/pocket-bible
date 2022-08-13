export interface BookScripture {
  chapter: string;
  verse: string;
}
export interface Book {
  id: number;
  bookName: string;
  bookGist: string;
  bookScripture: BookScripture[];
  testament: "Old" | "New";
}

export const Books: Book[] = [
  {
    id: 1,
    testament: "Old",
    bookName: "Genesis",
    bookGist:
      "The first book of the Bible tells of the creation of the universe and how man was placed upon it, and God was pleased with all that he saw, until the disobedience of mankind made God decide to put an end to all things and sent the great waters to flood the earth. After which God made his promise to Noah.",
    bookScripture: [
      {
        chapter: "9:13",
        verse:
          "I am putting my bow in the clouds. It will be the sign of my covenant whith the world",
      },
    ],
  },
  {
    id: 2,
    bookName: "Exodus",
    testament: "Old",
    bookGist:
      "This book tells of the departure of the nation of Israel from Egypt and the birth and early life of Moses.",
    bookScripture: [
      {
        chapter: "6:6",
        verse:
          "I am the Lord: I will rescue you and set you free from your slavery to the Egyptians",
      },
    ],
  },
  {
    id: 3,
    bookName: "Leviticus",
    testament: "Old",
    bookGist:
      "The main theme of this book is the holiness of God and the ways in which his people were to worship and live.",
    bookScripture: [
      {
        chapter: "26:12",
        verse:
          "I will be with you; I will be your God, and you will be my people",
      },
    ],
  },
  {
    id: 4,
    bookName: "Numbers",
    testament: "Old",
    bookGist:
      "This book tells of the history of the Israelites and their journey from Egypt to the promised land of Canaan.",
    bookScripture: [
      {
        chapter: "6:24-26",
        verse:
          "May the Lord bless you and take care of you; May the Lord be kind and gracious to you; May the Lord look on you with favour and give you peace.",
      },
    ],
  },
  {
    id: 5,
    bookName: "Deuteronomy",
    testament: "Old",
    bookGist:
      "This book is the conclusion of the journey to the promised land. Moses speaks to his people reminding them of how God has saved and blessed his chosen people, whom he loves.",
    bookScripture: [
      {
        chapter: "6:5",
        verse:
          "Love the Lord your God with all your heart, with all your soul, and with all your strength",
      },
    ],
  },
  {
    id: 6,
    bookName: "Joshua",
    testament: "Old",
    bookGist:
      "The book of Joshua is the story of the Israelites invasion of Canaan under the leadership of Joshua and includes the famous Battle of Jericho.",
    bookScripture: [
      {
        chapter: "1:5",
        verse: "I will always be with you: I will never abandon you",
      },
      {
        chapter: "24.15",
        verse: "As for my family and me, we will serve the Lord",
      },
    ],
  },
  {
    id: 7,
    bookName: "Judges",
    testament: "Old",
    bookGist:
      "This books is composed of stories about the national heroes of the time. One of the better known being Samson, whose story is related in chapters 13-16.",
    bookScripture: [
      {
        chapter: "15:14",
        verse:
          "Suddenly the power of the Lord made him strong, and he broke the ropes round his arms and hands as if they were burnt thread",
      },
    ],
  },
  {
    id: 8,
    bookName: "Ruth",
    testament: "Old",
    bookGist:
      "A peaceful story - set in violent times showing the early ancestry of Jesus and the remarkable story of Naomi, Ruth and Boaz and how love comes to those in faith, yet disaster when God&apos;s people turn away from HIM.",
    bookScripture: [
      {
        chapter: "1:16",
        verse:
          "Don&apos;t ask me to leave you! Let me go with you. Wherever you go, I will go: wherever you live, I will live. Your people will be my people, and your God will be my God.",
      },
    ],
  },
  {
    id: 9,
    bookName: "1 Samuel",
    testament: "Old",
    bookGist:
      "The first book of Samuel records the change from the period of judges to the monarchy and of the last judge Samuel to Israel&apos;s first king Saul and also David. The main theme of this book is that faithfulness of God brings success, whilst disobedience brings disaster.",
    bookScripture: [
      {
        chapter: "15:22",
        verse:
          "Which does the Lord prefer: obedience or offerings and sacrifices? It is better to obey him than to sacrifice the best sheep to him.",
      },
      {
        chapter: "16:7",
        verse: "They look at the outward appearance but I look at the heart",
      },
    ],
  },
  {
    id: 10,
    bookName: "2 Samuel",
    testament: "Old",
    bookGist:
      "The sequel to the first Samuel is the history of David&apos;s reign as king. He is shown to be a man of deep faith and devotion to God, and could also win the loyalty of his people. At the same time he could be ruthless and commit sins to achieve his ambitions - but he confesses and accepts the punishment that God sends",
    bookScripture: [
      {
        chapter: "22:2-3",
        verse:
          "The Lord is my protector; he is my strong fortress. My God is my protection, and with him I am safe. He protects me like a shield; he defends me and keeps me safe. He is my saviour...",
      },
    ],
  },
  {
    id: 11,
    bookName: "1 Kings",
    testament: "Old",
    bookGist:
      "Continuing the history of the Israelite monarchy and the succession of Solomon as King of Israel and Judah, on the death of his father David. It is the story of the building of the Temple in Jerusalem and the division of the kingdom.",
    bookScripture: [
      {
        chapter: "9:4-5",
        verse:
          "If you will serve me in honesty and integrity; as your father David did, and if you obey my laws and do everything I have commanded you. I will keep the promise I made to your father David when I told him that Israel would always be ruled by his descendants.",
      },
    ],
  },
  {
    id: 12,
    bookName: "2 Kings",
    testament: "Old",
    bookGist:
      "This book tells of the fall of Samaria through to the destruction of Jerusalem and on the Elijah&apos;s successor - Elisha. National disasters were the result of the unfaithfulness of the kings and the people of Israel and Judah, which lead into one of the great turning points in the Israelite history.",
    bookScripture: [
      {
        chapter: "19:19",
        verse:
          "..Now, Lord our God, rescue us from the Assyrians, so that all the nations of the world will know that only you, O Lord, are God.",
      },
    ],
  },
  {
    id: 13,
    bookName: "1 Chronicles",
    testament: "Old",
    bookGist:
      "The same events of Samuel and Kings but from a different point of view. To show that, in spite of the disasters, God still kept his promises. He was working out his plan for his people through the great acheivements of David and Solomon and to all the people who remained faithful.",
    bookScripture: [
      {
        chapter: "7:14",
        verse:
          "..if they pray to me and repent and turn away from the evil they have been doing, then I will hear them in heaven, forgive their sins, and make their land prosperous again.",
      },
    ],
  },
  {
    id: 14,
    bookName: "Ezra",
    testament: "Old",
    bookGist:
      "Tells of the return of the Jews from exile, the rebuilding of the Temple and the religious reformation of the people.",
    bookScripture: [
      {
        chapter: "6:16",
        verse:
          "Then the people of Israel - the priests, the Levites, and all the others who had return from exile - joyfully dedicated the Temple.",
      },
    ],
  },
  {
    id: 15,
    bookName: "Nehemiah",
    testament: "Old",
    bookGist:
      "This book tells of the return of Nehemiah to Jerusalem to govern Judah, the rebuilding of the walls of Jerusalem, and the reading of the Law of God and the people&apos;s confession.",
    bookScripture: [
      {
        chapter: "9:1",
        verse:
          "..the people of Israel assembled to fast in order to show sorrow of their sins",
      },
    ],
  },
  {
    id: 16,
    bookName: "Esther",
    testament: "Old",
    bookGist:
      "The events of the book of Esther tell of the beautiful Hebrew queen and her elevation to the throne, and how she overthrew the conspiracy for the slaughter of the Jews.",
    bookScripture: [
      {
        chapter: "4:14",
        verse:
          "If you keep quiet at a time like this, help will come from heaven to the Jews, and they will be saved, but you will die and your father&apos;s family will come to an end. Yet how knows - maybe it was for a time like this that you were made queen!",
      },
    ],
  },
  {
    id: 17,
    bookName: "Job",
    testament: "Old",
    bookGist:
      "The book of Job is the story of a good man who suffers total disaster. It explains his suffering and his questioning of the Lord. It tells of his anger and although he does not lose faith, he realises the divine power of God and his wisdom so much that he repents of his wild and angry words. God reprimands Job&apos;s friends for failing to understand the meaning of his suffering, but Job is restored to even greater prosperity through his faith.",
    bookScripture: [
      {
        chapter: "23:10",
        verse:
          "Yet God knows every step I take; if he tests me, he will find me pure",
      },
    ],
  },
  {
    id: 18,
    bookName: "Psalms",
    testament: "Old",
    bookGist:
      "The book of Psalms is the hymn book and prayer book of the Bible. It is a collection which was used by the people of Israel in their worship. It includes hymns of praise and worship and prayers for help, protection and salvation as well as pleas for forgiveness and songs of thanksgiving.",
    bookScripture: [
      {
        chapter: "119:105",
        verse: "Your word is a lamp to guide me and a light for my path",
      },
      {
        chapter: "112:1",
        verse:
          "Praise the Lord! Happy is the person who honours the Lord, who takes pleasure in obeying his commands",
      },
      {
        chapter: "23",
        verse:
          "The Lord is my shepherd; I have everything I need. He lets me rest in fields of green grass and leads me to quiet pools of fresh water. He gives me new strength. He guides me in the right paths, as he has promised. Even if I go through the deepest darkness, I will not be afraid. Lord, for you are with me. Your shepherds rod and staff protect me. You prepare a banquet for me, where all my enemies can see me; you welcome me as an honoured guest and fill my cup to the brim. I know that your goodness and love will be with me all my life; and your house will be my home as long as I live",
      },
    ],
  },
  {
    id: 19,
    bookName: "Proverbs",
    testament: "Old",
    bookGist:
      "The book of Proverbs is a collection of moral as well as religious teachings, much of it to do with practical, everyday matters such as family relations, business dealings, humility, patience and respect for the poor and loyalty to friends.",
    bookScripture: [
      {
        chapter: "3:5-6",
        verse:
          "Trust in the Lord with all your heart. Never rely on what you think you know. Remember the Lord in everything you do, and he will show you the right way.",
      },
    ],
  },
  {
    id: 20,
    bookName: "Ecclesiastes",
    testament: "Old",
    bookGist:
      "This book contains the thoughts of a man who reflected deeply on human life. It has many negative thoughts which are depressing yet which can be overcome by the hope that God gives.",
    bookScripture: [
      {
        chapter: "7:5",
        verse:
          "It is better to have wise people reprimand you than to have stupid people sing your praises",
      },
      {
        chapter: "12:13",
        verse:
          "...have reverenced for God, and obey his commands, because this is all that human beings were created for.",
      },
    ],
  },
  {
    id: 21,
    bookName: "Song of Songs",
    testament: "Old",
    bookGist:
      "The Song of Songs is a series of love poems written by Solomon as celebration of love between a man and a woman. These songs are often interpreted as a picture of the relationship between Christ and the Church.",
    bookScripture: [
      {
        chapter: "1:15",
        verse: "How beautiful you are my love; how your eyes shine with love!",
      },
      {
        chapter: "8:6-7",
        verse:
          "Close your heart to every love but mine; hold no one in your arms but me. Love is as powerful as death; passion is as strong as death itself. It bursts into flame and burns like a raging fire. Water cannot put it out; no flood can drown it",
      },
    ],
  },
  {
    id: 22,
    bookName: "Isaiah",
    testament: "Old",
    bookGist:
      "This book is named after the great prophet Isaiah who tells, among other things of the coming of Jesus the Messiah. It also tells of how the people who listened and obeyed the Lord were rewarded, whilst those left in Exile without hope were set free and taken home to Jerusalem to start a new life. Jesus made particular reference to several words from Isaiah in his early ministry to express his calling.",
    bookScripture: [
      {
        chapter: "7:14",
        verse:
          "Well then, the Lord himself will give you a sign; a young woman who is pregnant will have a son and will name him Immanuel.",
      },
    ],
  },
  {
    id: 23,
    bookName: "Jeremiah",
    testament: "Old",
    bookGist:
      "The prophet Jeremiah warned God&apos;s people of the catastrophe that was to fall on their nation, he also foretold of the eventual return of the people from exile in Babylonia and the restoration of the nation. Jeremiah was a sensitive man who loved his people deeply.",
    bookScripture: [
      {
        chapter: "29:11",
        verse:
          "I alone know the plans I have for you, plans to bring you prosperity and not disaster, plans to bring about the future you hope for.",
      },
      {
        chapter: "32-27",
        verse:
          "I am the Lord, the God of the whole human race. Nothing is too difficult for me",
      },
    ],
  },
  {
    id: 24,
    bookName: "Lamentations",
    testament: "Old",
    bookGist:
      "The book of Lamentations is a collection of five poems, possibly written by Jeremiah. It mourns the destruction of Jerusalem, of its ruin and exile, and yet through all of this the message is to trust in God and hope for future.",
    bookScripture: [
      {
        chapter: "3:22:23",
        verse:
          "The Lord&apos;s unfailing love and mercy still continue, fresh as the morning as sure as the sunrise.",
      },
      {
        chapter: "3:40-41",
        verse:
          "Let us examine our ways and turn back to the Lord. Let us open our hearts to God in heaven and pray",
      },
    ],
  },
  {
    id: 25,
    bookName: "Ezekiel",
    testament: "Old",
    bookGist:
      "The prophet Ezekiel lived in exile in Babylon, and his message was for the people of Jerusalem and the exiles in Babylonia. He was man of deep faith and imagination and he spoke of God&apos;s judgement on Israel and also the future blessings of God and the salvation of his people.",
    bookScripture: [
      {
        chapter: "36:26",
        verse:
          "I will give you a new heart and a new mind. I will take away your stubborn heart of stone and give you an obedient heart",
      },
      {
        chapter: "36:28",
        verse:
          "Then you will live in the land I gave your ancestors. You will be my people and I will be your God",
      },
    ],
  },
  {
    id: 26,
    bookName: "Daniel",
    testament: "Old",
    bookGist:
      "Daniel was a Jew in exile in Babylon, and was greatly blessed by God. This book was written when the Jews were suffering under a pagan king. Through their faith and obedience they triumphed over their enemies.",
    bookScripture: [
      {
        chapter: "6:26-27",
        verse:
          "I command that throughout my empire everyone should fear and respect Daniel&apos;s God. He is a living God, and he will rule for ever. His kingdom will never be destroyed, and his power will never come to an end. He saves and resuces; he performs wonders and miracles in heaven and on earth. He saved Daniel from being killed by the lions",
      },
    ],
  },
  {
    id: 27,
    bookName: "Hosea",
    testament: "Old",
    bookGist:
      "The prophet Hosea was especially concerned about the idolatry of the people and their faithfulness towards God. He has a disastrous marriage to an unfaithful wife and used this is an example to tell the people of the sadness God feels because of their unfaithfulness. Yet through all this God&apos;s constant love for his people would win the nation back to himself and restore the relationship.",
    bookScripture: [
      {
        chapter: "2:19",
        verse:
          "Israel, I will make you my wife; I will be true and faithful; I will show you constant love and mercy and make you mine for ever",
      },
    ],
  },
  {
    id: 28,
    bookName: "Joel",
    testament: "Old",
    bookGist:
      "Little is known about the prophet Joel, but it is believed he lived during the time of the Persian Empire. He calls to the people to repent and warns them of God&apos;s impending judgement. He describes a terrible invasion of locusts and a devastating drought in Palestine. He also foretold of the coming of the Holy Spirit to all his believers.",
    bookScripture: [
      {
        chapter: "2:13",
        verse:
          "...Come back to the Lord your God. He is kind and full of mercy; he is patient and keeps his promise; he is always ready to forgive and not punish",
      },
    ],
  },
  {
    id: 29,
    bookName: "Amos",
    testament: "Old",
    bookGist:
      "The book of Amos deals with a time of great prosperity, notable religious piety and apparent security. But the prophet saw that this was limited to the wealthy and that it fed on injustice and oppression of the poor. Amos preached with great passion and courage that God would punish the nation if it did not turn from their idolatry and oppresion.",
    bookScripture: [
      {
        chapter: "5:14",
        verse:
          "Make it your aim to do what is right, not what is evil, so that you may live. Then the Lord God Almighty really will be with you, as you claim he is.",
      },
    ],
  },
  {
    id: 30,
    bookName: "Amos",
    testament: "Old",
    bookGist:
      "The book of Amos deals with a time of great prosperity, notable religious piety and apparent security. But the prophet saw that this was limited to the wealthy and that it fed on injustice and oppression of the poor. Amos preached with great passion and courage that God would punish the nation if it did not turn from their idolatry and oppresion.",
    bookScripture: [
      {
        chapter: "5:14",
        verse:
          "Make it your aim to do what is right, not what is evil, so that you may live. Then the Lord God Almighty really will be with you, as you claim he is.",
      },
    ],
  },
  {
    id: 31,
    bookName: "Obadiah",
    testament: "Old",
    bookGist:
      "This short book has only one chapter. It teaches, through the example of Edom, that God will punish those who trouble his people.",
    bookScripture: [
      {
        chapter: "1:15",
        verse:
          "The day is near when I, the Lord, will judge all nations. Edom, what you have done will be done to you. You will get back what you have given.",
      },
    ],
  },
  {
    id: 32,
    bookName: "Jonah",
    testament: "Old",
    bookGist:
      "Unlike other books of the Bible the book Jonah is in narrative form decribing the adventures of the prophet who tried to disobey God&apos;s command. He was caught in a violent storm at sea, swallowed by a great fish, yet kept alive by God to carry out his mission. It portrays God&apos;s absolute sovereignty over his creation, and how he is a God of love and mercy, who forgave and save the enemies of his people, rather than punish them.",
    bookScripture: [
      {
        chapter: "2:7",
        verse:
          "When I felt my life slipping away, then, O Lord, I prayed to you, and in your holy Temple you heard me",
      },
    ],
  },
  {
    id: 33,
    bookName: "Micah",
    testament: "Old",
    bookGist:
      "The prophet Micah warns Judah of a national catastrophe, caused by the injustice of the people. But he also sees hope for the future, and foretells of a descendant of David who will bring peace to the nation.",
    bookScripture: [
      {
        chapter: "6:8",
        verse:
          "No, the Lord has told us what is good. What he requires of us is this; to do what is just, to show constant love, and to live in humble fellowship with our God.",
      },
    ],
  },
  {
    id: 34,
    bookName: "Nahum",
    testament: "Old",
    bookGist:
      "The book of Nahum is a poem, celebrating the fall of Nineveh, the capital city of Israel&apos;s oppresive enemy, the Assyrians. It is seen as the judgement of God upon a cruel and arrogant nation.",
    bookScripture: [
      {
        chapter: "1:7",
        verse:
          "The Lord is good; he protects his people in times of trouble; he takes care of those who turn to him",
      },
    ],
  },
  {
    id: 35,
    bookName: "Habakkuk",
    testament: "Old",
    bookGist:
      "The book of Habakkuk shows how he was deeply disturbed by the violence of the cruel Babylonians, who were in power at the time, and he questions the Lord on his silence. The Lord&apos;s answer was that he would take action in his own good time. It concludes with a psalm celebrating the greatness of God and of Habakkuk&apos;s own great faith.",
    bookScripture: [
      {
        chapter: "3:2",
        verse:
          "O Lord, I have heard of what you have done, and I am filled with awe. Now do again in our times the great deeds you used to do. Be merciful, even when you are angry",
      },
    ],
  },
  {
    id: 36,
    bookName: "Zephaniah",
    testament: "Old",
    bookGist:
      "The prophet Zephaniah foretold a time of doom and destruction when Judah would be punished for the worship of other gods. Other nations would be punished also, yet although Jerusalem was doomeed it would be restored.",
    bookScripture: [
      {
        chapter: "3:17-18",
        verse:
          "The Lord your God is with you; his power gives you victory. The Lord will take delight in you, and in his love he will give you new life. He will sing and be joyful over you, as joyful as people at a festival",
      },
    ],
  },
  {
    id: 37,
    bookName: "Haggai",
    testament: "Old",
    bookGist:
      "This book is collection of moral as well as religious messages given from the Lord through the prophet Haggai. After the people had returned from exile to live in Jerusalem, some years later the Temple still lay in ruins. Haggai&apos;s message urged the people to rebuild the Temple and the Lord promises prosperity and peace for the future.",
    bookScripture: [
      {
        chapter: "2:9",
        verse:
          "The new Temple will be more splendid that the old one, and there I will give my my people prosperity and peace. The Lord Almighty has spoken",
      },
    ],
  },
  {
    id: 38,
    bookName: "Zechariah",
    testament: "Old",
    bookGist:
      "This book is in two parts - the first being the prophet&apos;s visions, the second more of his messages, mostly relating to the coming of Jesus the Messiah and the final judgement.",
    bookScripture: [
      {
        chapter: "1:3",
        verse: "but now I say to you, Return to me, and I will return to you",
      },
      {
        chapter: "9:9",
        verse:
          "Rejoice, rejoice, people of Zion! Shout for joy; you people of Jerusalem! Look your king is coming to you! He comes triumphant and victorious, but humble and riding on a donkey",
      },
    ],
  },
  {
    id: 39,
    bookName: "Malachi",
    testament: "Old",
    bookGist:
      "The last book of the Old Testament. The prophet&apos;s main concern is to call priests and people to renew their faithfulness to their covenant with God. The day of the Lord is coming!",
    bookScripture: [
      {
        chapter: "3:18",
        verse:
          "Once again my people will see the difference between what happens to the righteous and to the wicked, to the person who serves me and the one who does not",
      },
    ],
  },
  {
    id: 40,
    bookName: "Matthew",
    testament: "New",
    bookGist:
      "The Gospel according to Matthew begins with the birth of Jesus, his baptism and temptation, and then on to his ministry of preaching, teaching and healing in Galileel. After this it then tells of Jesus&apos; journey to Jerusalem, culmination his sacrifice and resurrenction.",
    bookScripture: [
      {
        chapter: "21:9",
        verse: "God bless him who comes in the name of the Lord",
      },
      {
        chapter: "1:21",
        verse:
          "She will have a son, and you will name him Jesus - because he will save his people from their sins",
      },
      {
        chapter: "16:26",
        verse:
          "Will people gain anything if they win the whole world but lose their life? There is nothing they can give to regain their life",
      },
      {
        chapter: "6:9-13",
        verse:
          "The Lord&apos;s Prayer - Our Father in heaven: May your holy name be honoured: may your kingdom come; may your will be done on earth as it is in heaven. Give us today the food we need. Forgive us the wrongs we have done, as we forgive the wrongs that others have done to us. Do not bring us to hard testing, but keep us safe from the Evil one.",
      },
      {
        chapter: "28:18-20",
        verse:
          "The Great Commission - Jesus drew near and said to them, &apos;I have been give all authority in the heaven and on earth. Go then, to all peoples everywhere and make them my disciples: baptise them in the name of the Father, the Son and the Holy Spirit, and teach them to obey everything I have commanded you. And I will be with you always, to the end of the age.&apos;",
      },
    ],
  },
  {
    id: 41,
    bookName: "Mark",
    testament: "New",
    bookGist:
      "The Gospel according to Mark presents the story of Jesus in a straightforward way. More emphasis on what Jesus did, rather than his words and teachings. As time passed, the followers of Jesus came to understand him better, but his opponents became more hostile.",
    bookScripture: [
      {
        chapter: "10:14",
        verse:
          "...Let the children come to me, and do not stop them, because the Kingdom of God belongs to such as these",
      },
      {
        chapter: "14:22",
        verse: "This is my body",
      },
    ],
  },
  {
    id: 42,
    bookName: "Luke",
    testament: "New",
    bookGist:
      "It is believed that Luke was a physician, and his Gospel is filled with concern for people in all kinds of need. He also stressed the humanity of Jesus and his sacrifice on our behalf. Throughout the Gospel, great emphasis is placed on prayer, the Holy Spirit, the role of women in the ministry of Jesus and God&apos;s forgiveness of sins.",
    bookScripture: [
      {
        chapter: "11:28",
        verse:
          'But Jesus answered, "Rather, how happy are those who hear the word of God and obey it!"',
      },
      {
        chapter: "19:10",
        verse: "The Son of Man came to seek and to save the lost",
      },
      {
        chapter: "23:26",
        verse: "They... put the cross on him, and made him carry it",
      },
    ],
  },
  {
    id: 43,
    bookName: "John",
    testament: "New",
    bookGist:
      "The Gospel according to John presents various miracles which showed that Jesus was the promised Saviour - the Son of God. He gives an eyewitness account of Jesus&apos; ministry, emphasising that by believing in him we will have eternal life.",
    bookScripture: [
      {
        chapter: "3:16",
        verse:
          "For God loved the world so much that he gave his only Son, so that everyone who believes in him may not die but have eternal life",
      },
      {
        chapter: "14:6",
        verse:
          'Jesus answered him, "I am the way, the truth and the life; no one goes to the Father except by me"',
      },
      {
        chapter: "17:1",
        verse: "Father, the hour has come",
      },
    ],
  },
  {
    id: 44,
    bookName: "Acts of Apostles",
    testament: "New",
    bookGist:
      "This is a continuation of the Gospel according to Luke. IT is the story of the early Christians, the coming of the Holy Spirit on the day of Pentecost and the work of spreading the Good News of Jesus to the ends of the earth.",
    bookScripture: [
      {
        chapter: "1:8",
        verse:
          "But when the Holy Spirit comes upon you, you will be filled with power, and you will be witness for me in Jerusalem, in all Judea and Samaria, and the ends of the earth",
      },
      {
        chapter: "2:42",
        verse:
          "They spent their time in learning from the apostles, taking part in the fellowship, and sharing in the fellowship meals and the prayers",
      },
      {
        chapter: "9:5",
        verse: "Who are you, Lord",
      },
    ],
  },
  {
    id: 45,
    bookName: "Romans",
    testament: "New",
    bookGist:
      "Paul&apos;s letter to the people of Rome was written to Christians there in preparation of his visit. He emphasises the righteousness that comes from faith, and he takes up such themes as service to God, the duty of Christians to the state and to one another, and questions of conscience.",
    bookScripture: [
      {
        chapter: "1:16",
        verse:
          "I have complete confidence in the gospel; it is God&apos;s power to save all who believe, first the Jews and also the Gentiles.",
      },
      {
        chapter: "8:28",
        verse:
          "We know that in all things God works for good with those who love him, those whom he has called according to his purpose",
      },
      {
        chapter: "15:1",
        verse: "Help the weak",
      },
    ],
  },
  {
    id: 46,
    bookName: "1 Corinthians",
    testament: "New",
    bookGist:
      "Paul&apos;s first letter to the church in Corinth was written to deal with the problems of Christian life that had arisen amongst the Christians there. The most widely known passage in this book - chapter 13 - presents love as the greatest of the fruit of the Spirit.",
    bookScripture: [
      {
        chapter: "2:9",
        verse:
          'However, as the scripture says, "What no one ever saw or heard, what no one ever thought could happen, is the very thing God prepared for those who love him"',
      },
      {
        chapter: "13:13",
        verse:
          "Meanwhile these three remain: faith, hope and love; and the greatest of these is love",
      },
    ],
  },
  {
    id: 47,
    bookName: "2 Corinthians",
    testament: "New",
    bookGist:
      "In his second letter to the Corinthians, Paul defends his own authority as some members of the church there had made strong attacks against him. He tells of his deep longing for reconciliation with the people and his great joy when this is brought about.",
    bookScripture: [
      {
        chapter: "5:17",
        verse:
          "Anyone who is joined to Christ is a new being; the old has gone, the new has come",
      },
      {
        chapter: "6:2",
        verse:
          "...Listen! This is the hour to receive God&apos;s favour; today is the day to be saved!",
      },
    ],
  },
  {
    id: 48,
    bookName: "Galatians",
    testament: "New",
    bookGist:
      "Paul&apos;s letter to the Galatians was written in order to bring back to true faith those who were being misled by false teachings within the church. He tells how, through the love that results from faith in Christ, the people can be put right with God.",
    bookScripture: [
      {
        chapter: "2:16",
        verse:
          "Yet we know that a person is put right with God only through faith in Jesus Christ, never by doing what the Law requires...",
      },
      {
        chapter: "6:7",
        verse:
          "Do not deceive yourselves; no one makes a fool of God. People will reap exactly what they sow",
      },
    ],
  },
  {
    id: 49,
    bookName: "Ephesians",
    testament: "New",
    bookGist:
      "Paul&apos;s letter to the church in Ephesus is an encouraging letter, developing the theme of unity and appealing to all to live their life in oneness with Jesus Christ. Everything is seen in the light of Christ&apos;s love, grace and purity.",
    bookScripture: [
      {
        chapter: "1:3",
        verse:
          "Let us give thanks to the God and Father of our Lord Jesus Christ! For in our union with Christ he has blessed us by giving us every spiritual blessing in the heavenly world",
      },
      {
        chapter: "6:10",
        verse:
          "Finally, build up your strength in union with the Lord and by means of his mighty power",
      },
    ],
  },
  {
    id: 50,
    bookName: "Philippians",
    testament: "New",
    bookGist:
      "Paul wrote this letter to the church in Philippi, to offer them thanks for their gift to him in his time of need. It also reassured them so that they might have courage and confidence in spite of all their troubles, and reminds them that their life is union with Christ is a gift of God&apos;s grace.",
    bookScripture: [
      {
        chapter: "1:21",
        verse:
          "For what is life? To me, it is Christ. Death, then, will bring more",
      },
      {
        chapter: "4:4",
        verse:
          "May you always be joyful in your union with the Lord. I say it again: rejoice",
      },
    ],
  },
  {
    id: 51,
    bookName: "Colossians",
    testament: "New",
    bookGist:
      "Paul writes this letter to the church in Colossae, after he found that false teachings were driving a wedge in the church, moving them away from Christian truth. After warning against these teachings, he urges them all to turn to Jesus Christ through whom God created the world.",
    bookScripture: [
      {
        chapter: "2:6",
        verse:
          "Since you have accepted Christ Jesus as Lord, live in union with him",
      },
      {
        chapter: "3:4",
        verse:
          "Your real life is Christ and when he appears, then you too will appear with him and share his glory!",
      },
    ],
  },
  {
    id: 52,
    bookName: "1 Thessalonians",
    testament: "New",
    bookGist:
      "In this first book, written to the people of Thessalonica where a new church had been established, Paul commended them for their faitfulness and love and encouraged them to continue working quietly for the Gospel while waiting in hope for Christ&apos;s return.",
    bookScripture: [
      {
        chapter: "3:12",
        verse:
          "May the Lord make your love for one another and for all people grow more and more and become as great as our love for you",
      },
      {
        chapter: "5:16-18",
        verse:
          "Be joyful always, pray at all times, be thankful in all circumstances. This is what God wants from you in your life in union with Christ Jesus",
      },
    ],
  },
  {
    id: 53,
    bookName: "2 Thessalonians",
    testament: "New",
    bookGist:
      "In this second letter to the church at Thessalonica, Paul tells of the Lord&apos;s coming, he encourages the people to remain steady in their faith, to work for a living, as Paul did, and persevere in doing good.",
    bookScripture: [
      {
        chapter: "3:5",
        verse:
          "May the Lord lead you into a greater understanding of God&apos;s love and the endurance that is given by Christ",
      },
      {
        chapter: "3:12",
        verse:
          "In the name of the Lord Jesus Christ we command these people and warn them to lead orderly lives and work to earn their own living",
      },
    ],
  },

  {
    id: 54,
    bookName: "1 Timothy",
    testament: "New",
    bookGist:
      "Timothy, a young Christian, became a companion and assistant to paul in his missionary work. In this first letter to Timothy, Paul warns him of false teachings within the church. He illustrates the need for avoiding evil practices and how to be a good servant of Jesus Christ, and about the  responsibilities he has towards various groups of believers.",
    bookScripture: [
      {
        chapter: "4:12",
        verse:
          "Do not let anyone look down on you because you are young, but be an example of the believers in your speech, your conduct, your love, faith and purity.",
      },
    ],
  },
  {
    id: 55,
    bookName: "2 Timothy",
    testament: "New",
    bookGist:
      "This second letter gives final instructions and encouragement from Paul to Timothy. The main theme is endurance and to do his duty as an evangelist and teacher in the face of suffering and opposition.",
    bookScripture: [
      {
        chapter: "2:15",
        verse:
          "Do your best to win full approval in God&apos;s sight, as a worker who is not ashamed of his work, one who correctly teaches the message of God&apos;s truth.",
      },
      {
        chapter: "3:12",
        verse:
          "In the name of the Lord Jesus Christ we command these people and warn them to lead orderly lives and work to earn their own living",
      },
    ],
  },
  {
    id: 56,
    bookName: "Titus",
    testament: "New",
    bookGist:
      "Titus was a Gentile convert to Christianity who became a fellow worker and assistant to Paul on the island of Crete. This letter from Paul expresses his main concerns for the church and advises Titus regarding Christian conduct and the need to be peaceful and friendly.",
    bookScripture: [
      {
        chapter: "2:11",
        verse:
          "For God has revealed his grace for the salvation of the whole human race",
      },
      {
        chapter: "2:14",
        verse:
          "He gave himself for us, to rescue us from all wickedness and to make us a pure people who belong to him alone and are eager to do good",
      },
    ],
  },
  {
    id: 57,
    bookName: "Philemon",
    testament: "New",
    bookGist:
      "Philemon was a prominent Christian from Colossae, and owed a slave name Onesimus. The slave ran away from his master, and eventually came in contact with Paul. Onesimus was converted by Paul who sent the slave back to his master. This letter appeals to Philemon to be reconciled to Onesimus and to treat him as a forgiven salve and a Christian brother.",
    bookScripture: [
      {
        chapter: "1:16",
        verse:
          "And now he is not just a slave, but much more that a slave; he is a dear brother in Christ. How much he means to me! And how much more he will mean to you, both as a slave and as a brother in the Lord!",
      },
    ],
  },
  {
    id: 58,
    bookName: "Hebrews",
    testament: "New",
    bookGist:
      "This letter was written to a group of Christians who, faced with increasing opposition, were in danger of abandoning their faith. By citing the example of the faith of some famous characters in Israel&apos;s history, it appeals to them to continue faithful to the end, with eyes fixed on Jesus.",
    bookScripture: [
      {
        chapter: "11:1",
        verse:
          "To have faith is to be sure of the things we hope for, to be certain of the things we cannot see",
      },
      {
        chapter: "13:5",
        verse:
          '...For God has said, "I will never leave you; I will never abandon you"',
      },
    ],
  },
  {
    id: 59,
    bookName: "James",
    testament: "New",
    bookGist:
      "The letter from James emphasises the importance of actions along with faith. A variety of other topics are dealt with, including patience and prayer in the practice of the Christian religion.",
    bookScripture: [
      {
        chapter: "1:22",
        verse:
          "Do not deceive yourselves by just listening to his word; instead, put it into practice",
      },
    ],
  },
  {
    id: 60,
    bookName: "1 Peter",
    testament: "New",
    bookGist:
      "The first letter from Peter was written to the Christians - God&apos;s chosen people - who lived in Asia Minor. It encourages those facing persecution and suffering for their faith, by reminding them of the death, resurrection and promised coming of the Lord Jesus Christ, and that they will be rewarded on that day when Jesus Christ is revealed.",
    bookScripture: [
      {
        chapter: "2:21",
        verse:
          "It was to this that God called you, for Christ himself suffered for you and left you example, so that you would follow in his steps",
      },
    ],
  },
  {
    id: 61,
    bookName: "2 Peter",
    testament: "New",
    bookGist:
      "The second letter from Peter tells of his concern with the teaching that Christ will not return again. He encourages the readers to hold firm to the true knowledge of God and of the Lord Jesus Christ as told to them by those who witnessed Jesus&apos; ministry first hand.",
    bookScripture: [
      {
        chapter: "1:3",
        verse:
          "God&apos;s divine power has given us everything we need to live a truly religious life through our knowledge of the one who called us to share in his own glory and goodness",
      },
    ],
  },
  {
    id: 62,
    bookName: "1 John",
    testament: "New",
    bookGist:
      "The first letter of John encourages the readers to live in fellowship with God and with his Son, Jesus Christ, and warns against following false teachings that would destroy their fellowship. He emphasised that Jesus Christ was a real human being, and all who believed in him must also love one another.",
    bookScripture: [
      {
        chapter: "4:8",
        verse: "Whoever does not love does not know God, for God is love.",
      },
    ],
  },
  {
    id: 63,
    bookName: "2 John",
    testament: "New",
    bookGist:
      "The second letter of John was probably addressed to a local church and its members, appealing to them to love one another and warning them against false teachers and their teachings.",
    bookScripture: [
      {
        chapter: "1:6",
        verse:
          "This love I speak of means that we must live in obedience to God&apos;s command. The command, as you have all heard from the beginning, is that you must all live in love",
      },
    ],
  },
  {
    id: 64,
    bookName: "3 John",
    testament: "New",
    bookGist:
      "The third letter of John praises a man named Gaius for his hospitality toward other Christians, and warns against a man called Diotrephes.",
    bookScripture: [
      {
        chapter: "1:4",
        verse:
          "Nothing makes me happier than to hear that my children live in the truth",
      },
      {
        chapter: "1:11",
        verse:
          "My dear friend, do no imitate what is bad, but imitate what is good. Whoever does good belongs to God; whoever does what is bad has not seen God",
      },
    ],
  },
  {
    id: 65,
    bookName: "Jude",
    testament: "New",
    bookGist:
      "The letter from Jude encourages all who read it to fight for the faith which, once and for all, God has given his people.",
    bookScripture: [
      {
        chapter: "1:24-25",
        verse:
          "To him who is able to keep you from falling, and to bring you faultless and joyful before his glorious presence - to the only God our Saviour, through Jesus Christ our Lord, be glory; majesty; might, and authority; from all ages past, and now, and for ever and ever! AMEN",
      },
    ],
  },
  {
    id: 66,
    bookName: "Revelation",
    testament: "New",
    bookGist:
      "The revelation to John was written in a time when Christians were being persecuted. In beautiful, symbolic language it encourages and warns believers concerning the events leading up to the end of this age and the coming of a new heaven and a new earth.",
    bookScripture: [
      {
        chapter: "22:12-13",
        verse:
          'Listen! says Jesus, "I am coming soon! I will bring my rewards with me, to give to each one according to what he has done. I am the first and the last, the beginning and the end"',
      },
    ],
  },
];
