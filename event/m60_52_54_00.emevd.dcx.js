// ==EMEVD==
// @docs    er-common.emedf.json
// @compress    DCX_KRAK
// @game    Sekiro
// @string    N:\GR\data\Param\event\common_func.emevd N:\GR\data\Param\event\common_macro.emevd      
// @linked    [0,82]
// @version    3.4.1
// ==/EMEVD==

$Event(0, Default, function() {
    InitializeCommonEvent(0, 9008000, 1052540950);
    InitializeCommonEvent(1, 9008000, 1052540311);
    InitializeCommonEvent(2, 9008000, 1052540100);
    InitializeCommonEvent(3, 9008000, 1052540321);
    InitializeCommonEvent(4, 9008000, 1052540101);
    InitializeCommonEvent(5, 9008000, 1052540102);
    InitializeCommonEvent(6, 9008000, 1052540103);
    InitializeCommonEvent(7, 9008000, 1052540104);
    InitializeCommonEvent(8, 9008000, 1052540105);
    InitializeCommonEvent(9, 9008000, 1052540106);
    InitializeCommonEvent(10, 9008000, 1052540107);
    InitializeCommonEvent(11, 9008000, 1052540108);
    InitializeCommonEvent(12, 9008000, 1052540109);
    InitializeCommonEvent(13, 9008000, 1052540259);
    InitializeCommonEvent(14, 9008000, 1052540260);
    InitializeCommonEvent(15, 9008000, 1052540261);
    InitializeCommonEvent(16, 9008000, 1052540110);
    InitializeCommonEvent(17, 9008000, 1052540111);
    InitializeCommonEvent(18, 9008000, 1052540112);
    InitializeCommonEvent(19, 9008000, 1052540331);
    InitializeCommonEvent(20, 9008000, 1052540332);
    InitializeCommonEvent(21, 9008000, 1052540113);
    InitializeCommonEvent(22, 9008000, 1052540334);
    
    RegisterBonfire(1052540000, 1052541950, 0, 0, 0, 5);
    InitializeCommonEvent(0, 90005100, 76510, 76506, 1052541980, 77500, 6, 78500, 78501, 78502, 78503, 78504, 78505, 78506, 78507, 78508, 78509);
    InitializeEvent(0, 1052542200, 1052545200);
    InitializeCommonEvent(0, 90005200, 1052540259, 30003, 20003, 1052542304, 1071225242, 0, 0, 0, 0);
    InitializeCommonEvent(0, 90005200, 1052540260, 30003, 20003, 1052542304, 1071225242, 0, 0, 0, 0);
    InitializeCommonEvent(0, 90005200, 1052540261, 30004, 20004, 1052542304, 1071225242, 0, 0, 0, 0);
    InitializeCommonEvent(0, 90005200, 1052540311, 30003, 20003, 1052542311, 1072902963, 0, 0, 0, 0);
    InitializeCommonEvent(0, 90005200, 1052540320, 30005, 20005, 1052542320, 0, 0, 0, 0, 0);
    InitializeCommonEvent(0, 90005200, 1052540321, 30005, 20005, 1052542321, 0, 0, 0, 0, 0);
    InitializeCommonEvent(0, 90005200, 1052540322, 30005, 20005, 1052542322, 0, 0, 0, 0, 0);
    InitializeCommonEvent(0, 90005200, 1052540331, 30003, 20003, 1052542331, 0, 0, 0, 0, 0);
    InitializeCommonEvent(0, 90005261, 1052540334, 1052542334, 1112014848, 0, 0);
    InitializeCommonEvent(0, 90005300, 1052540491, 1052540331, 0, 0, 0);
    InitializeCommonEvent(0, 90005300, 1052540492, 1052540332, 0, 0, 0);
    InitializeCommonEvent(0, 90005300, 1052540494, 1052540334, 0, 0, 0);
    InitializeCommonEvent(0, 90005771, 1052540950, 1052542700);
});

$Event(1052542200, Restart, function(X0_4) {
    DisableCharacterCollision(X0_4);
    DisableLockOnPoint(X0_4, 220);
    EndEvent();
});


