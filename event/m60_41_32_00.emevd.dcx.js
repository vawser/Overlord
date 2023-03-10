// ==EMEVD==
// @docs    er-common.emedf.json
// @compress    DCX_KRAK
// @game    Sekiro
// @string    N:\GR\data\Param\event\common_func.emevd N:\GR\data\Param\event\common_macro.emevd      
// @linked    [0,82]
// @version    3.4.1
// ==/EMEVD==

$Event(0, Default, function() {
    InitializeCommonEvent(0, 9008000, 1041320950);
    InitializeCommonEvent(1, 9008000, 1041320100);
    InitializeCommonEvent(2, 9008000, 1041320101);
    InitializeCommonEvent(3, 9008000, 1041320700);
    InitializeCommonEvent(4, 9008000, 1041320701);
    InitializeCommonEvent(5, 9008000, 1041320102);
    InitializeCommonEvent(6, 9008000, 1041320103);
    InitializeCommonEvent(7, 9008000, 1041320104);
    InitializeCommonEvent(8, 9008000, 1041320105);
    InitializeCommonEvent(9, 9008000, 1041320106);
    InitializeCommonEvent(10, 9008000, 1041320107);
    InitializeCommonEvent(11, 9008000, 1041320108);
    InitializeCommonEvent(12, 9008000, 1041320109);
    InitializeCommonEvent(13, 9008000, 1041320110);
    InitializeCommonEvent(14, 9008000, 1041320111);
    InitializeCommonEvent(15, 9008000, 1041320112);
    InitializeCommonEvent(16, 9008000, 1041320113);
    InitializeCommonEvent(17, 9008000, 1041320114);
    InitializeCommonEvent(18, 9008000, 1041320115);
    InitializeCommonEvent(19, 9008000, 1041320116);
    InitializeCommonEvent(20, 9008000, 1041320117);
    InitializeCommonEvent(21, 9008000, 1041320118);
    InitializeCommonEvent(22, 9008000, 1041320119);
    InitializeCommonEvent(23, 9008000, 1041320120);
    InitializeCommonEvent(24, 9008000, 1041320121);
    InitializeCommonEvent(25, 9008000, 1041320122);
    InitializeCommonEvent(26, 9008000, 1041320123);
    InitializeCommonEvent(27, 9008000, 1041320124);
    InitializeCommonEvent(28, 9008000, 1041320125);
    InitializeCommonEvent(29, 9008000, 1041320126);
    
    RegisterBonfire(1041320000, 1041321950, 0, 0, 0, 5);
    InitializeCommonEvent(0, 90005724, 1041320290, 1041320290, 70000, 0, 1, 1041325291);
    InitializeCommonEvent(0, 90005722, 1041320290, 1041320291);
    InitializeCommonEvent(0, 90005720, 1041320290, 1041320292, 10961, 181);
    InitializeCommonEvent(0, 90005720, 1041320290, 1041320293, 10961, 182);
    InitializeCommonEvent(0, 90005721, 1041320290, 1041320292);
    InitializeCommonEvent(0, 90005721, 1041320290, 1041320293);
    InitializeCommonEvent(0, 90005723, 1041320290);
    InitializeCommonEvent(0, 90005920, 1041320900, 1041321900, 1041323900);
    InitializeCommonEvent(0, 90005261, 1041329200, 1041322200, 1084227584, 0, 1701);
    InitializeCommonEvent(0, 90005261, 1041329201, 1041322200, 1084227584, 1073741824, 1701);
    InitializeCommonEvent(0, 90005261, 1041329202, 1041322200, 1084227584, 1065353216, 1702);
    InitializeCommonEvent(0, 90005261, 1041329203, 1041322200, 1084227584, 0, 1701);
    InitializeCommonEvent(0, 90005261, 1041329204, 1041322200, 1084227584, 1073741824, 1702);
    InitializeCommonEvent(0, 90005261, 1041329205, 1041322200, 1084227584, 1065353216, 1702);
    InitializeCommonEvent(0, 90005261, 1041329206, 1041322200, 1084227584, 0, 1701);
    InitializeCommonEvent(0, 90005725, 4745, 4746, 4748, 1041329205, 1041320700, 1041320701, 1041326700);
    InitializeCommonEvent(0, 90005703, 1041320700, 4746, 4747, 1041329206, 4746, 4745, 4749, 0);
    InitializeCommonEvent(0, 90005704, 1041320700, 4746, 4745, 1041329206, 3);
    InitializeCommonEvent(0, 90005702, 1041320700, 4748, 4745, 4749);
    InitializeCommonEvent(0, 90005703, 1041320701, 4746, 4747, 1041329207, 4746, 4745, 4749, 0);
    InitializeCommonEvent(0, 90005704, 1041320701, 4746, 4745, 1041329207, 3);
    InitializeCommonEvent(0, 90005728, 1041320701, 1041322706, 1041322707);
    InitializeCommonEvent(0, 90005727, 4746, 1041320700, 1041320701, 4745, 4748);
});

$Event(50, Default, function() {
    SetCharacterBackreadState(1041320700, true);
    SetCharacterBackreadState(1041320701, true);
});

$Event(1041320300, Restart, function() {
    ForceCharacterTreasure(1041320360);
    WaitFor(PlayerIsInOwnWorld() && !EventFlag(1041320321) && InArea(10000, 1041322350));
    SetEventFlagID(1041322320, ON);
});

$Event(1041320301, Restart, function() {
    WaitFor(PlayerIsInOwnWorld() && EventFlag(1041322320) && !InArea(10000, 1041322350));
    DisableCharacter(1041320350);
    DisableCharacterCollision(1041320350);
    SetEventFlagID(1041320321, ON);
    SetEventFlagID(1041322320, OFF);
});


