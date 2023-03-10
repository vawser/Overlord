// ==EMEVD==
// @docs    er-common.emedf.json
// @compress    DCX_KRAK
// @game    Sekiro
// @string    N:\GR\data\Param\event\common_func.emevd N:\GR\data\Param\event\common_macro.emevd N:\GR\data\Param\event\m60.emevd     
// @linked    [0,82,166]
// @version    3.4.1
// ==/EMEVD==

$Event(0, Default, function() {
    InitializeCommonEvent(0, 9008000, 1043400100);
    InitializeCommonEvent(1, 9008000, 1043400101);
    InitializeCommonEvent(2, 9008000, 1043400102);
    InitializeCommonEvent(3, 9008000, 1043400103);
    InitializeCommonEvent(4, 9008000, 1043400104);
    InitializeCommonEvent(5, 9008000, 1043400105);
    InitializeCommonEvent(6, 9008000, 1043400106);
    InitializeCommonEvent(7, 9008000, 1043400107);
    InitializeCommonEvent(8, 9008000, 1043400108);
    InitializeCommonEvent(9, 9008000, 1043400109);
    InitializeCommonEvent(10, 9008000, 1043400200);
    InitializeCommonEvent(11, 9008000, 1043400110);
    InitializeCommonEvent(12, 9008000, 1043400111);
    InitializeCommonEvent(13, 9008000, 1043400112);
    InitializeCommonEvent(14, 9008000, 1043400113);
    InitializeCommonEvent(15, 9008000, 1043400114);
    InitializeCommonEvent(16, 9008000, 1043400115);
    InitializeCommonEvent(17, 9008000, 1043400116);
    InitializeCommonEvent(18, 9008000, 1043400117);
    InitializeCommonEvent(19, 9008000, 1043400118);
    InitializeCommonEvent(20, 9008000, 1043400119);
    InitializeCommonEvent(21, 9008000, 1043400120);
    InitializeCommonEvent(22, 9008000, 1043400121);
    InitializeCommonEvent(23, 9008000, 1043400122);
    InitializeCommonEvent(24, 9008000, 1043400123);
    InitializeCommonEvent(25, 9008000, 1043400124);
    InitializeCommonEvent(26, 9008000, 1043400125);
    InitializeCommonEvent(27, 9008000, 1043400126);
    InitializeCommonEvent(28, 9008000, 1043400127);
    InitializeCommonEvent(29, 9008000, 1043400128);
    InitializeCommonEvent(30, 9008000, 1043400129);
    InitializeCommonEvent(31, 9008000, 1043400130);
    InitializeCommonEvent(32, 9008000, 1043400131);
    InitializeCommonEvent(33, 9008000, 1043400132);
    InitializeCommonEvent(34, 9008000, 1043400133);
    InitializeCommonEvent(35, 9008000, 1043400134);
    InitializeCommonEvent(36, 9008000, 1043400135);
    InitializeCommonEvent(37, 9008000, 1043400136);
    InitializeCommonEvent(38, 9008000, 1043400137);
    InitializeCommonEvent(39, 9008000, 1043400138);
    
    InitializeCommonEvent(0, 90005251, 1043400200, 1092616192, 0, -1);
    InitializeCommonEvent(0, 90005300, 1043400200, 1043400200, 0, 0, 0);
});

$Event(50, Default, function() {
    InitializeEvent(0, 1043402200, 0);
});

$Event(1043402200, Restart, function() {
    EndIf(EventFlag(1043400200));
    DisableCharacterHPBarDisplay(1043400200);
    SetSpEffect(1043400200, 12189);
    WaitFixedTimeSeconds(3);
    ClearSpEffect(1043400200, 12189);
    EnableCharacterHPBarDisplay(1043400200);
});


