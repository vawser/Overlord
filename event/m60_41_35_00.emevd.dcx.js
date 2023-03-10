// ==EMEVD==
// @docs    er-common.emedf.json
// @compress    DCX_KRAK
// @game    Sekiro
// @string    N:\GR\data\Param\event\common_func.emevd N:\GR\data\Param\event\common_macro.emevd      
// @linked    [0,82]
// @version    3.4.1
// ==/EMEVD==

$Event(0, Default, function() {
    InitializeCommonEvent(0, 9008000, 1041350700);
    InitializeCommonEvent(1, 9008000, 1041350950);
    InitializeCommonEvent(2, 9008000, 1041350100);
    InitializeCommonEvent(3, 9008000, 1041350101);
    InitializeCommonEvent(4, 9008000, 1041350102);
    InitializeCommonEvent(5, 9008000, 1041350103);
    InitializeCommonEvent(6, 9008000, 1041350104);
    InitializeCommonEvent(7, 9008000, 1041350105);
    InitializeCommonEvent(8, 9008000, 1041350106);
    InitializeCommonEvent(9, 9008000, 1041350107);
    InitializeCommonEvent(10, 9008000, 1041350108);
    InitializeCommonEvent(11, 9008000, 1041350109);
    InitializeCommonEvent(12, 9008000, 1041350210);
    InitializeCommonEvent(13, 9008000, 1041350110);
    InitializeCommonEvent(14, 9008000, 1041350111);
    InitializeCommonEvent(15, 9008000, 1041350112);
    InitializeCommonEvent(16, 9008000, 1041350113);
    InitializeCommonEvent(17, 9008000, 1041350114);
    InitializeCommonEvent(18, 9008000, 1041350115);
    InitializeCommonEvent(19, 9008000, 1041350116);
    InitializeCommonEvent(20, 9008000, 1041350117);
    InitializeCommonEvent(21, 9008000, 1041350118);
    InitializeCommonEvent(22, 9008000, 1041350119);
    InitializeCommonEvent(23, 9008000, 1041350120);
    InitializeCommonEvent(24, 9008000, 1041350121);
    InitializeCommonEvent(25, 9008000, 1041350122);
    InitializeCommonEvent(26, 9008000, 1041350123);
    InitializeCommonEvent(27, 9008000, 1041350124);
    InitializeCommonEvent(28, 9008000, 1041350125);
    InitializeCommonEvent(29, 9008000, 1041350126);
    InitializeCommonEvent(30, 9008000, 1041350127);
    InitializeCommonEvent(31, 9008000, 1041350128);
    InitializeCommonEvent(32, 9008000, 1041350129);
    InitializeCommonEvent(33, 9008000, 1041350130);
    InitializeCommonEvent(34, 9008000, 1041350131);
    InitializeCommonEvent(35, 9008000, 1041350132);
    InitializeCommonEvent(36, 9008000, 1041350133);
    InitializeCommonEvent(37, 9008000, 1041350134);
    InitializeCommonEvent(38, 9008000, 1041350135);
    InitializeCommonEvent(39, 9008000, 1041350136);
    InitializeCommonEvent(40, 9008000, 1041350137);
    InitializeCommonEvent(41, 9008000, 1041350138);
    InitializeCommonEvent(42, 9008000, 1041350139);
    InitializeCommonEvent(43, 9008000, 1041350140);
    InitializeCommonEvent(44, 9008000, 1041350141);
    InitializeCommonEvent(45, 9008000, 1041350142);
    InitializeCommonEvent(46, 9008000, 1041350143);
    InitializeCommonEvent(47, 9008000, 1041350144);
    InitializeCommonEvent(48, 9008000, 1041350145);
    InitializeCommonEvent(49, 9008000, 1041350146);
    InitializeCommonEvent(50, 9008000, 1041350147);
    InitializeCommonEvent(51, 9008000, 1041350148);
    InitializeCommonEvent(52, 9008000, 1041350149);
    InitializeCommonEvent(53, 9008000, 1041350150);
    
    RegisterBonfire(1041350000, 1041351950, 0, 0, 0, 5);
    InitializeCommonEvent(0, 900005610, 1041351680, 100, 800, 0);
    InitializeCommonEvent(0, 90005300, 1041350210, 1041350210, 40144, 0, 0);
    InitializeEvent(0, 1041350700, 1041350700);
    InitializeEvent(0, 1041350701, 0);
    InitializeCommonEvent(0, 90005708, 1041350700, 6001, 0);
    InitializeEvent(0, 1041353702, 0);
});

$Event(1041352680, Restart, function() {
    CreateAssetfollowingSFX(1041351680, 100, 800);
});

$Event(1041350700, Restart, function(X0_4) {
    DisableCharacterGravity(X0_4);
    SetCharacterMaphit(X0_4, false);
});

$Event(1041350701, Restart, function() {
    EndIf(!PlayerIsInOwnWorld());
    WaitFor(CharacterHasSpEffect(10000, 9611) && !CharacterHasSpEffect(10000, 9612));
    ForceAnimationPlayback(10000, 60510, false, false, false);
    WaitFixedTimeSeconds(0.2);
    RestartEvent();
});

$Event(1041353702, Restart, function() {
    SetEventFlagID(1041359950, OFF);
    EndIf(!PlayerIsInOwnWorld());
    SetEventFlagID(1041359950, ON);
    EndEvent();
});


