// ==EMEVD==
// @docs    er-common.emedf.json
// @compress    DCX_KRAK
// @game    Sekiro
// @string    N:\GR\data\Param\event\common_func.emevd N:\GR\data\Param\event\m60.emevd N:\GR\data\Param\event\common_macro.emevd     
// @linked    [0,82,148]
// @version    3.4.1
// ==/EMEVD==

$Event(0, Default, function() {
    InitializeCommonEvent(0, 9008000, 1036440101);
    InitializeCommonEvent(1, 9008000, 1036440102);
    InitializeCommonEvent(2, 9008000, 1036440103);
    InitializeCommonEvent(3, 9008000, 1036440100);
    InitializeCommonEvent(4, 9008000, 1036440700);
    InitializeCommonEvent(5, 9008000, 1036440104);
    InitializeCommonEvent(6, 9008000, 1036440105);
    InitializeCommonEvent(7, 9008000, 1036440106);
    InitializeCommonEvent(8, 9008000, 1036440107);
    InitializeCommonEvent(9, 9008000, 1036440108);
    InitializeCommonEvent(10, 9008000, 1036440109);
    InitializeCommonEvent(11, 9008000, 1036440110);
    InitializeCommonEvent(12, 9008000, 1036440111);
    InitializeCommonEvent(13, 9008000, 1036440112);
    InitializeCommonEvent(14, 9008000, 1036440113);
    InitializeCommonEvent(15, 9008000, 1036440114);
    InitializeCommonEvent(16, 9008000, 1036440115);
    InitializeCommonEvent(17, 9008000, 1036440116);
    InitializeCommonEvent(18, 9008000, 1036440117);
    InitializeCommonEvent(19, 9008000, 1036440118);
    InitializeCommonEvent(20, 9008000, 1036440119);
    InitializeCommonEvent(21, 9008000, 1036440120);
    InitializeCommonEvent(22, 9008000, 1036440121);
    InitializeCommonEvent(23, 9008000, 1036440250);
    InitializeCommonEvent(24, 9008000, 1036440122);
    InitializeCommonEvent(25, 9008000, 1036440241);
    InitializeCommonEvent(26, 9008000, 1036440242);
    InitializeCommonEvent(27, 9008000, 1036440123);
    InitializeCommonEvent(28, 9008000, 1036440124);
    InitializeCommonEvent(29, 9008000, 1036440125);
    InitializeCommonEvent(30, 9008000, 1036440126);
    InitializeCommonEvent(31, 9008000, 1036440127);
    InitializeCommonEvent(32, 9008000, 1036440128);
    InitializeCommonEvent(33, 9008000, 1036440129);
    InitializeCommonEvent(34, 9008000, 1036440130);
    InitializeCommonEvent(35, 9008000, 1036440131);
    InitializeCommonEvent(36, 9008000, 1036440132);
    InitializeCommonEvent(37, 9008000, 1036440133);
    
    InitializeEvent(0, 1036442203, 1036440203);
    InitializeEvent(1, 1036442203, 1036440204);
    InitializeEvent(2, 1036442203, 1036440205);
    InitializeEvent(3, 1036442203, 1036440206);
    InitializeCommonEvent(0, 90005300, 1036440250, 1036440250, 40202, 0, 0);
    InitializeCommonEvent(0, 90005300, 1036440260, 1036440260, 1036440200, 0, 0);
    InitializeCommonEvent(0, 90005920, 1036440600, 1036441600, 1036443600);
    InitializeCommonEvent(0, 90005705, 1036440700);
});

$Event(50, Default, function() {
    SetCharacterBackreadState(1036440700, true);
    InitializeCommonEvent(0, 90005201, 1036440210, 30002, 20002, 1088421888, 0, 0, 0, 0, 0);
    InitializeCommonEvent(0, 90005261, 1036440220, 1036442220, 1092616192, 0, -1);
    InitializeCommonEvent(0, 90005261, 1036440230, 1036442220, 1092616192, 0, -1);
    InitializeCommonEvent(0, 90005261, 1036440231, 1036442220, 1092616192, 0, -1);
    InitializeCommonEvent(0, 90005251, 1036440241, 1097859072, 0, 0);
    InitializeCommonEvent(0, 90005251, 1036440242, 1097859072, 0, 0);
});

$Event(1036442203, Restart, function(X0_4) {
    ForceCharacterDeath(X0_4, false);
    EndEvent();
});


