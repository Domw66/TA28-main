update charities 
set charity_website = CONCAT('http://', charity_website)
where charity_id in (
130  ,
139  ,
205  ,
435  ,
627  ,
656  ,
768  ,
812  ,
817  ,
884  ,
904  ,
914  ,
978  ,
1011 ,
1249 ,
1302 ,
1397 ,
1432 ,
1457 ,
1484 ,
1509 ,
1584 ,
1709 ,
1710 ,
1760 ,
1791 ,
1829 ,
1856 ,
1913 ,
1979 ,
1988 ,
2002 ,
2048 ,
2050 ,
2056 ,
2176 ,
2223 ,
2254 ,
2279 ,
2283 ,
2290 ,
2353 ,
2428 ,
2453 ,
2573 ,
2623 ,
2632 ,
2658 ,
2729 ,
2751 ,
2760 ,
2924 ,
2952 ,
2994 ,
3039 ,
3064 ,
3108 ,
3126 ,
3196 ,
3198 ,
3235 ,
3344 ,
3454 ,
3461 ,
3509 ,
3576 ,
3593 ,
3701 ,
3745 ,
3762 ,
3787 ,
3815 ,
3884 ,
3885 ,
3970 ,
4054 ,
4067 ,
4149 ,
4165 ,
4289 ,
4393 ,
4441 ,
4479 ,
4505 ,
4604 ,
4702 ,
4799 ,
4814 ,
4902 ,
4921 ,
4949 ,
4958 ,
5035 ,
5052 ,
5084 ,
5102 ,
5216 ,
5267 ,
5353 ,
5455 ,
5550 ,
5581 ,
5587 ,
5595 ,
5614 ,
5627 ,
5740 ,
5755 ,
5761 ,
5774 ,
5794 ,
5837 ,
5847 ,
5854 ,
5864 ,
5884 ,
5973 ,
6002 ,
6014 ,
6053 ,
6099 ,
6128 ,
6238 ,
6293 ,
6299 ,
6348 ,
6380 ,
6401 ,
6421 ,
6537 ,
6634 ,
6676 ,
6727 ,
6778 ,
6784 ,
6847 ,
6892 ,
6929 ,
7017 ,
7022 ,
7070 ,
7123 ,
7202 ,
7216 ,
7218 ,
7264 ,
7278 ,
7304 ,
7315 ,
7334 ,
7368 ,
7376 ,
7419 ,
7438 ,
7455 ,
7491 ,
7505 ,
7585 ,
7642 ,
7644 ,
7787 ,
7817 ,
7849 ,
7929 ,
7957 ,
7962 ,
8067 ,
8087 ,
8106 ,
8186 ,
8206 ,
8231 ,
8366 ,
8403 ,
8424 ,
8435 ,
8659 ,
8738 ,
8830 ,
8862 ,
8870 ,
8881 ,
8921 ,
8971 ,
8975 ,
9187 ,
9284 ,
9286 ,
9329 ,
9372 ,
9403 ,
9543 ,
9565 ,
9578 ,
9641 ,
9649 ,
9913 ,
10031,
10153,
10267,
10394,
10396,
10420,
10479,
10514,
10536,
10612,
10670,
10767,
10830,
10877,
10898,
10982,
11169,
11322,
11511,
11515,
11551,
11562,
11619,
11649,
11715,
11742,
11779,
11844,
11862,
11865,
11889,
11912,
11921,
11930,
12066,
12068,
12121,
12220,
12232,
12273,
12315,
12435,
12463,
12468,
12599,
12600,
12626,
12634,
12650,
12668,
12738,
12778,
12825,
12929,
12934,
12938,
12964,
12977,
13058,
13110,
13154,
13269,
13326,
13446,
13461,
13526,
13610,
13664,
13732,
13792,
13835,
13873,
13908,
13913,
13923,
13962,
14117,
14144,
14148,
14152,
14170,
14180,
14186,
14198,
14267,
14293,
14305,
14351,
14385,
14400,
14422,
14427,
14457,
14481,
14497,
14534,
14570,
14696,
14813,
14825,
14880,
14938,
15019,
15088,
15251,
15278,
15287,
15299,
15328,
15378,
15445,
15475,
15477,
15484,
15515,
15553,
15607,
15732,
15812,
15826,
15850,
15868,
15870,
15875,
16106,
16120,
16188,
16233,
16269,
16373,
16392,
16407,
16453,
16457,
16470,
16490,
16555,
16585,
16596,
16633,
16699,
16757,
16780,
16827,
16834,
16927,
17068,
17130,
17195,
17248,
17376,
17477,
17515,
17603,
17712,
17743,
17822,
17882,
17958,
18001,
18071,
18154,
18178,
18258,
18261,
18263,
18335,
18338,
18422,
18483,
18490,
18594,
18628,
18697,
18703,
18724,
18777,
18800,
18843,
18857,
18861,
18868,
18872,
18896,
18921,
19023,
19189,
19190,
19252,
19288,
19397,
19403,
19548,
19571,
19598,
19633,
19669,
19672,
19673,
19700,
19796,
19816,
19825,
19876,
19935,
19960,
20022,
20066,
20068,
20121,
20144,
20194,
20218,
20249,
20267,
20296,
20336,
20403,
20483,
20493,
20544,
20616,
20653,
20688,
20699,
20710,
20735,
20772,
20841,
20852,
20922,
20951,
20976,
20997,
21001,
21008,
21029,
21117,
21217,
21262,
21267,
21364,
21473,
21501,
21503,
21736,
21756,
21794,
21808,
21884,
21900,
21970,
22012,
22050,
22134,
22168,
22269,
22321,
22372,
22442,
22457,
22480,
22654,
22664,
22666,
22668,
22697,
22740,
22883,
22926,
23131,
23158,
23196,
23222,
23251,
23306,
23330,
23335,
23454,
23520,
23596,
23625,
23742,
23751,
23871,
23901,
23979,
24084,
24098,
24115,
24143,
24196,
24232,
24329,
24359,
24370,
24417,
24464,
24487,
24572,
24586,
24613,
24691,
24743,
24800,
24865,
24926,
24941,
25113,
25117,
25201,
25350,
25399,
25457,
25476,
25478,
25575,
25607,
25622,
25638,
25639,
25640,
25894,
25919,
25933,
25979,
26004,
26008,
26086,
26140,
26152,
26154,
26183,
26276,
26323,
26388,
26393,
26404,
26457,
26522,
26544,
26554,
26571,
26573,
26590,
26604,
26614,
26633,
26651,
26691,
26752,
26923,
26939,
26955,
27011,
27022,
27099,
27166,
27171,
27180,
27189,
27238,
27314,
27533,
27553,
27688,
27716,
27765,
27783,
27816,
27826,
27888,
27912,
27956,
27979,
28050,
28061,
28068,
28077,
28150,
28235,
28243,
28246,
28296,
28363,
28433,
28484,
28532,
28566,
28633,
28757,
28873,
28898,
28989,
29014,
29072,
29187,
29223,
29229,
29241,
29254,
29296,
29311,
29376,
29402,
29447,
29460,
29478,
29537,
29561,
29743,
29794,
29804,
30115,
30209,
30233,
30244,
30270,
30277,
30413,
30487,
30498,
30503,
30538,
30656,
30788,
30793,
30900,
30912,
30943,
31074,
31143,
31176,
31204,
31242,
31275,
31340,
31399,
31404,
31536,
31539,
31583,
31607,
31641,
31643,
31725,
31738,
31759,
31770,
31905,
32044,
32201,
32257,
32261,
32292,
32296,
32300,
32329,
32395,
32484,
32685,
32702,
32718,
32804,
32809,
32825,
32847,
32876,
32880,
32927,
32947,
32985,
32999,
33094,
33144,
33163,
33172,
33176,
33263,
33287,
33298,
33318,
33462,
33492,
33508,
33541,
33643,
33682,
33692,
33765,
33800,
33844,
33949,
33974,
34113,
34153,
34233,
34258,
34457,
34474,
34483,
34509,
34525,
34588,
34647,
34759,
34786,
34796,
34799,
34804,
34806,
34821,
34829,
34886,
34992,
35023,
35060,
35063,
35267,
35505,
35553,
35614,
35620,
35727,
35778,
35790,
35799,
35883,
36001,
36057,
36122,
36143,
36156,
36198,
36285,
36311,
36333,
36334,
36395,
36468,
36510,
36551,
36570,
36604,
36648,
36683,
36689,
36758,
36774,
36787,
36829,
36836,
36906,
37004,
37112,
37170,
37211,
37298,
37308,
37326,
37417,
37427,
37445,
37446,
37451,
37455,
37491,
37505,
37536,
37684,
37725,
37740,
37818,
37848,
37882,
37940,
37964,
37983,
38007,
38071,
38078,
38133,
38159,
38179,
38221,
38283,
38288,
38346,
38475,
38489,
38505,
38519,
38528,
38545,
38575,
38624,
38678,
38778,
38787,
38815,
38863,
38948,
39048,
39091,
39103,
39114,
39249,
39266,
39286,
39310,
39323,
39373,
39382,
39388,
39429,
39473,
39512,
39590,
39599,
39683,
39739,
39755,
39777,
39833,
39873,
39911,
39921,
39966,
39972,
39989,
40096,
40166,
40223,
40236,
40304,
40366,
40375,
40381,
40410,
40414,
40554,
40691,
40805,
40866,
40891,
40904,
40913,
41037,
41107,
41153,
41188,
41223,
41242,
41251,
41301,
41571,
41595,
41668,
41684,
41704,
41717,
41731,
41935,
41947,
41963,
42068,
42103,
42139,
42167,
42269,
42271,
42405,
42466,
42473,
42535,
42543,
42544,
42545,
42557,
42567,
42617,
42655,
42819,
42861,
42942,
42963,
43094,
43186,
43197,
43499,
43569,
43610,
43618,
43683,
43713,
43727,
43731,
43751,
43782,
43784,
43977,
43990,
44098,
44110,
44113,
44211,
44367,
44399,
44484,
44487,
44520,
44523,
44528,
44531,
44638,
44642,
44664,
44777,
44834,
44959,
44962,
44993,
45008,
45017,
45029,
45077,
45159,
45218,
45230,
45386,
45411,
45436,
45589,
45598,
45627,
45678,
45733,
45759,
45844,
45860,
45880,
45973,
46140,
46241,
46262,
46273,
46317,
46338,
46341,
46377,
46378,
46427,
46459,
46478,
46533,
46652,
46722,
46724,
46766,
46956,
46989,
47008,
47014,
47033,
47060,
47111,
47127,
47206,
47210,
47212,
47250,
47311,
47319,
47331,
47450,
47466,
47539,
47614,
47649,
47688,
47720,
47867,
47941,
47945,
48005,
48086,
48144,
48145,
48193,
48231,
48420,
48424,
48460,
48490,
48505,
48559,
48585,
48632,
48666,
48674,
48770,
48859,
48899
);