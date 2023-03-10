// ==EMEVD==
// @docs    er-common.emedf.json
// @compress    DCX_KRAK
// @game    Sekiro
// @string    N:\GR\data\Param\event\common_func.emevd N:\GR\data\Param\event\common_macro.emevd      
// @linked    [0,82]
// @version    3.4.1
// ==/EMEVD==

$Event(0, Default, function() {
    InitializeCommonEvent(0, 9008000, 12070101);
    InitializeCommonEvent(1, 9008000, 12070382);
    InitializeCommonEvent(2, 9008000, 12070103);
    InitializeCommonEvent(3, 9008000, 12070950);
    InitializeCommonEvent(4, 9008000, 12070951);
    InitializeCommonEvent(5, 9008000, 12070100);
    InitializeCommonEvent(6, 9008000, 12070102);
    InitializeCommonEvent(7, 9008000, 12070104);
    InitializeCommonEvent(8, 9008000, 12070105);
    InitializeCommonEvent(9, 9008000, 12070300);
    InitializeCommonEvent(10, 9008000, 12070301);
    InitializeCommonEvent(11, 9008000, 12070310);
    InitializeCommonEvent(12, 9008000, 12070311);
    InitializeCommonEvent(13, 9008000, 12070312);
    InitializeCommonEvent(14, 9008000, 12070313);
    InitializeCommonEvent(15, 9008000, 12070320);
    InitializeCommonEvent(16, 9008000, 12070321);
    InitializeCommonEvent(17, 9008000, 12070322);
    InitializeCommonEvent(18, 9008000, 12070106);
    InitializeCommonEvent(19, 9008000, 12070355);
    InitializeCommonEvent(20, 9008000, 12070356);
    InitializeCommonEvent(21, 9008000, 12070357);
    InitializeCommonEvent(22, 9008000, 12070107);
    InitializeCommonEvent(23, 9008000, 12070108);
    InitializeCommonEvent(24, 9008000, 12070109);
    InitializeCommonEvent(25, 9008000, 12070110);
    InitializeCommonEvent(26, 9008000, 12070111);
    InitializeCommonEvent(27, 9008000, 12070112);
    InitializeCommonEvent(28, 9008000, 12070113);
    InitializeCommonEvent(29, 9008000, 12070114);
    InitializeCommonEvent(30, 9008000, 12070115);
    InitializeCommonEvent(31, 9008000, 12070116);
    InitializeCommonEvent(32, 9008000, 12070117);
    InitializeCommonEvent(33, 9008000, 12070118);
    InitializeCommonEvent(34, 9008000, 12070119);
    InitializeCommonEvent(35, 9008000, 12070120);
    InitializeCommonEvent(36, 9008000, 12070121);
    InitializeCommonEvent(37, 9008000, 12070122);
    InitializeCommonEvent(38, 9008000, 12070250);
    InitializeCommonEvent(39, 9008000, 12070251);
    InitializeCommonEvent(40, 9008000, 12070252);
    InitializeCommonEvent(41, 9008000, 12070253);
    InitializeCommonEvent(42, 9008000, 12070254);
    InitializeCommonEvent(43, 9008000, 12070255);
    InitializeCommonEvent(44, 9008000, 12070256);
    InitializeCommonEvent(45, 9008000, 12070123);
    InitializeCommonEvent(46, 9008000, 12070124);
    InitializeCommonEvent(47, 9008000, 12070271);
    InitializeCommonEvent(48, 9008000, 12070272);
    InitializeCommonEvent(49, 9008000, 12070273);
    InitializeCommonEvent(50, 9008000, 12070274);
    InitializeCommonEvent(51, 9008000, 12070275);
    InitializeCommonEvent(52, 9008000, 12070276);
    InitializeCommonEvent(53, 9008000, 12070125);
    InitializeCommonEvent(54, 9008000, 12070401);
    InitializeCommonEvent(55, 9008000, 12070402);
    InitializeCommonEvent(56, 9008000, 12070126);
    InitializeCommonEvent(57, 9008000, 12070127);
    InitializeCommonEvent(58, 9008000, 12070128);
    InitializeCommonEvent(59, 9008000, 12070129);
    InitializeCommonEvent(60, 9008000, 12070130);
    InitializeCommonEvent(61, 9008000, 12070131);
    InitializeCommonEvent(62, 9008000, 12070132);
    InitializeCommonEvent(63, 9008000, 12070133);
    InitializeCommonEvent(64, 9008000, 12070134);
    InitializeCommonEvent(65, 9008000, 12070135);
    InitializeCommonEvent(66, 9008000, 12070136);
    InitializeCommonEvent(67, 9008000, 12070137);
    InitializeCommonEvent(68, 9008000, 12070138);
    InitializeCommonEvent(69, 9008000, 12070139);
    InitializeCommonEvent(70, 9008000, 12070140);
    InitializeCommonEvent(71, 9008000, 12070141);
    InitializeCommonEvent(72, 9008000, 12070142);
    InitializeCommonEvent(73, 9008000, 12070143);
    InitializeCommonEvent(74, 9008000, 12070144);
    InitializeCommonEvent(75, 9008000, 12070145);
    InitializeCommonEvent(76, 9008000, 12070146);
    InitializeCommonEvent(77, 9008000, 12070147);
    InitializeCommonEvent(78, 9008000, 12070148);
    InitializeCommonEvent(79, 9008000, 12070149);
    InitializeCommonEvent(80, 9008000, 12070150);
    InitializeCommonEvent(81, 9008000, 12070151);
    InitializeCommonEvent(82, 9008000, 12070152);
    InitializeCommonEvent(83, 9008000, 12070153);
    
    RegisterBonfire(71270, 12071950, 0, 0, 0, 5);
    RegisterBonfire(71271, 12071951, 0, 0, 0, 5);
    InitializeCommonEvent(0, 900005610, 12071680, 100, 800, 0);
    InitializeCommonEvent(0, 90005501, 12070525, 12071525, 4, 12071525, 1045371526, 12071527, 12070527);
    InitializeCommonEvent(0, 90005501, 12070515, 12071515, 7, 12071515, 12071516, 12071517, 12070516);
    InitializeEvent(0, 12070510, 0);
});

$Event(50, Default, function() {
    SetCharacterBackreadState(12070700, true);
    SetCharacterBackreadState(12070701, true);
    InitializeEvent(0, 12070519, 0);
    InitializeCommonEvent(0, 90005250, 12070250, 12072250, 0, -1);
    InitializeCommonEvent(0, 90005250, 12070251, 12072250, 0, -1);
    InitializeCommonEvent(0, 90005250, 12070252, 12072250, 0, -1);
    InitializeCommonEvent(0, 90005250, 12070253, 12072250, 0, -1);
    InitializeCommonEvent(0, 90005250, 12070254, 12072250, 0, -1);
    InitializeCommonEvent(0, 90005250, 12070255, 12072250, 0, -1);
    InitializeCommonEvent(0, 90005250, 12070256, 12072250, 0, -1);
    InitializeCommonEvent(0, 90005211, 12070271, 30001, 20001, 12072271, 1073741824, 1072064102, 0, 0, 0, 0);
    InitializeCommonEvent(0, 90005211, 12070272, 30001, 20001, 12072271, 1073741824, 1056964608, 0, 0, 0, 0);
    InitializeCommonEvent(0, 90005211, 12070273, 30001, 20001, 12072271, 1073741824, 0, 0, 0, 0, 0);
    InitializeCommonEvent(0, 90005211, 12070274, 30001, 20001, 12072271, 1073741824, 1067030938, 0, 0, 0, 0);
    InitializeCommonEvent(0, 90005211, 12070275, 30001, 20001, 12072271, 1073741824, 1068708659, 0, 0, 0, 0);
    InitializeCommonEvent(0, 90005211, 12070276, 30001, 20001, 12072271, 1073741824, 1050253722, 0, 0, 0, 0);
    InitializeCommonEvent(0, 90005211, 12070300, 30001, 20001, 12072300, 1092616192, 0, 0, 0, 0, 0);
    InitializeCommonEvent(0, 90005211, 12070301, 30001, 20001, 12072300, 1092616192, 1056964608, 0, 0, 0, 0);
    InitializeCommonEvent(0, 90005211, 12070310, 30001, 20001, 12072310, 1092616192, 0, 0, 0, 0, 0);
    InitializeCommonEvent(0, 90005211, 12070311, 30001, 20001, 12072310, 1092616192, 1050253722, 0, 0, 0, 0);
    InitializeCommonEvent(0, 90005211, 12070312, 30001, 20001, 12072310, 1092616192, 1063675494, 0, 0, 0, 0);
    InitializeCommonEvent(0, 90005211, 12070313, 30001, 20001, 12072310, 1092616192, 0, 0, 0, 0, 0);
    InitializeCommonEvent(0, 90005261, 12070320, 12072300, 1084227584, 0, -1);
    InitializeCommonEvent(0, 90005211, 12070321, 30001, 20001, 12072320, 1092616192, 0, 0, 0, 0, 0);
    InitializeCommonEvent(0, 90005211, 12070322, 30001, 20001, 12072320, 1092616192, 0, 0, 0, 0, 0);
    InitializeCommonEvent(0, 90005200, 12070340, 30000, 20000, 12072340, 0, 0, 0, 0, 0);
    InitializeCommonEvent(0, 90005200, 12070341, 30000, 20000, 12072340, 1077936128, 0, 0, 0, 0);
    InitializeCommonEvent(0, 90005200, 12070342, 30000, 20000, 12072340, 1082130432, 0, 0, 0, 0);
    InitializeCommonEvent(0, 90005200, 12070343, 30000, 20000, 12072340, 1083179008, 0, 0, 0, 0);
    InitializeCommonEvent(0, 90005251, 12070345, 1084227584, 0, 3003);
    InitializeCommonEvent(0, 90005200, 12070355, 30000, 20000, 12072355, 0, 0, 0, 0, 0);
    InitializeCommonEvent(0, 90005200, 12070356, 30000, 20000, 12072355, 1045220557, 0, 0, 0, 0);
    InitializeCommonEvent(0, 90005200, 12070357, 30000, 20000, 12072355, 0, 0, 0, 0, 0);
    InitializeCommonEvent(0, 90005200, 12070358, 30000, 20000, 12072355, 1050253722, 0, 0, 0, 0);
    InitializeCommonEvent(0, 90005251, 12070380, 1114636288, 0, -1);
    InitializeCommonEvent(0, 90005200, 12070385, 30000, 20000, 12072340, 0, 0, 0, 0, 0);
    InitializeCommonEvent(0, 90005250, 12070382, 12072382, 0, -1);
    InitializeCommonEvent(0, 90005300, 12070402, 12070402, 40652, 1069547520, 0);
    InitializeEvent(0, 12073700, 12070700, 12070701);
});

$Event(12070510, Default, function() {
    InitializeCommonEvent(0, 90005500, 12070525, 12070526, 4, 12071525, 1045371526, 1045373526, 12071527, 12073527, 1045372526, 12072527, 12070527, 12070528, 0);
    InitializeCommonEvent(0, 90005500, 12070515, 12071515, 7, 12071515, 12071516, 12073516, 12071517, 12073517, 12072516, 12072517, 12070516, 12072517, 0);
});

$Event(12070519, Default, function() {
    EndIf(ThisEventSlot());
    SetEventFlagID(12070525, ON);
    SetEventFlagID(12070515, OFF);
});

$Event(12073700, Restart, function(X0_4, X4_4) {
    DisableCharacter(X0_4);
    SetCharacterBackreadState(X0_4, true);
    DisableCharacter(X4_4);
    SetCharacterBackreadState(X4_4, true);
});

$Event(12073701, Restart, function() {
    EndIf(!PlayerIsInOwnWorld());
    EndIf(EventFlag(3503));
    WaitFor(EventFlag(3506) && !EventFlag(12079006) && InArea(10000, 12072700));
    SetNetworkconnectedEventFlagID(12079005, ON);
    EndEvent();
});

$Event(12073702, Restart, function() {
    EndIf(!PlayerIsInOwnWorld());
    EndIf(EventFlag(3503));
    WaitFor(EventFlag(3506) && !EventFlag(12079008) && InArea(10000, 12072701));
    SetNetworkconnectedEventFlagID(12079007, ON);
    EndEvent();
});


